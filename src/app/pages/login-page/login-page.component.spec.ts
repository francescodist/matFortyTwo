import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { LogoModule } from '../../core/components/logo/logo.module';
import {
    MatButtonModule,
    MatCardModule,
    MatInputModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginPageComponent', () => {
    let component: LoginPageComponent;
    let fixture: ComponentFixture<LoginPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LoginPageComponent],
            imports: [
                LogoModule,
                MatCardModule,
                MatButtonModule,
                MatInputModule,
                BrowserAnimationsModule,
                FormsModule,
                HttpClientTestingModule,
                RouterTestingModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
