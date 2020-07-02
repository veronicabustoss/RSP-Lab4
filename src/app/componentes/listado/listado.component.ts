import { Component, OnInit, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { DatabaseService } from 'src/app/servicios/database.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  
  listaProductos = [];
  modificar = false;
  productoAux : any;
  auxcargarProducto  : any;

  constructor(private db : DatabaseService,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.modificar = false;
    this.productoAux = null;
     let fb = this.firestore.collection('productos');

     fb.valueChanges().subscribe( datos => {

      this.listaProductos = [];
      
      datos.forEach( dato => {

        this.listaProductos.push(dato);
      })


     })
  }

  modificarProducto(producto)
  {
    this.modificar = false;
    let auxiliar = {
      nombre : producto.nombre,
      precio : producto.precio,
      stock : producto.stock,
      marca : producto.marca,
      local : producto.local,
      tipo : producto.tipo
    }

    this.auxcargarProducto = auxiliar;
    this.productoAux = producto;
    setTimeout(() => {
      this.modificar = true;
    }, 1000);
    
  }

  funCambiar(e)
  {
    this.modificar = e;
    console.log(e);
  }

}
