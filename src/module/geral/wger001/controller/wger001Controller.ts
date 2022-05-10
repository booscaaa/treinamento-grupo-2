import { Wger001 } from "../domain/model/wger001";
import { BuscaFiliaisUsecase } from "../domain/usecase/buscaFiliaisUsecase";

class Wger001Controller {
    filiais: Wger001[] = []
    carregando: boolean = false

    constructor(
        private context: any,
        private buscaFiliaisUsecase: BuscaFiliaisUsecase
    ) { }

    async mounted() {
        this.carregando = true
        this.filiais = await this.buscaFiliaisUsecase()
        this.carregando = false
    }

    async salvar() {
        if (this.context.$refs.form.validate()) {
            
        }
    }
}

export { Wger001Controller }