import { Favorite, HalfStar, Like } from "../../svgs/Icons";
import { formatNumberWithCommas } from "../../utils/helper";

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
}: ProductCardProps) {
  return (
    <div className="max-w-[400px] font-roboto font-medium w-full rounded-lg overflow-hidden">
      <div className="w-full h-[300px] bg-soft-gray relative">
        <img
          src={imgUrl}
          alt={productName}
          className="object-contain object-center h-full w-full"
        />
        <div className="absolute h-40 top-5 right-5">{favorite ? <Favorite /> : <Like />}</div>
      </div>
      <div className="text-product-heading py-8 flex flex-col items-start gap-8">
        <div>
          <small className="text-small">{brand}</small>
          <h4>{productName}</h4>
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
            { inCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}


