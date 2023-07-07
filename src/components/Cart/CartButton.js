import { uiactions } from '../../store/ui-slice';
import classes from './CartButton.module.css';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
const CartButton = (props) => {
  const dispatch= useDispatch();
  const quantity= useSelector(state=>state.cart.totalquantity);

  const showcarthandler=()=>{
    dispatch(uiactions.toggle())
  }
  return (
    <button className={classes.button} onClick={showcarthandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
