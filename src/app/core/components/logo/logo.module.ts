import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';

@NgModule({
    declarations: [LogoComponent],
    exports: [LogoComponent],
    imports: [CommonModule],
})
export class LogoModule {}
