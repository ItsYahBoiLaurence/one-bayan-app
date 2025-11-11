import { ReactNode } from "react"

export type HotlineInformationType = {
    label: string
    icon: ReactNode
    details: HotlineDetailsType[]
}

export type HotlineDetailsType = {
    name: string
    address: string
    contact: ContactInformationType[]
}

export type ContactInformationType = {
    number: string
}   