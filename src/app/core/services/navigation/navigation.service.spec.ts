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
});
