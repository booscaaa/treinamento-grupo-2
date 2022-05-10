import { AxiosInstance } from 'axios';
import { Wger001 } from '../../domain/model/wger001';

const response = {
    data: [
        { nome: "CGI Software", cod_fil: 1 },
        { nome: "Tesla", cod_fil: 2 }
    ]
}

interface BuscaFiliaisRepository {
    (): Promise<Wger001[]>
}

const buscaFiliasRepository =
    (axios: AxiosInstance): BuscaFiliaisRepository => async () => {
        await new Promise((resolver) => setTimeout(resolver, 3000))
        return response.data.map((filial) => new Wger001(filial))
    }

export { buscaFiliasRepository, BuscaFiliaisRepository }