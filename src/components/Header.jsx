import headerBanner from "../assets/images/more/15.jpg";
import "../App.css";
const Header = () => {
  return (
    <div>
      <h2
        className="text-white text-4xl py-4 text-center bg-cover bg-center title"
        style={{ backgroundImage: `url(${headerBanner})` }}
      >
        Espresso Emporium
      </h2>
    </div>
  );
};

export default Header;
