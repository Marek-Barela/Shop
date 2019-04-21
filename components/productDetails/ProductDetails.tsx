import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductTextDescription from './ProductTextDescription';
import AddProductButton from './AddProductButton';
import ImageMiniature from './ImageMiniature';
import SnackbarWrapper from './SnackbarWrapper';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { ProductItem } from '../../features/maleProducts/model';

const styles = (theme: Theme) => createStyles({
  imageMiniatureContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.up('xs')]: {
      order: 2,
      justifyContent: 'center'
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
      flexWrap: 'initial',
      order: 1
    }
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('xs')]: {
      order: 1
    },
    [theme.breakpoints.up('md')]: {
      order: 2
    },
  },
  mainImage: {
    maxWidth: '100%',
    margin: '0 auto',
    height: 'auto'
  },
  descriptionContainer: {
    padding: '0 30px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
      textAlign: 'center',
      order: 3
    },
    [theme.breakpoints.up('sm')]: {
      order: 3,
      margin: '20px 0'
    },
  }
});

interface ParentProps {
  product: ProductItem | any;
}

type Props = ParentProps & WithStyles<typeof styles>;

class ProductDetails extends Component<Props> {
  state = {
    productInCartSuccess: false
  }

  displaySuccessSnackbar() {
    this.setState({
      productInCartSuccess: true
    })
  }

  handleCloseSnackbar = () => {
    this.setState({ productInCartSuccess: false });
  };

  render() {
    const { product, classes } = this.props;
    const { productInCartSuccess } = this.state;
    const { name, description, fabric, price, images = [] } = product;
    const textDescriptionProps = { name, description, fabric, price };
    const snackbarProps = { productInCartSuccess };
    return (
      <>
        <Grid container>
          <Grid className={classes.imageMiniatureContainer} xs={12} md={1} item>
            {images.map((img: string, index: number) => <ImageMiniature key={index} img={img} />)}
          </Grid>
          <Grid item xs={12} md={4} className={classes.imageContainer}>
            <Grid>
              <img className={classes.mainImage} src={images[0]} />
            </Grid>
          </Grid>
          <Grid item xs={12} md={7} className={classes.descriptionContainer}>
            <ProductTextDescription {...textDescriptionProps} />
            <AddProductButton product={product} displaySucces={() => this.displaySuccessSnackbar()} />
            <SnackbarWrapper {...snackbarProps} handleClose={() => this.handleCloseSnackbar()} />
          </Grid>
        </Grid>
      </>
    )
  }
}

export default withStyles(styles)(ProductDetails);

