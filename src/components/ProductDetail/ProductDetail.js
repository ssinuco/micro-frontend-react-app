import styles from './ProductDetail.module.css';
import data from '../../data/data';
import { useParams } from 'react-router-dom';
import "http://localhost:3002/js/InspireRecommendations.js";
import "http://localhost:3003/CheckoutBuy.js";
import "http://localhost:3003/CheckoutBuyPolyfills.js";

const ProductDetail = () => {
  const params = useParams();
  const productId = params.productId;
  const product = data.tractors[productId];

  return <div className={styles.layout}>
    <h1 className={styles.header}>The Tractor Store</h1>
    <div className={styles.product}>
      <h2 className={styles.headline}>{product.label}</h2>
      <img className={styles.image} src={product.img} />
    </div>
    <div className={styles.details}>
      <checkout-buy product-id={productId}></checkout-buy>
    </div>
    <aside className={styles.recos}>
      <inspire-recommendations productId={productId}></inspire-recommendations>
    </aside>
  </div>
}

export default ProductDetail;