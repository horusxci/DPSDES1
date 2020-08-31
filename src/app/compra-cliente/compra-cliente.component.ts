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
  Descuento:number;

  constructor() { }

  ngOnInit(): void {
    this.Descuento= 0;
    this.Clientes = [];
  }

  registrarVisita(){    

    this.Clientes.find(p=> p.DUI == this.DUI);
    let cliente = this.Clientes.find(e => e.DUI === this.DUI);
    if(cliente)
    {          
      this.verificarDescuento();
      cliente.Gastado += this.Monto;
      cliente.Vehiculo = this.Vehiculo;
      cliente.Visitas += 1;
    }
    else{
      this.Clientes.push({DUI:this.DUI,Nombre:this.Nombre,Gastado:this.Monto,Vehiculo:this.Vehiculo, Visitas:1});
    }

    this.DUI=this.Nombre=this.Vehiculo= this.Monto = null;
    
  }
  verificarCliente(){
    let cliente = this.Clientes.find(p=> p.DUI == this.DUI);
      if(cliente){
        this.Nombre = cliente.Nombre;
        this.Vehiculo =cliente.Vehiculo;
      }
  }
  verificarDescuento(){
    let cliente = this.Clientes.find(p=> p.DUI == this.DUI);
    if(cliente){
      if(cliente.Visitas >= 4){
        this.Descuento = this.Monto*0.1;
        this.Monto *= .9;
        alert(`Se aplica descuento de 10%: ${this.Descuento}, Total: ${this.Monto}`);
      }
      else if( cliente.Visitas >= 2){
        this.Descuento = this.Monto*0.05;
        this.Monto *= .95;
        alert(`Se aplica descuento de 5%: ${this.Descuento}, Total: ${this.Monto}`);
      }
    }        
  }

}






