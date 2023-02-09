import './App.css';

function App() {
  return (
    <main className="card">
      <div className="card__image">
        <img className="card__image card__image--desktop" src="/images/image-product-desktop.jpg" alt="gabrielle essence perfume" />
        <img className="card__image card__image--mobile" src="/images/image-product-mobile.jpg" alt="gabrielle essence perfume" />
      </div>
      <div className="card__description">
        <div className="card__header">
          <p>PERFUME</p>
          <h1>Gabrielle Essence Eau De Parfum</h1>
        </div>
        <p className="card__body">A floral, solar and voluptuous interpretaion composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <div className="card__footer">
          <span className="card__price">$149.99</span>
          <span className="card__discount">
            <strike>$169.99</strike>
          </span>
        </div>
        <button className="card__action" type="button">
          <img src="/images/icon-cart.svg" alt="Cart" />
          <span>Add to Cart</span>
        </button>
      </div>
    </main>
  );
}

export default App;
