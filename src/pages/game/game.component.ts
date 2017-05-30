import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Cenario } from '../cenario/cenario';
import { CenariosService } from '../cenario/cenario-service';

@Component({
    templateUrl: 'game.component.html',
    providers: [
        CenariosService
    ]
})
export class GamePage {
    public cenarios: Cenario[];
    constructor(public navCtrl: NavController, public cenariosService: CenariosService) {

    }

    ionViewDidLoad(){
        this.getCenarios();
    }

    getCenarios(){
        this.cenariosService.all().subscribe(
            cenarios => this.cenarios = cenarios
        );
    }





}
