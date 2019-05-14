# MatFortyTwo

The answer to everything (well... almost) that's Angular Material

## Description

MatFortyTwo is a boilerplate for Angular Material that promotes a design
with two separate navigation stacks. One at root level and one (with title
and sidenav) accessible only after having logged in. It also packs a lot
of perks to help you kickstart your Angular project in a matter of minutes!

Angular CLI Version: 7.3.8 \
Angular Material Version: 7.3.7

## Perks
 - **Navigation Flow and guarded access for Pages**
 - **Script to generate root/sidenav page**
 - **Theming**
 - **Complete authorization flow with Token**
 - **Lazy Loaded Pages**
 - **Pre-built responsive Sidenav Component and Login Page**
 - **Linting with pre-commit check**
 - **Many more coming soon...**
 
You can just focus on the content of your application! If you use the 
built-in scripts for page generation, everything else will be taken care 
of for you!

## Script Usage
This will generate a new component (**PageNamePageComponent**) with routing in 
**_src/app/pages/page-name_** 

**!!!Use kebab-case for page names!!!**
```bash
# GENERATE A ROOT PAGE
npm run genpage -- -r page-name

# GENERATE A SIDENAV PAGE    
npm run genpage -- -r page-name

# GENERATE A PAGE THAT'S BOTH ROOT AND SIDENAV
npm run genpage -- -rn page-name

# GENERATE A SIDENAV PAGE WITH SPECIFIC ICON NAME (mat-icon)
# (The icon will be in the sidenav next to the tile of the page)
npm run genpage -- -n page-name -i home
```

If you want to edit further, you can find the generated routes in:\
**_src/app/app-routing.module.ts_** - Root Page \
**_src/app/nav-routing.ts_** - SideNav Page

## Theming

Simply go to **_src/variables.scss_** and change the values for
font, primary, accent or warn color.

