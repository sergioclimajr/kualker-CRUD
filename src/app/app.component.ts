import { Component } from '@angular/core';
import { Usuario } from 'src/shared/model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App Kualker';
  usuario: Usuario;
  usuarios: Array<Usuario>;

  ngOnInit(): void {
  }

  constructor () {
    this.usuario = new Usuario();
    this.usuarios = new Array<Usuario>();
  }

  inserirUsuario(): void {
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario();
  }

  excluirUsuario(usuario: Usuario) {
    const indice = this.usuarios.indexOf(usuario);
    if (indice !== -1) {
      this.usuarios.splice(indice, 1);
    }
  }

  editarUsuario(usuario: Usuario): void {
    usuario.nome += ' Alterado';
  }

  longText = 'Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça.Delegadis gente finis...'

}
