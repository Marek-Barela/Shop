import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { addProductToCart, updateAmountOfProductsInCart } from '../../features/cart/actions';
import { getCartProducts } from '../../features/cart/selectors';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';
import { ProductItem } from '../../features/cart/model';

const styles = () => createStyles({
  button: {
    fontSize: '0.6em',
    textTransform: 'uppercase',
    backgroundColor: '#000000',
    color: '#ffffff',
    border: '1px solid #ffffff',
    margin: '25px 0',
    width: 300,
    height: 40,
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: "#ffffff",
      color: "#000000",
      border: '1px solid #000000',
    }
  }
});

interface ParentProps {
  product: ProductItem
}

interface StateProps {
  cartProducts: ProductItem[];
}

interface DispatchProps {
  addProductToCart: (payload: ProductItem) => void;
  updateAmountOfProductsInCart: (payload: ProductItem) => void;
}

type Props = StateProps & ParentProps & DispatchProps & WithStyles<typeof styles>;

class AddProductButton extends Component<Props> {

  handleAddProductButton(product: ProductItem) {
    const { addProductToCart, updateAmountOfProductsInCart, cartProducts } = this.props;
    const filterTheSameProductsInCart = cartProducts.filter(item => {
      return item.id === product.id
    })
    if (!filterTheSameProductsInCart.length) {
      addProductToCart(product)
    }
    else {
      updateAmountOfProductsInCart(product)
    }
  }

  render() {
    const { classes, product } = this.props;
    return (
      <Button
        className={classes.button}
        onClick={() => this.handleAddProductButton(product)}
      >
        Dodaj Do Koszyka
      </Button>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const cartProducts = getCartProducts(state);

  return {
    cartProducts,
  };
};

const mapDispatchToProps = {
  addProductToCart,
  updateAmountOfProductsInCart
};

export default connect<StateProps, DispatchProps, {}, RootState>(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddProductButton));