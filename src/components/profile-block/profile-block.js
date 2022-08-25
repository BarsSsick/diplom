import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import "./profile-block.css";

export const ProfileBlock = () => {
  const navigate = useNavigate();
  const handleProfileClick =() =>{
    navigate(`/singin`)
  }

  return (
    <div className="profile-block">
     <FiUser
     color="black"
     size={25}
     className="prof-icon"
     onClick={handleProfileClick}
     />
    </div>
  );
};