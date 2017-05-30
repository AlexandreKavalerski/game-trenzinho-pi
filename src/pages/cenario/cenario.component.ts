import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cenario } from './cenario';

import { Palavra } from '../palavra/palavra';
import { Letra } from '../letra/letra';

import { CenariosService } from './cenario-service';

@Component({
    templateUrl: 'cenario.component.html'
})
export class CenarioPage {
    public cenario: Cenario;
    constructor(public navCtrl: NavController, public cenariosService: CenariosService) {

    }
    
    ionViewDidLoad(){
        this.getCenarioById();
    }

    getCenarioById(id: number = 1){
        this.cenariosService.find(id).subscribe(
            cenario => this.cenario = cenario
        );
    }

}
