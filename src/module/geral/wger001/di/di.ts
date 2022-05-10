import axios from "axios";
import { Wger001Controller } from "../controller/wger001Controller";
import { buscaFiliasRepository } from "../data/repository/buscaFiliaisRepository";
import { buscaFiliaisUsecase } from "../domain/usecase/buscaFiliaisUsecase";

const axiosInstance = axios.create({
    baseURL: "https://consultors-auth-cgi.cgisoftware.com.br",
    headers: {
        "Content-Type": "application/json"
    }
})

const buscaFiliaisRepositoryImpl = buscaFiliasRepository(axiosInstance)
const buscaFiliaisUsecaseImpl = buscaFiliaisUsecase(buscaFiliaisRepositoryImpl)
const wger001Controller = (context: any) => 
    new Wger001Controller(context, buscaFiliaisUsecaseImpl)

export { wger001Controller } 