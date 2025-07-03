import headerBanner from "../assets/images/more/15.jpg";
import headerLogo from "../assets/images/more/logo1.png";
import "../App.css";
const Header = () => {
  return (
    <div>
      <h2
        className="text-white text-4xl py-4 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${headerBanner})` }}
      >
        <div className="flex items-center justify-center gap-2">
          <img src={headerLogo} alt="Logo" className="h-12 w-12" />
          <span className="font-[Rancho] text-white text-4xl">
            Espresso Emporium
          </span>
        </div>
      </h2>
    </div>
  );
};

export default Header;
