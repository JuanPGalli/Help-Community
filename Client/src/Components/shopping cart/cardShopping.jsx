import { useState } from 'react';
import style from './cardConteiner.module.css';
import { useDispatch } from 'react-redux';
import { removeTocart } from '../../redux/actions/action';
import { addOneToCart, removeOneToCart } from '../../redux/actions/action';
import { Link } from 'react-router-dom';
// card de cada producto

export default function CardShopping(props) {
  const { id, name, image, price, rating, stock, quantity } = props;

  const dispatch = useDispatch();
  return (
    <div className={style.cardConteiner}>
      <Link to={`/products/detail/${name}`}>
        <div className={style.image}>
          <img src={image} alt='' />
        </div>
      </Link>
      <div className={style.head}>
        <Link to={`/products/detail/${name}`}>
          <h4>{name}</h4>
        </Link>
        <button
          className={style.btnDelete}
          onClick={() => {
            dispatch(removeTocart(id));
          }}
        >
          eliminar
        </button>
      </div>

      <div className={style.counter}>
        <button
          value={'-'}
          className={style.btnCount}
          onClick={() => {
            dispatch(removeOneToCart(id));
          }}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          value={'+'}
          className={style.btnCount}
          onClick={() => {
            dispatch(addOneToCart(id));
          }}
        >
          +
        </button>
      </div>
      <Link to={`/products/detail/${name}`}>
        <div className={style.price}>
          <p>${Number((price * quantity).toFixed(2))}</p>
        </div>
      </Link>
    </div>
  );
}
