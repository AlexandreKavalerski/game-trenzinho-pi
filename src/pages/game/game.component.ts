import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



import { Cenario } from '../cenario/cenario';
import { CenariosService } from '../cenario/cenario-service';
import { CenarioPage } from '../cenario/cenario.component';

@Component({
    templateUrl: 'game.component.html',
    providers: [
        CenariosService
    ]
})
export class GamePage {
    public cenarios: Cenario[];
    constructor(public navCtrl: NavController, 
        public cenariosService: CenariosService) 
    {
        
    }

    ionViewDidLoad() {
        this.getCenarios();
    }

    getCenarios() {
        this.cenarios = this.cenariosService.all();
    }

    toCenario(id: number) {
        this.navCtrl.push(CenarioPage, {id: id});
    }
}
