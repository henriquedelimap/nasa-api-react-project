import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IFetchProvider {
    children: ReactNode
}

export interface IFetchContext {
    response: CardType[]
    handleData: () => void
    viewContador: number
}

export type CardType = {
    hdurl: string,
    url: string,
    title: string,
    media_type: string
    copyright: string
    date: string
    explanation: string
}