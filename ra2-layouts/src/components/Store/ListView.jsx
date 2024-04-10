const ShopItem = ({ name, price, color, img }) => (
  <div className="item">
    <div className="item-img" style={{backgroundImage: `url(${img})`}}/>
    <div className="item-name">{name}</div>
    <div className="item-color">{color}</div>
    <div className="item-price">${price}</div>
    <div className="item-button">Add to cart</div>
  </div>
);

const ListView = ({ items }) => (
  <div className="list-view">
    {items.map(item => <ShopItem key={item.img} {...item} />)}
  </div>
);

export default ListView;
