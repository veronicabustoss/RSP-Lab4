import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { DatabaseService } from 'src/app/servicios/database.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-local',
  templateUrl: './form-local.component.html',
  styleUrls: ['./form-local.component.css']
})
export class FormLocalComponent implements OnInit {

  nombre : string;
  telefono ;
  localidad : string;
  email : string;
  miFormulario : FormGroup;

  constructor(private authS : AuthService, 
    private db : DatabaseService,
    private formBuilder: FormBuilder) {
    this.miFormulario = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
        telefono: ['', [Validators.required, Validators.pattern('^[0-9]{8,10}$')]],
        localidad: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
        email: ['', [Validators.required, Validators.email] ],
     }); }

  ngOnInit(): void {
  }

  cargarLocal(pNombre :string ,pTelefono : number , pLocalidad : string ,pEmail : string)
  {
    let jsonLocal = {
      nombre : pNombre,
      telefono : pTelefono,
      localidad : pLocalidad,
      email : pEmail
    }

    this.db.crear('locales',jsonLocal).then(exito =>{

      this.nombre= null;
      this.telefono= null;
      this.localidad = null;
      this.email = null;
      alert("El local se creo con exito!");
    })

  }

}
