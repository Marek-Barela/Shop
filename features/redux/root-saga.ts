import { fork } from 'redux-saga/effects';
import maleProducts from '../maleProducts/saga';
import singleMaleProduct from '../singleMaleProduct/saga';
import maleShirts from '../maleProductsShirts/saga';
import maleJeans from '../maleProductsJeans/saga';
import maleJacket from '../maleProductsJacket/saga';
import 'isomorphic-unfetch';
import es6promise from 'es6-promise';
es6promise.polyfill()

export default function* rootSaga() {
  yield fork(maleProducts);
  yield fork(singleMaleProduct);
  yield fork(maleShirts);
  yield fork(maleJeans);
  yield fork(maleJacket);
}