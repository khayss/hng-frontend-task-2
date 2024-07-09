import { Link } from "react-router-dom";
import { Menu } from "../../svgs/Icons";
import { BlackLogo } from "../../svgs/Logo";
// import { Button } from "../Button/Button";

function Header() {
  return (
    <header className="w-full flex justify-center h-90 pt-20 pb-8 px-[7%]">
      <div className="w-full flex font-roboto max-w-[820px] h-62 items-center justify-between rounded-2xl bg-[--header-bg] px-30 py-8">
        <div className="h-28">
          <BlackLogo />
        </div>
        <div>
          <div>
            <ul className="flex gap-10 md:gap-24 text-text-main font-semibold">
              <li className="hidden md:block">
                <Link to={"/"} className="w-full">
                  Home
                </Link>
              </li>
              <li className="hidden md:block">
                <Link to={"/products"} className="w-full">
                  All Products
                </Link>
              </li>
              {/* <li className="hidden md:block">
                <div className="relative">
                  <p>Favorites</p>
                  <p className="absolute hidden md:flex text-small h-12 w-[12px] bg-red rounded-full text-center text-white justify-center items-center top-0 -right-[12px]">
                    3
                  </p>
                </div>
              </li> */}
              <li>
                <Link to={"/cart"} className="relative hidden md:block">
                  <p>Cart</p>
                  <p className="absolute hidden text-small h-12 w-[12px] bg-red rounded-full text-center text-white md:flex justify-center items-center top-0 -right-[12px]">
                    3
                  </p>
                </Link>
              </li>
              {/* <li>My Orders</li> */}
              <li className="md:hidden">
                <Menu />
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="h-30 w-[30px] bg-main flex items-center text-center justify-center rounded-full text-white">
            <h1>AD</h1>
          </div>
          {/* <div className="font-medium flex gap-8">
            <button className="">Log in</button>
            <Button text="Sign Up" />
          </div> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
