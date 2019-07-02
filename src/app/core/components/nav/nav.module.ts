import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoModule } from '../logo/logo.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavMenuItemComponent } from './nav-menu-item/nav-menu-item.component';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
    declarations: [NavComponent, NavMenuItemComponent, NavToolbarComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatSidenavModule,
        LogoModule,
        FlexLayoutModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatExpansionModule,
    ],
})
export class NavModule {}
