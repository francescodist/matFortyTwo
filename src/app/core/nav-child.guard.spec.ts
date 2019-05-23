import { TestBed, async, inject } from '@angular/core/testing';

import { NavChildGuard } from './nav-child.guard';

describe('NavChildGuard', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NavChildGuard],
        });
    });

    it('should ...', inject([NavChildGuard], (guard: NavChildGuard) => {
        expect(guard).toBeTruthy();
    }));
});
