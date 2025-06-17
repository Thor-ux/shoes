import React, { Component } from 'react';
import './App.css';

const IconSwitch = ({ icon, onSwitch }) => (
  <i className="material-icons" onClick={onSwitch}>{icon}</i>
);

const ShopCard = ({ name, price, color, img }) => (
  <div className="shop-card">
    <h3>{name}</h3>
    <p>{color}</p>
    <img src={img} alt={name} />
    <div className="shop-card-footer">
      <span>${price}</span>
      <button>Add to cart</button>
    </div>
  </div>
);

const ShopItem = ({ name, price, color, img }) => (
  <div className="shop-item">
    <img src={img} alt={name} />
    <h3>{name}</h3>
    <p>{color}</p>
    <span>${price}</span>
    <button>Add to cart</button>
  </div>
);

const CardsView = ({ cards }) => (
  <div className="cards-view">
    {cards.map((card, index) => (
      <ShopCard key={index} {...card} />
    ))}
  </div>
);

const ListView = ({ items }) => (
  <div className="list-view">
    {items.map((item, index) => (
      <ShopItem key={index} {...item} />
    ))}
  </div>
);

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
          }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
          }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "blue",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
          }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
          }, {
            name: "Nike free run",
            price: "170",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
          }, {
            name: "Nike Metcon 3",
            price: "150",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
          }
      ],
      viewMode: 'cards'
    };
  }

  handleSwitch = () => {
    this.setState(prevState => ({
      viewMode: prevState.viewMode === 'cards' ? 'list' : 'cards'
    }));
  }

  render() {
    const { products, viewMode } = this.state;

    return (
      <div className="store">
        <IconSwitch 
          icon={viewMode === 'cards' ? 'view_list' : 'view_module'}
          onSwitch={this.handleSwitch}
        />
        {viewMode === 'cards' 
          ? <CardsView cards={products} />
          : <ListView items={products} />
        }
      </div>
    );
  }
}

export default Store;