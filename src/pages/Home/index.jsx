
import './index.css';

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-subtitle">
            YOUR FABRIC, YOUR STYLE, YOUR CREATION
          </p>

          <h1>
            Turn Your Fabric Into
            <span> Beautiful Designs</span>
          </h1>

          <p className="hero-description">
            Explore creative outfit designs using the fabric
            you already own. Discover different styles,
            customize your favorite designs and bring your
            fashion imagination to life.
          </p>

          <div className="hero-buttons">

            <a href="/upload-fabric" className="primary-btn">
              Upload Your Fabric
            </a>

            <a href="/designs" className="secondary-btn">
              Explore Designs
            </a>

          </div>

        </div>

        <div className="hero-image">
          <div className="fabric-card">
            <div className="fabric-icon">✦</div>
            <h3>Design Your Style</h3>
            <p>Endless fashion possibilities</p>
          </div>
        </div>

      </section>

      {/* How It Works Section */}

      <section className="how-it-works">

        <p className="section-subtitle">
          SIMPLE & CREATIVE
        </p>

        <h2>How StyleCraft Works</h2>

        <p className="section-description">
          Create your dream outfit in three simple steps.
        </p>

        <div className="steps-container">

          <div className="step-card">
            <span>01</span>
            <h3>Upload Your Fabric</h3>
            <p>
              Upload a picture of the fabric material
              you already own.
            </p>
          </div>

          <div className="step-card">
            <span>02</span>
            <h3>Explore Designs</h3>
            <p>
              Discover different outfit styles and
              customize your favorite designs.
            </p>
          </div>

          <div className="step-card">
            <span>03</span>
            <h3>Save Your Creation</h3>
            <p>
              Compare your designs and save the
              outfits you love.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;
