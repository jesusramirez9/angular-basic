import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor', 'Capitan america'];

  heroeBorrado:string = '' || false || undefined || null;

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';

    
  }

}
