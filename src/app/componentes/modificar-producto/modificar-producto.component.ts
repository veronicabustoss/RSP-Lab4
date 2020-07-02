import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {

  @Input('producto') producto : any;
  @Input('auxProducto') auxProducto : any;
  @Output() cambio = new EventEmitter();
  modificar = true;
  productoAux : any;
 
  constructor(private db : DatabaseService,
    private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.productoAux = this.producto;

  }


  modificarProductoBD(producto)
  {
    let aux = this.auxProducto;
    this.firestore.collection('productos').get().subscribe( datos => {

      datos.forEach( dato => {

        if(dato.data().nombre == aux.nombre && aux.tipo == dato.data().tipo)
        {
          this.db.actualizar('productos',producto,dato.id);
          this.cambiar();
        }

      })

    })
  }

  cambiar()
  {
    this.cambio.emit(false);
  }

}
