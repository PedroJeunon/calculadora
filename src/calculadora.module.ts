import { Calculadora } from './calculadora';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule],
    declarations: [Calculadora],
    exports: [Calculadora],
    entryComponents: [Calculadora],
})
export class CalculadoraModule { }