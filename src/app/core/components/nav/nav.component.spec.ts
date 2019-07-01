import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LogoModule } from '../logo/logo.module';
import { NavMenuItemComponent } from './nav-menu-item/nav-menu-item.component';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { sideNavPath } from '../../../nav-routing';
import { MatExpansionModule } from '@angular/material';

describe('NavComponent', () => {
    let component: NavComponent;
    let fixture: ComponentFixture<NavComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NavComponent,
                NavMenuItemComponent,
                NavToolbarComponent,
            ],
            imports: [
                RouterTestingModule.withRoutes([
                    {
                        path: sideNavPath,
                        children: [],
                    },
                ]),
                MatSidenavModule,
                LogoModule,
                MatListModule,
                MatIconModule,
                MatToolbarModule,
                MatExpansionModule,
                BrowserAnimationsModule,
                HttpClientTestingModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NavComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
