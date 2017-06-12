import { Letra } from '../letra/letra';
export class Palavra {
    public id: number;
    public nome: string;
    public letras: Letra[];
    public imgPalavra: string;
    public somPalavra: string;

    constructor(nome: string, letras: Letra[], imgPalavra: string, somPalavra: string, id?: number) {
        this.nome = nome;
        this.letras = letras;
        this.imgPalavra = imgPalavra;
        this.somPalavra = somPalavra;
        if (id) {
            this.id = id;
        }
    }
}