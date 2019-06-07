import { TestBed, async, inject } from '@angular/core/testing';

import { NavChildGuard } from './nav-child.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { sideNavPath } from '../nav-routing';

describe('NavChildGuard', () => {
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
            providers: [NavChildGuard],
        });
    });

    it('should ...', inject([NavChildGuard], (guard: NavChildGuard) => {
        expect(guard).toBeTruthy();
    }));
});
