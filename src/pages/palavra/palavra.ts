import { Letra } from '../letra/letra';
export class Palavra {
    public id: number;
    public nome: string;
    public letrasNotInOrdem: Letra[];
    public letrasInOrdem: Letra[];
    public imgPalavra: string;
    public somPalavra: string;

    constructor(nome: string, letrasNotInOrdem: Letra[], letrasInOrdem: Letra[], imgPalavra: string, somPalavra: string, id?: number) {
        this.nome = nome;
        this.letrasNotInOrdem = letrasNotInOrdem;
        this.letrasInOrdem = letrasInOrdem;
        this.imgPalavra = imgPalavra;
        this.somPalavra = somPalavra;
        if (id) {
            this.id = id;
        }
    }
}