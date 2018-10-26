import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";

@Component({
  selector: "app-calculadora",
  templateUrl: "./calculadora.component.html",
  styles: []
})
export class CalculadoraComponent implements OnInit {
  lossConector: number = 0.75;
  lossEmpalmes: number = 0.1;
  resultado = 0;
  longitudFibra: number = 0;
  longitudOnda: number = 0;
  longitudesDeOnda: number[] = [];
  cantidadConectores: number = 0;
  cantidadEmpalmes: number = 0;
  tipoFibra: String = "";
  margenSeguridad: number = 0;
  constructor() {}

  ngOnInit() {}

  calculate() {
    let atenuacionFibra = 0;

    if (this.tipoFibra === "1" && this.longitudOnda === 850) {
      // atenuacionFibra = 3;
      atenuacionFibra = 3.5;
    } else if (this.tipoFibra === "1" && this.longitudOnda === 1300) {
      // atenuacionFibra = 0.7;
      atenuacionFibra = 1.5;
    } else if (this.tipoFibra === "2" && this.longitudOnda === 1310) {
      // atenuacionFibra = 0.35;
      atenuacionFibra = 0.4;
    } else if (this.tipoFibra === "2" && this.longitudOnda === 1550) {
      // atenuacionFibra = 0.22;
      atenuacionFibra = 0.3;
    }

    this.resultado =
      this.longitudFibra * atenuacionFibra +
      this.lossEmpalmes * this.cantidadEmpalmes +
      this.lossConector * this.cantidadConectores +
      this.margenSeguridad;
      console.log();
  }

  ChangeFibraTipos() {
    if (this.tipoFibra === "1") {
      this.longitudesDeOnda = [850, 1300];
    } else if (this.tipoFibra === "2") {
      this.longitudesDeOnda = [1310, 1550];
    } else {
      this.longitudesDeOnda = [];
    }
  }
}
