import { Link, useParams } from 'react-router-dom';
import { products } from '../data/data';
import NotFound from './NotFound';

function ProductDetails() {
  const currentProductId = useParams().id;
  const product = products.find((product) => product.id === parseInt(currentProductId));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', gap: '20px' }}>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>
            Category: <Link to={`/category/${product.categoryId}`}>{product.categoryId}</Link>
          </p>
          <img src={product.img} alt={product.name} style={{ width: '150px' }} />
          <button type="button" className="btn">
            Buy
          </button>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default ProductDetails;
