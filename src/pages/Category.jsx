import { Link, useParams } from 'react-router-dom';
import { products } from '../data/data';

function Category() {
  const currentCategoryId = useParams().id;
  const productList = products.filter((product) => product.categoryId === currentCategoryId);

  console.log(productList);

  return (
    <div>
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
    </div>
  );
}

export default Category;
