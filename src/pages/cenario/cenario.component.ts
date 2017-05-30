import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Cenario } from './cenario';
import { Palavra } from '../palavra/palavra';
import { Letra } from '../letra/letra';

import { CenariosService } from './cenario-service';

@Component({
    templateUrl: 'cenario.component.html'
})
export class CenarioPage {
    public cenario: Cenario;
    constructor(private cenariosService: CenariosService, private navParams: NavParams) {
        

    }
    
    ionViewDidLoad(){
        let idCenario = this.navParams.get('id');
        this.getCenarioById(idCenario);
    }

    getCenarioById(id: number){
        this.cenariosService.find(id).subscribe(
            cenario => this.cenario = cenario
        );
    }

}
