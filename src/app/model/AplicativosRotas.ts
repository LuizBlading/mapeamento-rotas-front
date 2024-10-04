import { Rotas } from "./Rotas";

export class AplicativosRotas {
    idAplicativo?: number;
    nomeAplicativo: string | undefined;
    rotas: Array<Rotas> = new Array;

    constructor(idAplicativo: number, nomeAplicativo: string, rotas: Array<Rotas>) {
        this.idAplicativo = idAplicativo;
        this.nomeAplicativo = nomeAplicativo;
        this.rotas = rotas;
    }
}