import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { LogoModule } from '../../core/logo/logo.module';
import {
    MatButtonModule,
    MatCardModule,
    MatInputModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [LoginPageComponent],
    imports: [
        CommonModule,
        LoginPageRoutingModule,
        LogoModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        FlexLayoutModule
    ]
})
export class LoginPageModule {}
