import styles from './ProductDetail.module.css';
import data from '../../data/data';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

const ProductDetail = () => {
  const params = useParams();
  const productId = params.productId;
  const product = data.tractors[productId];

  const refContainerFragment = useRef();

  useEffect(()=>{
    fetch(`/inspire/recommendations/${productId}`)
    .then(res => res.text())
    .then(html => {
      refContainerFragment.current.innerHTML = html;
      refContainerFragment.current.querySelectorAll('script').forEach(element => {
        const script = document.createElement('script');
        script.src = element.src;
        script.type= element.type;
        refContainerFragment.current.appendChild(script);      
      });
    });
  }, []);

  return <div className={styles.layout}>
    <h1 className={styles.header}>The Tractor Store</h1>
    <div className={styles.product}>
      <h2>{product.label}</h2>
      <img className={styles.image} src={product.img} />
    </div>
    <aside ref={refContainerFragment} className={styles.recos}>
      <a href={`/inspire/recommendations/${productId}`}>
        Show Recommendations
      </a>      
    </aside>
  </div>
}

export default ProductDetail;