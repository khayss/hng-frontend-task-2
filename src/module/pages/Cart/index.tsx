import products from "../../../assets/data/products.json";
import { Product } from "../../../interfaces/product";
import { Button } from "../../components/Button/Button";
import { CartCard } from "../../components/Cards";

function Cart() {
  const cart = products.filter((product) => product.inCart);
  return (
    <div className="w-full px-[7%] flex flex-col pt-20 pb-40 items-center">
      <div className="w-full max-w-[850px] flex flex-col items-center gap-20">
        <div className="w-full">
          <ul className="flex  justify-between text-text-main overflow-x-scroll text-nowrap">
            <li className="px-16 text-center">My cart</li>
            <li className="px-16 text-center">Personal Information</li>
            <li className="px-16 text-center">Delivery Option</li>
            <li className="px-16 text-center">Confirm Order</li>
            <li className="px-16 text-center">Make Payment</li>
          </ul>
        </div>
        <div className="w-full">
          {cart.map((item) => (
            <CartCard cartItem={item as Product} key={item.id} />
          ))}
        </div>
        <div className="mt-auto flex justify-between w-full">
          <div className="flex flex-col items-start gap-8">
            <p className="text-body-14 text-gray">Total Price</p>
            <h4 className="text-product-heading">₦ 37,000.00</h4>
          </div>
          <div className="flex items-center gap-8">
            <Button text="Cancel" bg="bg-white" textColor="text-black" />
            <Button text=" Proceed" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
