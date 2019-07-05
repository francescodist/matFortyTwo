import { TestBed, inject } from '@angular/core/testing';

import { NavGuard } from './nav.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { sideNavPath } from '../nav-routing';

describe('NavGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([
                    {
                        path: sideNavPath,
                        children: [],
                    },
                ]),
            ],
            providers: [NavGuard],
        });
    });

    it('should ...', inject([NavGuard], (guard: NavGuard) => {
        expect(guard).toBeTruthy();
    }));
});
