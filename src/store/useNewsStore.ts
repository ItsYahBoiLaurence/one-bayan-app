import { create } from "zustand";
import { NewsInformation } from "../types/news";

export type NewsState = {
    news: NewsInformation[]
}

export type NewsAction = {

}

export type NewsStoreType = NewsState & NewsAction

export const useNewsStore = create<NewsStoreType>((set, get) => ({
    news: []
}))