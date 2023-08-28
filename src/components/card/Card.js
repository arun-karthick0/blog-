import "./card.css";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Card({ user }) {
  const [isVisible, setIsVisible] = useState("");
  const navigate = useNavigate();

  const toggleCard = () => {
    setIsVisible(!isVisible);
  };

  const logOut = () => {
    if (auth) {
      signOut(auth);
      toast.success("logout");
    }
  };

  const name = user?.displayName[0].toUpperCase();
  // console.log(name);

  return (
    <div>
      <button className="card" onClick={toggleCard}>
        {
          <div className="profile_circle">
            <div className="name">{name}</div>
          </div>
        }
        {isVisible && (
          <div className="card_info">
            <div className="card_image">
              <img src={user?.photoURL} alt="" />
            </div>
            <div
              style={{
                marginTop: "15px",
                fontSize: "1.1rem",
              }}
            >
              {user?.displayName}
            </div>
            <div className="card_blog" onClick={() => navigate("/blogs")}>
              MyBlogs
            </div>
            <div className="card_about" onClick={() => navigate("/about")}>
              about
            </div>
            <button
              onClick={logOut}
              className="btn"
              style={{
                width: "80%",
                marginTop: "10px",
                padding: "2px",
                color:"white",
                backgroundColor: "red",
              }}
            >
              Logout
            </button>
          </div>
        )}
      </button>
    </div>
  );
}

export default Card;
