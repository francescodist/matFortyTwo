import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation.service';

import { Page } from './navigation.service';

fdescribe('NavigationService', () => {
    let service: NavigationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NavigationService]
        });
        service = TestBed.get(NavigationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get the corret navigationItems', () => {
        const mockNavRouteItems = [
            { path: 'somePath' },
            { path: 'somePath2' },
            { path: 'somePath3' }
        ];
        // tslint:disable-next-line:no-string-literal
        service['navigationItems'] = mockNavRouteItems;
        expect(service.getNavigationItems()).toEqual(mockNavRouteItems);
    });
});
