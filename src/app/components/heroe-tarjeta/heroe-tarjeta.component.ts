import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'; // Output y EventEmitter van juntos usualmente
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {}; // Le ponemos input para decir que esa propiedad viene de fuera, si no coge la que se le da en la clase 
  @Input() index:number;

  @Output() heroeSeleccionado:EventEmitter<number>; //Lo contrario que Input

  constructor(private router:Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe(){
    //this.heroeSeleccionado.emit( this.index );  Usando los Outputs al heroes.component.html
    //console.log(this.index);
    this.router.navigate(['/heroe',this.index])
  }

}
