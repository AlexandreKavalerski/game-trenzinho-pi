// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';



// import { Cenario } from '../cenario/cenario';
// import { CenariosService } from '../cenario/old-cenario-service';
// import { CenarioPage } from '../cenario/cenario.component';

// @Component({
//     templateUrl: 'game.component.html',
//     providers: [
//         CenariosService
//     ]
// })
// export class GamePage {
//     public cenarios: Cenario[];
//     constructor(public navCtrl: NavController, 
//         public cenariosService: CenariosService) 
//     {
        
//     }

//     ionViewDidLoad() {
//         this.getCenarios();
//     }

//     getCenarios() {
//         this.cenariosService.all().subscribe(
//             cenarios => this.cenarios = cenarios
//         );
//     }

//     toCenario(id: number) {
//         this.navCtrl.push(CenarioPage, {id: id});
//     }
// }
