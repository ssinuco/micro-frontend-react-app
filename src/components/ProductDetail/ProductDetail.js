import styles from './ProductDetail.module.css';
import data from '../../data/data';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();
  const productId = params.productId;
  const product = data.tractors[productId];

  return <div className={styles.layout}>
    <h1 className={styles.header}>The Tractor Store</h1>
    <div className={styles.product}>
      <h2>{product.label}</h2>
      <img className={styles.image} src={product.img} />
    </div>
    <aside className={styles.recos}>
      <a href={`http://localhost:3002/recommendations/${productId}`}>
        Show Recommendations
      </a>      
    </aside>
  </div>
}

export default ProductDetail;