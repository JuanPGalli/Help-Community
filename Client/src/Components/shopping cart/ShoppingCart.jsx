import { useEffect } from 'react';
import Buy from './buy';
import CardShopping from './cardShopping';
import style from './shoppingCart.module.css';
import { useSelector } from 'react-redux';
import { setItem } from '../../utils/localStorage';
import NoItemTocart from './noItemTocar';
import { useLocation } from 'react-router-dom';

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cartShop);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get('paid') === true) {
      dispatch(clearCart());
      window.localStorage.removeItem('dataCart');
    }
  }, [location, dispatch]);

  useEffect(() => {
    setItem('cartShop', cart);
  }, [cart]);

  return (
    <div className={style.conteiner}>
      <div className={style.cont}>
        <div className={style.items}>
          {cart?.length > 0 ? (
            cart.map((e, index) => {
              console.log(e);
              return (
                <CardShopping
                  key={index}
                  id={e.product.id}
                  name={e.product.name}
                  price={e.product.price}
                  rating={e.rating}
                  stock={e.product.stock}
                  image={e.product.image}
                  quantity={e.quantity}
                />
              );
            })
          ) : (
            <NoItemTocart />
          )}
        </div>
        {cart?.length > 0 && <Buy />} {/* Renderiza Buy solo si hay elementos en el carrito */}
      </div>
    </div>
  );
}
