import { Link } from "react-router-dom";
import { Favorite, HalfStar, Like, XIcon } from "../../svgs/Icons";
import { formatNumberWithCommas } from "../../utils/helper";
import { Product } from "../../../interfaces/product";

type ProductCardProps = {
  brand: string;
  discountPercentage?: number;
  favorite?: boolean;
  imgUrl: string;
  inCart?: boolean;
  productName: string;
  rating: number;
  quantitySold: number;
  price: number;
  id: number;
};

export function ProductCard({
  brand,
  discountPercentage = 0,
  favorite,
  imgUrl,
  inCart,
  productName,
  rating,
  quantitySold,
  price,
  id,
}: ProductCardProps) {
  return (
    <div className="max-w-[400px] font-roboto font-medium w-full rounded-lg overflow-hidden">
      <Link to={`/product/${id}`}>
        <div className="w-full h-[300px] bg-soft-gray relative">
          <img
            src={imgUrl}
            alt={productName}
            className="object-contain object-center h-full w-full"
          />
          <div className="absolute h-40 top-5 right-5">
            {favorite ? <Favorite /> : <Like />}
          </div>
        </div>
      </Link>
      <div className="text-product-heading py-8 flex flex-col items-start gap-8">
        <div>
          <small className="text-small">{brand}</small>
          <Link to={`/product/${id}`}>
            <h4>{productName}</h4>
          </Link>
        </div>
        <div className="flex gap-4 text-small">
          <div className="h-16">
            <HalfStar />
          </div>
          <small>{`${rating} (${quantitySold})`}</small>
        </div>
        <div className="flex justify-between items-center w-full">
          <div className="flex justify-between gap-[15px]">
            <h4 className={`${discountPercentage > 0 && "text-main"}`}>
              #{formatNumberWithCommas(price)}
            </h4>
            {discountPercentage > 0 && (
              <h4 className="text-gray line-through">
                #
                {formatNumberWithCommas(
                  price - (price * discountPercentage) / 100
                )}
              </h4>
            )}
          </div>
          <button
            className={`h-34 py-8 px-16 rounded-lg font-semibold text-text-main ${
              inCart ? "bg-soft-red text-red" : "bg-soft-blue text-main"
            }`}
          >
            {inCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

type CartCardProps = {
  cartItem: Product;
};

export function CartCard({
  cartItem: { id, name, color, size, price, images },
}: CartCardProps) {
  return (
    <div className="flex w-full gap-20 items-center justify-between relative py-20 md:p-20">
      <div className="max-h-[120px] min-h-100 w-[100px] bg-light-gray rounded-lg flex items-center justify-center">
        <img
          src={images[0]}
          alt=""
          className="h-full max-h-[80px] object-contain w-full object-center"
        />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-20">
        <div className="flex flex-col items-start justify-center gap-8">
          <div className="text-lg font-medium">
            <Link to={`/product/${id}`}>
              <h4>{name}</h4>
            </Link>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex gap-4 items-center">
              <div
                style={{ backgroundColor: color?.color || "#FFFFFF" }}
                className="h-24 w-[24px] rounded-md"
              ></div>
              <div>
                <small className="text-small text-gray capitalize">
                  {color ? color.text : "Black"}
                </small>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <p className="text-text-main">Size</p>
              <p className="text-text-main text-gray">{size || 32}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-16">
          <div className="h-34">
            <form
              action=""
              className="h-full flex items-center justify-between gap-16 text-logo-title px-16 bg-soft-gray"
            >
              <button className="w-[16px] text-center">-</button>
              <input
                type="number"
                value={2}
                className="h-26 w-[26px] text-text-main text-center bg-soft-blue"
              />
              <button className="w-[16px] text-center">+</button>
            </form>
          </div>
          <div>
            <p className="text-product-heading">
              {formatNumberWithCommas(price)}
            </p>
          </div>
        </div>
      </div>

      <div className="h-24 md:right-8 md:absolute md:top-2">
        <XIcon />
      </div>
    </div>
  );
}
