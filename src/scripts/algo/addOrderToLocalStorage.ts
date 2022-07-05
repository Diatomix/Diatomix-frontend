import { Offer_Min_Fields } from '../../generated/graphql';

const addOrderToLocalStorage = (order: Offer_Min_Fields) => {
  const localOrders = localStorage.getItem('orders');
  if (!localOrders) {
    const localArray: Array<Offer_Min_Fields> = [];
    localArray.push(order);
    localStorage.setItem('orders', JSON.stringify(localArray));
    return localArray.length;
  } else {
    const localArray: Array<Offer_Min_Fields> = JSON.parse(localOrders);
    localArray.push(order);
    localStorage.setItem('orders', JSON.stringify(localArray));
    return localArray.length;
  }
};
export default addOrderToLocalStorage;
