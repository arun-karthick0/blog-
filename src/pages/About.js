import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("form submitted");
    navigate("/");
  };

  return (
    <section className="about">
      <div className="form">
        <h4 style={{ marginTop: "15px" }}>contact us</h4>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="name" required></input>
          </div>
          <div>
            <input type="email" placeholder="email" required></input>
          </div>
          <div>
            <textarea rows={4} cols={24} required></textarea>
          </div>
          <button className="btn btn-primary">submit query</button>
        </form>
      </div>
    </section>
  );
};

export default About;
