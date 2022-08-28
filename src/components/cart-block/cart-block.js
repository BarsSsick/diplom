import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CgShoppingBag } from "react-icons/cg";
import { ItemsInCart } from "../items-in-cart";
import "./cart-block.css";

export const CartBlock = () => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const navigate = useNavigate();
  const handleLikeClick = () => {
    navigate(`/order`)
  }

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <CgShoppingBag
        color="black"
        size={25}
        className="cart-icon"
        onClick={handleLikeClick}
      />
    </div>
  );
};
