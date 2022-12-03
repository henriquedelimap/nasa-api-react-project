import { createContext, useEffect, useState } from "react";
import { IFetchProvider } from "../../Type/FetchType";


const apiKey = 'fdNpng5BhLQp2GkdgjsEYpKUhFtHpJdMMEwkwYJ3'

export const FetchContext = createContext({})

export const FetchProvider = ({ children }: IFetchProvider) => {
    const [response, setResponse] = useState<any>()
    const [contador, setContador] = useState(32)
    const [viewContador, setViewContador] = useState(7)
    let metade = Math.floor(contador / 2)
    console.log(response);


    const date = new Date()
    const today = new Date()
    today.setDate(date.getDate() - contador)
    const [data, setData] = useState(today.toISOString().slice(0, 10))

    useEffect(() => {
        async function fetchData() {
            try {
                await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${data}&end_date=2022-12-03`)
                    .then(response => response.json())
                    .then(json => {
                        setResponse(json.reverse())
                    })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [data, contador])


    const handleData = () => {
        setContador(prev => prev + 12)
        var outraData = new Date()
        outraData.setDate(date.getDate() - contador)
        setData(outraData.toISOString().slice(0, 10))
        setViewContador(prev => prev + 6)
    }


    return (
        <FetchContext.Provider value={{ response, handleData, viewContador }}>
            {children}
        </FetchContext.Provider>
    )
}