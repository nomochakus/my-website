import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        <h1>Welcome to MyWebsite</h1>
        <p>Your one-stop solution for amazing services and experiences.</p>
        <Link to="/services" className="btn">
          Explore Services
        </Link>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>🚀 Fast & Reliable</h3>
          <p>
            Experience lightning-fast performance with our optimized solutions
            designed for speed and reliability.
          </p>
        </div>
        <div className="feature-card">
          <h3>🎨 Beautiful Design</h3>
          <p>
            Stunning visuals and intuitive interfaces that captivate your
            audience and enhance user experience.
          </p>
        </div>
        <div className="feature-card">
          <h3>🔒 Secure & Safe</h3>
          <p>
            Top-notch security measures to protect your data and ensure peace of
            mind for all users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
