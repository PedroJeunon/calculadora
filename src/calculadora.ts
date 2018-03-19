import { Component } from '@angular/core';

@Component({
    selector: 'Calculadora'
})
export class Calculadora {
    constructor() {
        
    }

    somar(a: number, b: number) {
        return a + b;
    }

    subtrair(a: number, b: number) {
        return a - b;
    }

    multiplicar(a: number, b: number) {
        return a * b;
    }

    dividir(a: number, b: number) {
        return a / b;
    }
}