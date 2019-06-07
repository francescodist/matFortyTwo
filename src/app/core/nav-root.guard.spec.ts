import { TestBed, async, inject } from '@angular/core/testing';

import { NavRootGuard } from './nav-root.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { sideNavPath } from '../nav-routing';

describe('NavStackGuard', () => {
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
            providers: [NavRootGuard],
        });
    });

    it('should ...', inject([NavRootGuard], (guard: NavRootGuard) => {
        expect(guard).toBeTruthy();
    }));
});
