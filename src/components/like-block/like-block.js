import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { ItemsInLike } from "../items-in-like";
import "./like-block.css";

export const LikeBlock = () => {
  const items = useSelector((state) => state.like.itemsInLike);
  const navigate = useNavigate();
  const handleLikeClick =() =>{
    navigate(`/like`)
  }


  return (
    <div className="like-block">
      <ItemsInLike quantity={items.length}/>
     <FiHeart
     color="black"
     size={25}
     className="like-icon"
     onClick={handleLikeClick}
     />
    </div>
  );
};