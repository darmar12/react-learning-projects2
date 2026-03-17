import { Link } from 'react-router-dom';
import { categories } from '../data/data';

function Home() {
  return (
    <div>
      <h2>Categories</h2>
      <ul style={{ display: 'flex' }}>
        {categories.map((category) => (
          <li key={category.id}>
            <Link to={`/category/${category.id}`}>
              {category.name}
              <img src={category.img} alt={category.name} style={{ width: '150px' }} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
