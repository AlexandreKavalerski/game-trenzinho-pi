import { Component } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';

import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { Cenario } from './cenario';
import { Palavra } from '../palavra/palavra';
// import { Letra } from '../letra/letra';

import { CenariosService } from './cenario-service';

@Component({
    templateUrl: 'cenario.component.html'
})
export class CenarioPage {
    letrasCenario = [];
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
