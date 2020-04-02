import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { retry, map, filter } from 'rxjs/operators';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {


  subscription: Subscription;

  constructor() {
    
   

    this.subscription = this.regresaObs()
    .subscribe( 
      numero =>  console.log('Subs', numero),
      error => console.error('Error en el obs',error ),
      () => console.log('El observador termino')
      
    );

   }

  ngOnInit(): void {
  }

  ngOnDestroy(){

    console.log('La pagina se va a cerrar');

    this.subscription.unsubscribe();

  }

  regresaObs(): Observable<any> {

    return new Observable( (observer: Subscriber<any>) => {

      let contador =0;
      let intervalo = setInterval(() => {
        contador +=1;

        const salida = {
          valor: contador
        }

        observer.next( salida );

        // if( contador === 3){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if (contador ===2 ) {
        //   // clearInterval(intervalo);
        //   observer.error('Auxilio');
        // }

      },1000);
      
    }).pipe(

      map( resp =>  resp.valor  ),
      filter( (valor, index) => {
        // console.log('Filter', valor, index);

        if( (valor % 2) === 1 ) {
          // impar
          return true;
        } else {
          // par
          return false;
        }

      })

    );

  }

}
