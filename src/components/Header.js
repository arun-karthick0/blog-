import React from "react";
import { Link } from "react-router-dom";

const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;

  console.log(user?.photoURL);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid bg-faded padding-media">
        <div className="container padding-media">
          <nav className="navbar navbar-toggleable-md navbar-light">
            <button
              className="navbar-toggler mt-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              data-bs-parent="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="true"
              aria-label="Toggle Navigation"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "home" ? "active" : ""
                    }`}
                    onClick={() => setActive("home")}
                  >
                    Home
                  </li>
                </Link>
                <Link to="/blogs" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "blogs" ? "active" : ""
                    }`}
                    onClick={() => setActive("blogs")}
                  >
                    Blogs
                  </li>
                </Link>

                <Link to="/create" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "create" ? "active" : ""
                    }`}
                    onClick={() => setActive("create")}
                  >
                    Create
                  </li>
                </Link>

                <Link to="/about" style={{ textDecoration: "none" }}>
                  <li
                    className={`nav-item nav-link ${
                      active === "about" ? "active" : ""
                    }`}
                    onClick={() => setActive("about")}
                  >
                    About
                  </li>
                </Link>
              </ul>
              <div className="row g-3">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  {userId ? (
                    <>
                      <div className="profile-logo">
                        {user.photoURL ? (
                          <img
                            src={user.photoURL}
                            alt="Profile"
                            style={{
                              objectFit: "fill",
                              width: "30px",
                              height: "30px",
                              borderRadius: "50%",
                              marginTop: "12px",
                            }}
                          />
                        ) : (
                          <img
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIcAhwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAYBBQcCAwj/xAA4EAACAQMBBAYIBAcBAAAAAAAAAQIDBBEFBhIhMRNBUWFxgQcUIjJCkaHRUnKxwRUjNENEU5Iz/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrrzVIUm4UEqk1zfUvuBsT4zuaFP36sF4yK9Xuq9fPSVG1+FcEfECyev2v++B9KdxRqPFOpCT7FIq4YFtBW7e9uKHu1HKP4ZcUbaz1GlcYhL2KnY3wfgBOAAAAAAAAAAAA12sXbo0lRg8TmuL7EBG1PUHUlKjQeIcpSXxGsA6wPNSpClTdSrOMIRWXKTwkvEqGs7c0aEui0mnGvL4q1TKgvBc5fTzNX6QNWqXGofw2lNqhQS6RL45vjx7kseeSpgWNbba2p7zqW7X4XR4ff6lk0TbW0vMUtRUbSs3hSy3Tl5/D5/M5wZjFyeEB3BNNJppp9aBSfR5q05yq6XWqSlGEFOhvfClwkvqvqXYDcaXqDm1Qrv2uUZPr7mbVFTLDpt16zbreftw4S7+8CWAAAAAAAAVi8rdPc1KmeDeF4Fhu59HbVZ9ai2VgAZMBtRTbaSXFtgce2hlKWvag5LDdxP9TXk3W7ujfavd3VspKjWqb0d5YfLsISWXhAAABvthnJbTWu6ucZp+G6zqZynY28oWW0FCpctqM06UWlnEpYSz3HVgBM0qt0V5FP3Z+y/wBiGZUtxqS5xeQLYDEXlJ9pkAAAAAAjaj/RVvylbLRcw6ShUgucotIq6eQB8ruk7i1rUIvDqU5RT7G1g+oA4f0coTdOot2cXuyT6muZlvHCPmy1+kHS7ezuaF5bU3B3Mp9Lx4byw+C6usqQAAJZeAJWlW9S71S0t6Xv1K0Vns48X5LLOzlK9HmlW8qEtTqwcriNSUKTb4RWFlpdvF8S6gA+QPUIOpOMFzk0gLRR/wDGn+VHswuRkAAAAAAFbv6HQXU4/C/aj4MshB1S19Yob0F/MhxXeutAaAA1uq67p2k8Ly5iquMqlBb035fcCHtxawuNnLicl7dBxqQa6mmk/o2csLVre2lbUbW4s6NnClQrR3d6cszx5cF9SqgFxMye6mo/MwYfEDsOz9rCz0WyoU1wVGMpd8mst/NmxKFpm3kqSpUb6zi6UYqO/Rl7Sxwzh8/mXDTdWsdUg5WNxGrji48pR8U+IE0naPR6W7337tNZ8+ohJOTUYrMm8JdpY7C2VtQUPifGT7wJIAAAAAAAAAApm3+kazXs3cbP15RlFN16FNJTqLti+ee5c+rsfFZb2/LfTU8ve3ueevPefp0q+1Gw+lbQOVdw9VvX/kUl73518X694HCUsvBlrD5lr1n0f6/pe9Kjb+vUV/ctuMv+OfyyVa5o1bWW7dUqlCWfdqwcH8mB4B53o/iXzJFraXV41Gzta9xJ8lRpSm/ogPiSLVXHrdOFjGrK6csU+izvN92C1aL6N9c1Bxnexhp9F83V9qeO6K/do6ds1snpWztPNnR37lrE7mrhzl3Z6l3ID5bGaVqdjp8Z67cKteS4pYX8pY5Nr3n3ljGAAAAAAAAAAAAAAADxOnCosVIxkuySyewBF/h1ipb3qdtnt6KP2JEYRgsQiorsSwegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k="
                            alt="Profile"
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "50%",
                              marginTop: "12px",
                            }}
                          />
                        )}
                      </div>
                      <p style={{ marginTop: "12px", marginLeft: "5px" }}>
                        {user.displayName}
                      </p>
                      <li className="nav-item nav-link" onClick={handleLogout}>
                        Logout
                      </li>
                    </>
                  ) : (
                    <Link to="/auth" style={{ textDecoration: "none" }}>
                      <li
                        className={`nav-item nav-link ${
                          active === "login" ? "active" : ""
                        }`}
                        onClick={() => setActive("login")}
                      >
                        Login
                      </li>
                    </Link>
                  )}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
