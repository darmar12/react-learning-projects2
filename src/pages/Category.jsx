import { Link, useParams, useSearchParams } from 'react-router-dom';
import { products } from '../data/data';
import NotFound from './NotFound';

function Category() {
  const currentCategoryId = useParams().id;
  const [searchParams, setSearchParams] = useSearchParams();
  const maxPrice = Number(searchParams.get('maxPrice')) || Infinity;
  const productList = products.filter(
    (product) => product.categoryId === currentCategoryId && product.price <= maxPrice,
  );

  function handleMaxPrice(e) {
    const value = e.target.value;
    setSearchParams(value ? { maxPrice: value } : {});
  }

  return (
    <div>
      <h1>Category - {currentCategoryId}</h1>
      <label htmlFor="maxPrice">
        <input
          type="number"
          id="maxPrice"
          value={searchParams.get('maxPrice') || ''}
          placeholder="Enter maxprice"
          onChange={handleMaxPrice}
        />
      </label>
      {productList.length > 0 ? (
        <>
          <ul style={{ display: 'flex' }}>
            {productList.map((product) => (
              <li key={product.id}>
                <Link to={`/product/${product.id}`}>
                  {product.name} ${product.price}
                  <img src={product.img} alt={product.name} style={{ width: '150px' }} />
                </Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export default Category;
