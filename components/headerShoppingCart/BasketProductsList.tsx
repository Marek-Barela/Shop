import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import BasketListItem from './BasketListItem';
import Grid from '@material-ui/core/Grid';
import { getCartProducts } from '../../features/cart/selectors';
import { ProductItem } from '../../features/cart/model';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';

const styles = () => createStyles({
  emptyBasket: {
    textTransform: 'uppercase',
    fontSize: '0.6em',
    textAlign: 'center',
    margin: '25px 0'
  },
  list: {
    padding: 0
  }
});

interface StateProps {
  cartProducts: ProductItem[];
}

type Props = StateProps & WithStyles<typeof styles>;

class BasketProductsList extends Component<Props> {
  render() {
    const { classes, cartProducts } = this.props;
    const EmptyBasket = () => (
      <Typography
        component="h6"
        variant="h6"
        className={classes.emptyBasket}
      >
        Twój koszyk jest pusty.
      </Typography>)
    return (
      <Grid>
        {cartProducts.length === 0 ? <EmptyBasket /> :
          <List className={classes.list}>
            {cartProducts.map((product, index) => <BasketListItem key={index} product={product} />)}
          </List>
        }
      </Grid>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const cartProducts = getCartProducts(state);

  return {
    cartProducts,
  };
};

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withStyles(styles)(BasketProductsList));