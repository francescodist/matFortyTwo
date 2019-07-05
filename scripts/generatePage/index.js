const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');
const argv = require('yargs')
    .alias('r', 'root')
    .alias('n', 'nav')
    .alias('c', 'child')
    .alias('i','icon')
    .alias('g', 'group')
    .boolean(['r', 'n', 'c']).demandCommand(1).argv;

const isRoot = argv.root;
const isNav = argv.nav;
const isChild = argv.child;
const icon = argv.icon;
const group = argv.group || '';
const pageName = argv._[0];

generatePage();

async function generatePage() {
    try {
        let res = await exec(`ng g m pages/${pageName}-page --routing`);
        console.log(res.stdout);
        res = await exec(`ng g c pages/${pageName}-page`);
        console.log(res.stdout);
        const title = pageName.split('-').map(s => s.slice(0,1).toUpperCase() + s.slice(1)).join('');
        const componentName =  title + 'PageComponent';
        let routingFileText = fs.readFileSync(`src/app/pages/${pageName}-page/${pageName}-page-routing.module.ts`, 'utf-8');
        routingFileText = `import { ${componentName} } from './${pageName}-page.component';\r\n\r\n` + routingFileText;
        const route = `{path:'',component:${componentName},data:{shouldReuse:true,key:'${pageName}'}},`;
        routingFileText = routingFileText.replace(/(routes[^\[]+\[)(.*)(][^/n]*\n)/, `$1 ${route} $2 $3`);
        fs.writeFileSync(`src/app/pages/${pageName}-page/${pageName}-page-routing.module.ts`, routingFileText, 'utf-8');
        let navRoute =
            `path: '${pageName}',` +
            `loadChildren: () =>
                import('./pages/${pageName}-page/${pageName}-page.module').then(
                    m => m.${title}PageModule,
                ),`;
        if (isRoot) {
            let rootRoutesFileText = fs.readFileSync('src/app/app-routing.module.ts', 'utf-8');
            rootRoutesFileText = rootRoutesFileText.replace(
                /(routes[^=]+=[\s]+\[)/,
                `$1{${navRoute}},`
            );
            fs.writeFileSync('src/app/app-routing.module.ts', rootRoutesFileText,'utf-8')
        }
        if (isNav) {
            navRoute = `data: {title: '${title}'},` +
                `icon: '${icon || 'menu'}',` +
                `group: '${group}',` +
                navRoute;
            let navRoutesFileText = fs.readFileSync('src/app/nav-routing.ts', 'utf-8');
            navRoutesFileText = navRoutesFileText.replace(
                /(navRoutes[^=]+=[\s]+\[)([^\]]*)(])/,
                `$1$2{${navRoute}},$3`);
            fs.writeFileSync('src/app/nav-routing.ts',navRoutesFileText, 'utf-8')
        }
    } catch (e) {
        console.log('Error during page generation');
        console.log(e.message);
    }
}




