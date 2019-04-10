import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { getCardProducts } from '../../../features/card/selectors';
import { ProductItem } from '../../../features/card/model';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { RootState } from '../../../features/redux/root-reducer';

const styles = () => createStyles({
  emptyBasket: {
    textTransform: 'uppercase',
    fontSize: '0.6em',
    textAlign: 'center',
    margin: '25px 0'
  }
});

interface StateProps {
  cardProducts: ProductItem[];
}

type Props = StateProps & WithStyles<typeof styles>;

class BasketProductsList extends Component<Props> {
  render() {
    const { classes, cardProducts } = this.props;

    const EmptyBasket = () => (
      <Typography component="h6" variant="h6" className={classes.emptyBasket}>
        Twój koszyk jest pusty.
      </Typography>
    )
    return (
      <div>
        {cardProducts.length === 0 ? <EmptyBasket /> :
          <div>
            {cardProducts.map(item => {
              return (<p>{item.name}</p>)
            })}
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const cardProducts = getCardProducts(state);

  return {
    cardProducts,
  };
};

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withStyles(styles)(BasketProductsList));