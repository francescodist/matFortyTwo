import { TestBed, async, inject } from '@angular/core/testing';

import { NavRootGuard } from './nav-root.guard';

describe('NavStackGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NavRootGuard],
        });
    });

    it('should ...', inject([NavRootGuard], (guard: NavRootGuard) => {
        expect(guard).toBeTruthy();
    }));
});
