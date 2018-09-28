import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  public users: Usuario;

  constructor( public _usuarioService : UsuarioService) { }

  ngOnInit() {

    this._usuarioService.getUsers().subscribe( users => {
      
      this.users = users;
      console.log(this.users);
    });
  }



}
