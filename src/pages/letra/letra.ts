export class Letra{
    public id: number;
    public letra:string;
    public imgLetra:string;
    public somLetra:string;

    constructor(letra: string, imgLetra: string, somLetra: string, id?: number){
        this.letra = letra;
        this.imgLetra = imgLetra;
        this.somLetra = somLetra;
        if(id){
            this.id = id;
        }
    }
}