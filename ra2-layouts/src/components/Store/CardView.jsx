const ShopCard = ({ name, price, color, img }) => (
  <div className="card" style={{backgroundImage: `url(${img})`}}>
    <div className="card-name">{name}</div>
    <div className="card-color">{color}</div>
    <div className="card-container"> 
      <div className="card-price">${price}</div>
      <div className="card-button">Add to cart</div>
    </div>
  </div>
);

const CardsView = ({ cards }) => (
  <div className="cards-view">
    {cards.map(card => <ShopCard key={card.img} {...card} />)}
  </div>
);

export default CardsView;
