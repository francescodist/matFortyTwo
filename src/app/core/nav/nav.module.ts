import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [NavComponent],
    imports: [CommonModule, RouterModule]
})
export class NavModule {}
