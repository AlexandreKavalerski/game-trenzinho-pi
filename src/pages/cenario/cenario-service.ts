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
                    new Letra("O", "O.png", "o.mp3", 15),
                    new Letra("C", "C.png", "c.mp3", 3),
                    new Letra("O", "O.png", "o.mp3", 15),
                    new Letra("C", "C.png", "c.mp3", 3)                    
                ],
                [
                    new Letra("C", "C.png", "c.mp3", 3),
                    new Letra("O", "O.png", "o.mp3", 15),
                    new Letra("C", "C.png", "c.mp3", 3),                    
                    new Letra("O", "O.png", "o.mp3", 15),
                ],
                "coco.png",
                "coco.mp3",
                1),
            [
                new Letra("G", "G.png", "g.mp3", 7),
                //new Letra("X", "X.png", "x.mp3", 24),
                new Letra("B", "B.png", "b.mp3", 2),
                new Letra("A", "A.png", "a.mp3", 1),
                new Letra("P", "P.png", "p.mp3", 16)
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
                    new Letra("A", "A.png", "a.mp3", 1),
                    new Letra("N", "N.png", "n.mp3", 14),
                    new Letra("B", "B.png", "b.mp3", 2),
                    new Letra("A", "A.png", "a.mp3", 1),
                    new Letra("A", "A.png", "a.mp3", 1),
                    new Letra("N", "N.png", "n.mp3", 14),
                ],
                [
                    new Letra("B", "B.png", "b.mp3", 2),
                    new Letra("A", "A.png", "a.mp3", 1),
                    new Letra("N", "N.png", "n.mp3", 14),
                    new Letra("A", "A.png", "a.mp3", 1),
                    new Letra("N", "N.png", "n.mp3", 14),
                    new Letra("A", "A.png", "a.mp3", 1),
                ],
                "banana.png",
                "banana.mp3",
                2),
            [
                new Letra("G", "G.png", "g.mp3", 7),
                new Letra("X", "X.png", "x.mp3", 24),
                new Letra("B", "B.png", "b.mp3", 2),
                new Letra("A", "A.png", "a.mp3", 1),
                new Letra("P", "P.png", "p.mp3", 16),
                new Letra("L", "L.png", "l.mp3", 12)
            ],
            2
            ),
            new Cenario("Lar do Doutor Cachorro",
            "Ajude o Doutor Cachorro e leve acerolas para as crianças da vila",
            "Doutor Cachorro",
            "doutor-cachorro.png",
            "hospital-cachorro.png",
            new Palavra("ACEROLA", 
                [
                    new Letra("L", "L.png", "l.mp3", 12),                    
                    new Letra("A", "A.png", "a.mp3", 1),
                    new Letra("E", "E.png", "e.mp3", 5),
                    new Letra("R", "R.png", "r.mp3", 18),
                    new Letra("C", "C.png", "c.mp3", 3),
                    new Letra("A", "A.png", "a.mp3", 1),
                    new Letra("O", "O.png", "o.mp3", 15),
                ],
                [
                    new Letra("A", "A.png", "a.mp3", 1),
                    new Letra("C", "C.png", "c.mp3", 3),
                    new Letra("E", "E.png", "e.mp3", 5),
                    new Letra("R", "R.png", "r.mp3", 18),
                    new Letra("O", "O.png", "o.mp3", 15),
                    new Letra("L", "L.png", "l.mp3", 12),                    
                    new Letra("A", "A.png", "a.mp3", 1),
                ],
                "coco.png",
                "coco.mp3",
                1),
            [
                new Letra("G", "G.png", "g.mp3", 7),
                //new Letra("X", "X.png", "x.mp3", 24),
                new Letra("B", "B.png", "b.mp3", 2),
                new Letra("A", "A.png", "a.mp3", 1),
                new Letra("P", "P.png", "p.mp3", 16)
            ],
            3
            ),
            
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
