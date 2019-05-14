import { TestBed } from '@angular/core/testing';

import { CrudService } from './crud.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Injectable({
    providedIn: 'root',
})
class TestCrud extends CrudService {
    endpoint = '';
    constructor(http: HttpClient) {
        super(http);
    }
}

describe('CrudService', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        }),
    );

    it('should be created', () => {
        const service: CrudService = TestBed.get(TestCrud);
        expect(service).toBeTruthy();
    });
});
