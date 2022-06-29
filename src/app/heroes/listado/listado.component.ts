import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  noHeroes: string[] = ['hulk','ironman','genial','asd'];
  noHeroeBorrado: string = '';

  borrarNoHeroe(){
    this.noHeroeBorrado = this.noHeroes.shift() || '';
  }

}
