import { TestBed, async } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { StorageService } from '../core/services/storage/storage.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

class MockStorageService {
    read() {
        return true;
    }

    save() {
        return true;
    }

    remove() {
        return true;
    }
}

describe('AuthService', () => {
    let authService: AuthService;
    let storageService: StorageService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                { provide: StorageService, useClass: MockStorageService },
                AuthService,
            ],
        });
        authService = TestBed.get(AuthService);
        storageService = TestBed.get(StorageService);
    }));

    it('should be created', () => {
        expect(authService).toBeTruthy();
    });

    describe('mockLogin', () => {
        it('save the token to storage and return the redirectUrl', () => {
            spyOn(storageService, 'save');
            authService.redirectUrl = '/welcome';

            authService
                .mockLogin('user', 'user')
                .then((redirectUrl: string) => {
                    expect(storageService.save).toHaveBeenCalled();
                    expect(redirectUrl).toEqual('/welcome');
                });
        });

        it('should throw an error and reject the promise in the catch block', () => {
            spyOn(Promise, 'reject');
            const errorText =
                'When using mockLogin, login with credentials: \nemail: user\npassword:user';

            authService
                .mockLogin('badUser', 'badPassword')
                .then(() => {})
                .catch(() => {
                    expect(Promise.reject).toHaveBeenCalledWith(errorText);
                });
        });
    });

    describe('getToken', () => {
        it('should get the correct token', () => {
            authService.token = 'fakeTokenValue';
            expect(authService.getToken()).toEqual('fakeTokenValue');
        });
    });

    describe('logout', () => {
        it('should set the token to an empty string and remove the auth token from storage', () => {
            spyOn(storageService, 'remove');

            authService.logout();

            expect(authService.token).toEqual('');
            expect(storageService.remove).toHaveBeenCalled();
        });
    });

    describe('isLogged', () => {
        it('should return true if the token length is greater than 0', () => {
            authService.token = 'fakeTokenValue';
            expect(authService.isLogged()).toEqual(true);
        });

        it('should return false if the token length is not greater than 0', () => {
            authService.token = '';
            expect(authService.isLogged()).toEqual(false);
        });
    });
});
