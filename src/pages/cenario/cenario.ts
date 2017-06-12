import { Palavra } from '../palavra/palavra';
import { Letra } from '../letra/letra';

export class Cenario{
    public id: number;
    public titulo:string;
    public descricao:string;
    public nomeGuardiao:string;
    public imgGuardiao:string;
    public imgCenario:string;
    public palavra: Palavra;
    public letrasAleatorias: Letra[];

    constructor(titulo: string, descricao: string, nomeGuardiao: string, imgGuardiao: string, imgCenario: string, palavra: Palavra, letrasAleatorias: Letra[], id?: number){
        this.titulo = titulo;
        this.descricao = descricao;
        this.nomeGuardiao = nomeGuardiao;
        this.imgCenario = imgCenario;
        this.imgGuardiao = imgGuardiao;
        this.palavra = palavra;
        this.letrasAleatorias = letrasAleatorias;
        if(id){
            this.id = id;
        }

    }

}
