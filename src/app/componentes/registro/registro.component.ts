import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { DatabaseService } from 'src/app/servicios/database.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  correo : string;
  password : string;
  nombre : string;
  miFormulario : FormGroup;

  constructor(private authS : AuthService, 
    private db : DatabaseService,
    private formBuilder: FormBuilder,
    private router : Router) {
    this.miFormulario = this.formBuilder.group({
        nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]{3,20}$')]],
        correo: ['', [Validators.required, Validators.email] ],
        password: ['', [Validators.required, Validators.pattern('^[a-z0-9_-]{6,18}$')]],
     });
    
    }

  ngOnInit(): void {
  }

  registrarUsuario(correo : string, password :string, nombre: string)
  {
    let jsonUsuario = {
      correo : correo,
      nombre : nombre,
    }
    this.authS.registrarUsuario(correo,password);
    this.db.crear('usuarios',jsonUsuario).then((resultado : any) => {
      console.log("El usuario se creo con exito.");
    })

  }

}
