import { Iitem } from "../App";

interface ListingItemProps {
  item: Iitem;
}

export const ListingItem = ({ item }: ListingItemProps) => {
  const { currency_code } = item;

  let { title, price } = item;
  if (title && title.length > 50) {
    title = title.slice(0, 50) + "...";
  }

  if (currency_code === "USD") {
    price = "$" + price;
  } else if (currency_code === "EUR") {
    price = "€" + price;
  } else {
    price = price && currency_code && price + currency_code;
  }
  
  return (
    <div className="item-list">
      <div className="item">
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{title}</p>
          <p className="item-price">{price}</p>
          <p className={item.quantity && item.quantity < 11 ? "item-quantity level-low" 
            : item.quantity && item.quantity < 21 ? "item-quantity level-medium"
            : "item-quantity level-high"}>
            {item.quantity} left
          </p>
        </div>
      </div>
    </div>
  )
}
