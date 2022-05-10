interface IWger001 {
    nome: string
    cod_fil: number
}

class Wger001 {
    nome: string
    cod_fil: number

    constructor({ nome, cod_fil }: IWger001) {
        this.nome = nome
        this.cod_fil = cod_fil
    }
}

export { Wger001 }