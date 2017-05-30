import { Palavra } from '../palavra/palavra';

export class Cenario{
    public id: number;
    public titulo:string;
    public descricao:string;
    public nomeGuardiao:string;
    public pathImgGuardiao:string;
    public pathImgCenario:string;
    public palavra: Palavra;

    constructor(titulo: string, descricao: string, nomeGuardiao: string, pathImgGuardiao: string, pathImgCenario: string, palavra: Palavra, id?: number){
        this.titulo = titulo;
        this.descricao = descricao;
        this.nomeGuardiao = nomeGuardiao;
        this.pathImgCenario = pathImgCenario;
        this.pathImgGuardiao = pathImgGuardiao;
        this.palavra = palavra;
        if(id){
            this.id = id;
        }

    }

}
