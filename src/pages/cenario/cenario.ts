import { Palavra } from '../palavra/palavra';
import { Letra } from '../letra/letra';

export class Cenario{
    public id: number;
    public titulo:string;
    public descricao:string;
    public nomeGuardiao:string;
    public pathImgGuardiao:string;
    public pathImgCenario:string;
    public palavra: Palavra;
    public letrasAleatorias: Letra[];

    constructor(titulo: string, descricao: string, nomeGuardiao: string, pathImgGuardiao: string, pathImgCenario: string, palavra: Palavra, letrasAleatorias: Letra[], id?: number){
        this.titulo = titulo;
        this.descricao = descricao;
        this.nomeGuardiao = nomeGuardiao;
        this.pathImgCenario = pathImgCenario;
        this.pathImgGuardiao = pathImgGuardiao;
        this.palavra = palavra;
        this.letrasAleatorias = letrasAleatorias;
        if(id){
            this.id = id;
        }

    }

}
