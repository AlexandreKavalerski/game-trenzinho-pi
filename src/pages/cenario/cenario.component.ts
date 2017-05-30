import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cenario } from './cenario';
import { Palavra } from '../palavra/palavra';
import { Letra } from '../letra/letra';

@Component({
    templateUrl: 'cenario.component.html'
})
export class CenarioPage {
    public letras: Letra[] = [];
    public cenario: Cenario;
    public palavra: Palavra;
    constructor(public navCtrl: NavController) {

    }
    
    ionViewDidLoad(){
        this.letras.push(new Letra('U', '../../assets/imagens/letras/u.png', '../../assets/imagens/', 21));
        this.letras.push(new Letra('V', '../../assets/imagens/letras/v.png', '../../assets/imagens/', 22));
        this.letras.push(new Letra('A', '../../assets/imagens/letras/a.png', '../../assets/imagens/', 1));
        this.palavra = new Palavra('UVA', this.letras, '../../assets/imagens/uva.png', '../../assets/sons/uva.png')
        this.cenario = new Cenario('Praia do Senhor Tubarão', 'Senhor Tubarão', '../../assets/imagens/senhor-tubarao.png', '../../assets/imagens/praia-tubarao.jpg', this.palavra, 1);
    }

}
