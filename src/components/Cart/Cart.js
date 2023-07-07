import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartitems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartitems.map((items) => (
          <CartItem
          key={items.id}
            item={{
              id: items.id,
              title: items.name,
              quantity: items.quantity,
              total: items.totalprice,
              price: items.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
