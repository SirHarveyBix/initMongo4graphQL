import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../lib/queries';
import Card from './Card';
import { Context } from '../../context/index';
const styles = {
  gallery: {
    height: 'calc(100vh - 120px)',
    overflow: 'scroll',
  },
};

function Gallery({ category }) {
  const { isChecked } = React.useContext(Context);
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { category: category },
  });
  let array = [];
  const withFilters = () => {
    if (!isChecked.length) return data?.products;
    isChecked.forEach((filter) => {
      array = [
        ...array,
        ...data?.products?.filter(
          (product) => product.filter === filter.toLowerCase()
        ),
      ];
    });
    return array;
  };
  if (loading) return <div>loading ...</div>;
  if (error) return <div>Error</div>;
  if (!data) return <div>Nothing to share</div>;
  const products = withFilters();
  return (
    <div className='col-md-8 order-md  -2 col-lg-9'>
      <div className='container-fluid' style={styles.gallery}>
        <div className='row'>
          {products.map((product) => (
            <Card key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Gallery;
