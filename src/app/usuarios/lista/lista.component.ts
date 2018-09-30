import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import * as usuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[];
  loading: boolean;
  error: any;

  // constructor( public _usuarioService : UsuarioService) { }
  constructor( private store: Store<AppState>) { }

  ngOnInit() {
    //para leer todos mis usuarios desde mi store
    this.store.select( 'usuarios' ).subscribe( usuarios => {
      this.usuarios = usuarios.users,
      this.loading = usuarios.loading,
      this.error = usuarios.error
      });

    // this._usuarioService.getUsers().subscribe( users => {
      
    //   this.users = users;
    //   console.log(this.users);
    // });
    this.store.dispatch( new usuariosActions.CargarUsuarios() );
  }



}
