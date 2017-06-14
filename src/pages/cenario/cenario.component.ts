import { Component } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { Cenario } from './cenario';

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

    }

    ionViewDidLoad() {
        let idCenario = this.navParams.get('id');
        this.getCenarioById(idCenario);
        this.fillLetrasCenario(this.cenario.palavra.letrasNotInOrdem, this.cenario.letrasAleatorias);
        // this.letrasCenario = this.cenario.letrasAleatorias;
        console.log(this.corretos.length);
        this.dragulaService.drop.subscribe((valor) => {
            let letraVagao = valor[2].id.split("vagao-")[1];
            this.permitido = valor[1].id == letraVagao;

            if (this.permitido) {
                document.querySelector("#" + valor[1].id).classList.remove("letra");
                document.querySelector("#" + valor[1].id).classList.add("letra-vagao");
                this.corretos.push(valor[1]);
                this.alertCtrl.create({
                    title: "Letra correta!",
                    subTitle: "Parabéns!",
                    buttons: ["OK"]
                }).present();
            }
            else {
                if (valor[2].id != "bloco-letras") {
                    this.alertCtrl.create({
                        title: "Letra incorreta!",
                        subTitle: "Tente novamente!",
                        buttons: ["OK"]
                    }).present();
                }
                else {
                    document.querySelector("#" + valor[1].id).classList.remove("letra-vagao");
                    document.querySelector("#" + valor[1].id).classList.add("letra");
                }
            }
        });



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
