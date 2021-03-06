import React, { Component } from 'react';
import Layout from '../layout/Layout';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Products from '../products/Products';
import { clothes, boots, sport, accesories } from '../../features/utils/femaleNavigation';
import { getProducts } from '../../features/femaleProducts/selectors';
import { genderWomanDefault } from '../../features/utils/gender';
import { ProductItem } from '../../features/femaleProducts/model';
import { connect } from 'react-redux';
import { RootState } from '../../features/redux/root-reducer';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = () => createStyles({
  banner: {
    height: '240px',
    display: 'flex',
    alignItems: 'center',
    backgroundImage: 'url(https://live.staticflickr.com/65535/46959848974_5a2a4adcd8_k.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  text: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    width: '40%',
    marginLeft: '12%',
    userSelect: 'none'
  }
});

interface StateProps {
  products: ProductItem[]
}

type Props = StateProps & WithStyles<typeof styles>;

class Woman extends Component<Props> {
  render() {
    const { classes, products } = this.props;
    const femaleNavMenu = { clothes, boots, sport, accesories };
    return (
      <Layout
        URL={genderWomanDefault}
        nav={femaleNavMenu}
      >
        <Grid className={classes.banner}>
          <Typography className={classes.text} component="h3" variant="h4">
            Już wkrótce najnowsze trendy...
          </Typography>
        </Grid>
        <Products
          products={products}
          label="Produkty"
        />
      </Layout>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const products = getProducts(state)

  return {
    products
  };
};

export default connect<StateProps, {}, {}, RootState>(mapStateToProps, {})(withStyles(styles)(Woman));