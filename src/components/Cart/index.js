import React from 'react';
import CartFooter from './CartFooter';
import { Table } from '../components';
import { useSelector } from 'react-redux';
import Row from './Row';

function Cart() {
  const items = useSelector((state) => state.items);

  return (
    <Table
      items={items}
      heading='My Shopping Cart'
      subheading='items in your cart'
    >
      <tbody>
        {!items.length ? (
          <div>No Items in the cart yet</div>
        ) : (
          items.map((item) => <Row {...item} />)
        )}
      </tbody>
      <CartFooter />
    </Table>
  );
}
export default Cart;
