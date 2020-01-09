import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //Modulo para importar
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'  
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  termino:string;

  constructor( private activatedRouted:ActivatedRoute,
               private _heroesService:HeroesService){

  }

  ngOnInit() {
    this.activatedRouted.params.subscribe( params => {
      //console.log(params['termino']);
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }



}
