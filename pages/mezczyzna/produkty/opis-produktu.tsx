import React from 'react';
import ProductDescription from '../../../components/productDescription/ProductDescription';
import { fetchProducts } from '../../../features/maleProducts/actions';
import getStore from '../../../features/redux/selectors';
import { RootAction } from '../../../features/redux/root-actions';
import { RootState } from '../../../features/redux/root-reducer';
import { NextFunctionComponent } from 'next';
import { Store } from 'redux';

const ProductDescriptionPage: NextFunctionComponent<{}, {}, Store<RootState, RootAction>> = () => {
  return (
    <div>
      <ProductDescription />
    </div>
  );
};

ProductDescriptionPage.getInitialProps = async (store) => {
  const action = getStore(store)
  action.dispatch(fetchProducts())
  return {};
};

export default ProductDescriptionPage;
