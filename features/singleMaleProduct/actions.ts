import { createAction, createAsyncAction } from 'typesafe-actions';
import { ProductItem } from './model';

export const fetchSingleProduct = createAction(
  'singlemaleproduct/FETCH_SINGLE_PRODUCT'
);

export const switchSingleProductImage = createAction(
  'singlemaleproduct/SWITCH_SINGLE_PRODUCT_IMAGE',
  setImg => { return (img: string) => setImg(img) }
);

export const fetchSingleProductRequest = createAsyncAction(
  'singlemaleproduct/FETCH_SINGLE_PRODUCT_REQUESTED',
  'singlemaleproduct/FETCH_SINGLE_PRODUCT_SUCCEEDED',
  'singlemaleproduct/FETCH_SINGLE_PRODUCT_FAILED',
)<undefined, ProductItem[], Error>();