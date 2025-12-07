import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from './card/card';

@NgModule({
    imports: [CommonModule],
    declarations: [Card],
    exports: [Card],
})
export class SharedModule { }