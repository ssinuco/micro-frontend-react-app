import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="product/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
