export class Letra{
    public id: number;
    public letra:string;
    public pathImgLetra:string;
    public pathSomLetra:string;

    constructor(letra: string, pathImgLetra: string, pathSomLetra: string, id?: number){
        this.letra = letra;
        this.pathImgLetra = pathImgLetra;
        this.pathSomLetra = pathSomLetra;
        if(id){
            this.id = id;
        }
    }
}