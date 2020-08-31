import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra-cliente',
  templateUrl: './compra-cliente.component.html',
  styleUrls: ['./compra-cliente.component.css']
})
export class CompraClienteComponent implements OnInit {  
  Clientes = [];
  Monto: number;
  Nombre:string;
  DUI:string;
  Vehiculo:string;
  desc:number;

  constructor() { }

  ngOnInit(): void {
    this.desc= 0;
    this.Clientes = [];
  }

  registrarVisita(){    

    this.Clientes.find(p=> p.DUI == this.DUI);
    let cliente = this.Clientes.find(e => e.DUI === this.DUI);
    if(cliente)
    {          
      cliente.Gastado += this.Monto;
      cliente.Vehiculo = this.Vehiculo;
      cliente.Visitas += 1;
    }
    else{
      this.Clientes.push({DUI:this.DUI,Nombre:this.Nombre,Gastado:this.Monto,Vehiculo:this.Vehiculo, Visitas:1});
    }
    this.desc = this.Monto*0.05;
  }

}






export class AppComponent {
}
