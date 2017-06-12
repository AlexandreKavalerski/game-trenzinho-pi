import { Component } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { Cenario } from './cenario';
import { Palavra } from '../palavra/palavra';
import { Letra } from '../letra/letra';

import { CenariosService } from './cenario-service';

@Component({
    templateUrl: 'cenario.component.html'
})
export class CenarioPage {
    letrasCenario: Array<Letra> = [];
    permitido: boolean;

    corretos = [];

    public cenario: Cenario;

    constructor(private cenariosService: CenariosService,
        private navParams: NavParams,
        public alertCtrl: AlertController,
        private dragulaService: DragulaService) {


        // this.dragulaService.setOptions("bloco", {
        //     accepts: function (el, target, source) {
        //         console.log(target.id + ";;" + el.id);

        //         if (target.id != "vagao-" + el.id) {
        //             this.permitido = true;

        //         }
        //         else {
        //             this.permitido = false;
        //         }

        //     },        


        // });


        this.dragulaService.drop.subscribe((valor) => {

            // console.log(valor[1].id);

            // let vagaoLetra = document.querySelector("#vagao1-" + valor[1].id);

            document.querySelector("#"+valor[1].id).classList.remove("letra");
            document.querySelector("#"+valor[1].id).classList.add("letra-vagao");
            
  

        
            let letraVagao = valor[2].id.split("vagao-")[1];

            this.permitido = valor[1].id == letraVagao;



            if (this.permitido) {
                // console.log(vagaoLetra.querySelector("#" + valor[1].id));
                this.corretos.push(valor[1]);
                this.alertCtrl.create({
                    title: "Letra correta!",
                    subTitle: "Parabéns!",
                    buttons: ["OK"]
                }).present();
            }
            else {
                if (valor[2].id != "letras") {

                    this.alertCtrl.create({
                        title: "Letra incorreta!",
                        subTitle: "Tente novamente!",
                        buttons: ["OK"]
                    }).present();
                }
            }


        });


    }

    ionViewDidLoad() {
        let idCenario = this.navParams.get('id');
        this.getCenarioById(idCenario);
        this.fillLetrasCenario(this.cenario.palavra.letras, this.cenario.letrasAleatorias);
        // this.letrasCenario = this.cenario.letrasAleatorias;
        console.log(this.cenario);

    }

    getCenarioById(id: number) {
        this.cenario = this.cenariosService.find(id);

    }
    fillLetrasCenario(letrasPalavra, letrasAleatorias) {
        for (let letra of letrasPalavra) {
            this.letrasCenario.push(letra);
        }
        for (let letra of letrasAleatorias) {
            this.letrasCenario.push(letra);
        }
    }

}
