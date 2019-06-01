import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation.service';

fdescribe('NavigationService', () => {
    let service: NavigationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NavigationService],
        });
        service = TestBed.get(NavigationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get the correct navigationItems', () => {
        const mockNavRouteItems = [
            { path: 'somePath' },
            { path: 'somePath2' },
            { path: 'somePath3' },
        ];
        // tslint:disable-next-line:no-string-literal
        service['navigationItems'] = mockNavRouteItems;
        expect(service.getNavigationItems()).toEqual(mockNavRouteItems);
    });

    it('should set the activePage', () => {
        service.setActivePage('fakeTitle', true);
        // tslint:disable-next-line:no-string-literal
        const activePage = service['activePage'];
        expect(activePage.title).toEqual('fakeTitle');
        expect(activePage.isChild).toEqual(true);
    });

    it('should get the activePage', () => {
        service.setActivePage('fakeTitle', false);
        // tslint:disable-next-line:no-string-literal
        const activePage = service['activePage'];
        expect(service.getActivePage()).toEqual(activePage);
    });

    it('should get the correct selectedNavigationItem by the item path', () => {
        spyOn(service, 'setActivePage');
        const mockNavRouteItems = [
            { path: 'somePath', data: { title: 'someTitle' } },
            { path: 'somePath2' },
            { path: 'somePath3' },
        ];
        // tslint:disable-next-line:no-string-literal
        service['navigationItems'] = mockNavRouteItems;
        service.selectNavigationItemByPath('somePath');
        expect(service.setActivePage).toHaveBeenCalledWith(
            mockNavRouteItems[0].data.title,
        );
    });

    it('should get the correct selectedNavigationItem', () => {
        const navigationItem = { path: 'somePath '};
        // tslint:disable-next-line:no-string-literal
        service['selectedNavigationItem'] = navigationItem;
        expect(service.getSelectedNavigationItem()).toEqual(navigationItem);
    });
});
