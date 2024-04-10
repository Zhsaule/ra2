import { Component } from 'react';
import IconSwitch from './IconSwitch';
import ListView from './ListView';
import CardsView from './CardView';
import products from './Products';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: 'list', 
      products: products
    };
  }

  handleLayoutSwitch = () => {
    this.setState({ layout: this.state.layout === 'module' ? 'list' : 'module' });
  };

  render() {
    const { layout, products } = this.state;
    const icon = layout === 'module' ? 'view_list' : 'view_module';

    return (
      <div className="store">
        <IconSwitch icon={icon} onSwitch={this.handleLayoutSwitch} />
        {layout === 'module' ? <CardsView cards={products} /> : <ListView items={products} />}
      </div>
    );
  }
}

export default Store;
