import styles from './ProductDetail.module.css';
import data from '../../data/data';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const params = useParams();
  const productId = params.productId;
  const product = data.tractors[productId];

  return <div class={styles.layout}>
    <h1 class={styles.header}>The Tractor Store</h1>
    <div class={styles.product}>
      <h2>{product.label}</h2>
      <img class={styles.image} src={product.img} />
    </div>
    <aside class={styles.recos}>
      <a href={`http://localhost:3002/recommendations/${productId}`}>
        Show Recommendations
      </a>
    </aside>
  </div>
}

export default ProductDetail;