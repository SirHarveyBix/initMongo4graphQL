import React from 'react';
import CartFooter from './CartFooter';
import { Table } from '../components';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../lib/redux/selectors';
import Row from './Row';

function Cart() {
  const items = useSelector((state) => state.items);

  const total = useSelector(selectCartTotal);

  return (
    <Table
      items={items}
      heading='My Shopping Cart'
      subheading='items in your cart'
    >
      <tbody>
        {!items.length ? (
          <tr>
            <td>No Items in the cart yet</td>
          </tr>
        ) : (
          items.map((item) => <Row key={item.id} {...item} />)
        )}
      </tbody>
      <CartFooter total={total} />
    </Table>
  );
}
export default Cart;
