import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid'

const initialState = [
    {
        id: uuid(),
        titulo: 'Iphone X',
        price: 999,
        url: 'https://br.celulares.com/fotos/apple-iphone-x-59552-g.jpg',
    },
    {
        id: uuid(),
        titulo: 'Iphone 7',
        price: 380,
        url: 'https://t.ctcdn.com.br/9tnXez5pqtSDSjUf5bOS8eRb8Kg=/fit-in/400x400/filters:format(webp):fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i408161.png',
    },
    {
        id: uuid(),
        titulo: 'Iphone 8',
        price: 540,
        url: 'https://images-submarino.b2w.io/produtos/42189863/imagens/usado-celular-iphone-8-64gb-cinza-espacial-excelente-trocafone/42189862_1_large.jpg',
    },
]

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        AddCar: (state, {payload}) => {
            return [...state, {...payload, id: uuid()}]
        },
    },
})

export const {AddCar, Cart} = listSlice.actions

export default listSlice.reducer