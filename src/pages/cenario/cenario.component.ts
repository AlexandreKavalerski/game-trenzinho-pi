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
    arr1: Array<string> = [];
    arr2: Array<string> = [];
    corretos = [];

    public cenario: Cenario;

    constructor(private cenariosService: CenariosService,
        private navParams: NavParams,
        public alertCtrl: AlertController,
        private dragulaService: DragulaService) {
        for (let i = 0; i < 20; i++) {
            this.arr2.push("2. [" + i + "]");
        }
        this.dragulaService.drag.subscribe((valor) => {
            if(this.corretos.indexOf(valor[1]) == -1){
                valor[1].classList.add("selecionado");
                console.log(valor[1].classList);

            }else{
                let alerta = this.alertCtrl.create({
                    title: "Item já preenchido!",
                    subTitle: "Parabains",
                    buttons: ["OK"]
                }).present();
            }
            

        });


        this.dragulaService.drop.subscribe((valor) => {

            valor[1].classList.remove("selecionado");
            valor[1].classList.add("correto");
            this.corretos.push(valor[1]);
                let alerta = this.alertCtrl.create({
                    title: "Item arrastado!",
                    subTitle: "Parabains",
                    buttons: ["Sair"]
                }).present();
        });

    }

    ionViewDidLoad() {
        let idCenario = this.navParams.get('id');
        this.getCenarioById(idCenario);
    }

    getCenarioById(id: number) {
        this.cenariosService.find(id).subscribe(
            cenario => this.cenario = cenario
        );
    }

}
