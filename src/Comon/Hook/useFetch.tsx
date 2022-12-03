import { useContext } from "react"
import { IFetchContext } from "../../Type/FetchType"
import { FetchContext } from "../Context/Fetch"

export const useFetch = () => {

    const { response, handleData, viewContador } = useContext(FetchContext) as IFetchContext

    return {
        response, handleData, viewContador
    }

}