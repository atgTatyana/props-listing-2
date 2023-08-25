import { Listing } from './components/Listing'
import etsy from '../data/etsy.json'
import './App.css'

export interface Iitem {
  listing_id: number,
  url?: string,
  MainImage: Timg,
  title?: string,
  currency_code?: string,
  price?: string,
  quantity?: number,
}

type Timg = {
  url_570xN?: string,
}

const arr: Iitem[] = [];
const active = etsy.filter(item => item.state === "active")

active.map((item, index) => {
    arr[index] = {
      listing_id: item.listing_id,
      url: item.url,
      MainImage: { url_570xN: item?.MainImage?.url_570xN},
      title: item.title,
      currency_code: item.currency_code,
      price: item.price,
      quantity: item.quantity
    }
})

function App() {
  return (
    <Listing items={arr}/>
  )
}

export default App
