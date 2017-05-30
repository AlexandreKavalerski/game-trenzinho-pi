import { Letra } from '../letra/letra';
export class Palavra {
    public id: number;
    public nome: string;
    public letras: Letra[];
    public pathImgPalavra: string;
    public pathSomPalavra: string;

    constructor(nome: string, letras: Letra[], pathImgPalavra: string, pathSomPalavra: string, id?: number) {
        this.nome = nome;
        this.letras = letras;
        this.pathImgPalavra = pathImgPalavra;
        this.pathSomPalavra = pathSomPalavra;
        if (id) {
            this.id = id;
        }
    }
}