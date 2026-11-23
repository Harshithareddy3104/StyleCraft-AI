
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <h2>StyleCraft<span> AI</span></h2>
      </div>

      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/designs">Explore Designs</a>
        <a href="/saved-designs">Saved Designs</a>
      </div>

      <div className="navbar-button">
        <a href="/upload-fabric">Upload Fabric</a>
      </div>

    </nav>
  );
};

export default Navbar;
