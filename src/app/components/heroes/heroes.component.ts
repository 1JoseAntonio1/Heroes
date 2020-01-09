import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service'; //Lo importamos para poder usar el servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService:HeroesService,
               private router:Router
              ) { //Para importar los servicios, se ejecuta antes de que la pagina este renderizada

  }

  ngOnInit() { //Cuando la pagina ya esta renderizada
    this.heroes = this._heroesService.getHeroes(); 
    //console.log(this.heroes)
  }

  verHeroe( idx:number){
    this.router.navigate(['/heroe',idx])
  }

}
