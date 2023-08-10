import { Iitem } from "../App";
import { ListingItem } from "./ListingItem";

interface ListingProps {
  items: Iitem[];
}

export const Listing = ( { items = [] }: ListingProps ) => {
console.log(items)

  return (
    <div className="container">
      {items.map(item => <ListingItem key={item.listing_id} item={item}/>)}
    </div>
  )
}
