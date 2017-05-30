import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    templateUrl: 'game.component.html'
})
export class GamePage {

    slides = [
        {
            title: "Praia do Senhor Tubarão",
            description: "Esta é a primeira etapa da nossa aventura",
            image: "../../assets/images/praia-tubarao.jpg",
        },
        {
            title: "Casa da dona Gata",
            description: "Ajude a Dona Gata a completar as palavras necessárias e ela lhe entregará bananas",
            image: "../../assets/images/casa-gata.png",
        },
        {
            title: "Lar do Doutor Cachorro",
            description: "Ajude o Doutor Cachorro e leve acerolas para as crianças da vila",
            image: "../../assets/images/hospital-cachorro.png",
        }
    ];
    constructor(public navCtrl: NavController) {

    }

}
