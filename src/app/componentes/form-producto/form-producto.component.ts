import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { DatabaseService } from 'src/app/servicios/database.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  nombre : string;
  marca : string ;
  stock;
  tipo :string;
  precio;
  local : string;
  miFormulario : FormGroup;

  constructor(private authS : AuthService, 
    private db : DatabaseService,
    private formBuilder: FormBuilder) {
    this.miFormulario = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
        marca: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
        stock: ['', [Validators.required, Validators.pattern('^[0-9]{1,5}$')]],
        tipo: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
        precio: ['', [Validators.required, Validators.pattern('^[0-9]{1,5}$')] ],
        local: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
     }); }

  ngOnInit(): void {
  }

  cargarLocal(pNombre :string ,pMarca : string , pStock : number ,pTipo : string, pPrecio : number, pLocal : string)
  {
    let jsonLocal = {
      nombre : pNombre,
      marca : pMarca,
      stock : pStock,
      tipo : pTipo,
      precio : pPrecio,
      local : pLocal
    }

    this.db.crear('productos',jsonLocal).then(exito =>{

      this.nombre= null;
      this.marca= null;
      this.stock = null;
      this.tipo = null;
      this.precio = null;
      this.local = null;
    })

  }

}
