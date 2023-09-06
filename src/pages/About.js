import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Query Submitted");
    navigate("/");
  };

  return (
    <section className="about-page">
      <div className="about-page-content">
        <p className="about-head">About</p>
        <div className="about-contact-details">
          <div className="about-details">
            <p className="about-text">
              <p className="about-blog-detail">office</p>
              <p className="address">36-bangalore</p>
            </p>
          </div>
          <div className="about-details">
            <p className="about-text">
              <p className="about-blog-detail">email</p>
              <p className="address">abc@gmail.com</p>
            </p>
          </div>
          <div className="about-details">
            <p className="about-text">
              <p className="about-blog-detail">phone</p>
              <p className="address">468-5545-454</p>
            </p>
          </div>
        </div>
        <div className="about-details-form">
          <div className="about-details-desc">
            <p className="about-detail-para">
              At Blog-site, we cover a wide range of topics, including [list
              some of the key topics or categories you cover, e.g., "technology,
              health and wellness, travel, finance, and lifestyle"]. Whatever
              your interests, you're sure to find something that resonates with
              you. Join our community of like-minded readers and writers. Engage
              in discussions, share your thoughts in the comments, and connect
              with others who share your interests.We're committed to keeping
              our content fresh and up-to-date
            </p>
          </div>

          <div className="about-detail-form">
            <div className="about-form-card">
              <p>contact-us</p>
              <form onSubmit={handleSubmit}>
                <div className="about-contact-page">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="about-contact-page">
                  <input type="email" placeholder="email" required />
                </div>
                <div className="about-contact-page">
                  <textarea
                    rows={4}
                    cols={10}
                    required
                    placeholder="Enter text..."
                  ></textarea>
                </div>
                <div>
                  <button>submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
