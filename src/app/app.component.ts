import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export
 class AppComponent {
  title = 'ahorcado';
  PALABRAS=["FACTORIA","MOUSE","BOLIGRAFO","PARAPETO","AGUACATE"]
  palabra = this.PALABRAS[Math.floor(Math.random()*(this.PALABRAS.length-1))];
  palabraOculta = '';

  intentos = 0;

  gano = false;
  perdio = false;

  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
  'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor() {
    console.log('se acaba de crear el componente');

    this.palabraOculta = '_ '.repeat(this.palabra.length);

    
    }
    comprobar(letra){
            //console.log('letra: '+ letra);

            this.existeLetra( letra );

      const palabraOcultaArr = this.palabraOculta.split (' ');

      for (let i = 0; i < this.palabra.length; i ++) {

        if (this.palabra[i] === letra) {
          palabraOcultaArr[i] = letra;
        }

      }
       this.palabraOculta = palabraOcultaArr.join(' ');
       this.verificaGane();
  }

    verificaGane(){
      //console.log(this.palabraOculta);

      const palabraArr = this.palabraOculta.split(' ');
      const palabraEvaluar = palabraArr.join('');

      if (palabraEvaluar === this.palabra) {
        this.gano = true;
        console.log('usuario ganó');
      }
      if (this.intentos >= 9) {
        this.perdio = true;
        console.log('usuario perdió')
      }

    }
    existeLetra( letra ) {
      if ( this.palabra.indexOf(letra) >=0 ) {
       // console.log('letra existe ' + letra)
      } else {
        //console.log('letra NO existe ' + letra)
        this.intentos ++;

      }
    }


}


