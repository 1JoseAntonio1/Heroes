import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
//import { Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any = {}; //Objeto

  constructor( private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService
    ) {
    this.activatedRoute.params.subscribe( params => { //params retorna parametros de la pagina
      //console.log( params['id'] ); Tiene que ver con lo que hemos puesto en el routes
      this.heroe = this._heroesService.getHeroe(params['id']);
    })
  }  

  ngOnInit() {
  }

}
