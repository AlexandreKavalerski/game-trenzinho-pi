import { Injectable } from '@angular/core';

import { Palavra } from '../palavra/palavra';
import { Letra } from '../letra/letra';
import { Cenario } from './cenario';

@Injectable()
export class CenariosService {
    cenarios: Cenario[];

    constructor() {
    }

    all(): Cenario[]{
        this.cenarios = [
            new Cenario("Praia do Senhor Tubarão",
            "Esta é a primeira etapa da nossa aventura",
            "Senhor Tubarão",
            "senhor-tubarao.png",
            "praia-tubarao.jpg",
            new Palavra("COCO", 
                [
                    new Letra("C", "c.png", "c.mp3", 3),
                    new Letra("O", "o.png", "o.mp3", 15),
                    new Letra("C", "c.png", "c.mp3", 3),
                    new Letra("O", "o.png", "o.mp3", 15)
                ],
                "coco.png",
                "coco.mp3",
                1),
            [
                new Letra("G", "g.png", "g.mp3", 7),
                new Letra("X", "x.png", "x.mp3", 24),
                new Letra("B", "b.png", "b.mp3", 2),
                new Letra("A", "a.png", "a.mp3", 1),
                new Letra("P", "p.png", "p.mp3", 16),
                new Letra("L", "l.png", "l.mp3", 12)
            ],
            1
            ),
            new Cenario("Casa da Dona Gata",
            "Ajude a Dona Gata a completar as palavras necessárias e ela lhe entregará bananas",
            "Dona Gata",
            "dona-gata.png",
            "casa-gata.png",
            new Palavra("BANANA", 
                [
                    new Letra("B", "b.png", "b.mp3", 2),
                    new Letra("A", "a.png", "a.mp3", 1),
                    new Letra("N", "n.png", "n.mp3", 14),
                    new Letra("A", "a.png", "a.mp3", 1),
                    new Letra("N", "n.png", "n.mp3", 14),
                    new Letra("A", "a.png", "a.mp3", 1),
                ],
                "banana.png",
                "banana.mp3",
                2),
            [
                new Letra("G", "g.png", "g.mp3", 7),
                new Letra("X", "x.png", "x.mp3", 24),
                new Letra("B", "b.png", "b.mp3", 2),
                new Letra("A", "a.png", "a.mp3", 1),
                new Letra("P", "p.png", "p.mp3", 16),
                new Letra("L", "l.png", "l.mp3", 12)
            ],
            2
            )
            
        ];
        return this.cenarios;
    }

    find(id: number = 1): Cenario {
        let cenarios = this.all();
        for(let cenario of cenarios){
            if(cenario.id == id){
                return cenario;
            }
        }
    }
}
