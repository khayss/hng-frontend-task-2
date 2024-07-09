import { useParams } from "react-router-dom";
import products from "../../../assets/data/products.json";
import { HalfStar, Like } from "../../svgs/Icons";
import { Button } from "../../components/Button/Button";
import { formatNumberWithCommas } from "../../utils/helper";
import { ProductCard } from "../../components/Cards";

function Product() {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  return (
    <div className="w-full px-[7%] flex flex-col items-center gap-50 py-20">
      <div className="w-full flex flex-col items-center md:flex-row md:gap-20 md:items-start">
        <div className="w-full md:w-1/2">
          <div className="w-full whitespace-nowrap overflow-hidden md:overflow-visible md:whitespace-normal md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-16 xl:gap-20 relative rounded-xl bg-soft-gray md:bg-transparent">
            {product?.images.map((image, index) => (
              <div
                className={`h-[300px] w-full inline-block bg-soft-gray rounded-xl ${
                  index === 0 ? "lg:col-span-3" : ""
                }`}
                key={index}
              >
                <img
                  src={image}
                  alt=""
                  className="h-full w-full object-contain object-center"
                />
              </div>
            ))}
            <div className="absolute w-full bottom-5 z-50 flex justify-center items-center gap-8 md:hidden">
              {product?.images.map((_, index) => (
                <div
                  className={`h-8 w-[8px] ${
                    index === 0 ? "bg-main" : "bg-light-gray"
                  } rounded-full`}
                  key={index}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-16 items-start">
          <div className="text-small">
            <small>{product?.brandCategory}</small>
          </div>
          <div className="w-full  flex flex-col items-start gap-8">
            <div className="w-full flex justify-between">
              <h3 className="text-2xl font-semibold">{product?.name}</h3>
              <div className="h-30 w-[30px]">
                <Like />
              </div>
            </div>
            <div>
              <h5 className="text-text-main">{`₦ ${formatNumberWithCommas(
                product?.price || 0
              )}`}</h5>
            </div>
          </div>
          <div className="w-full">
            <small className="text-small text-gray flex gap-8 items-center">
              <span>{`${product?.amountSold} sold`}</span>
              <span className="h-16">
                <HalfStar />
              </span>
              <span>{`${product?.rating}(${product?.numReviews} reviews)`}</span>
            </small>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Description</h4>
            <p className="text-text-main text-gray">{product?.description}</p>
          </div>
          <div className="w-full">
            <h4 className="text-2xl font-semibold">Size</h4>
            <div className="flex gap-8 w-full items-center justify-start">
              {product?.sizes.map((size, index) => (
                <input
                  value={size}
                  key={index}
                  className="h-26 w-[26px] bg-soft-gray rounded text-center"
                />
              ))}
            </div>
          </div>
          <div className="w-full">
            <h4 className="text-2xl font-semibold">Colors</h4>
            <div className="flex gap-8 w-full items-center justify-start">
              {product?.colors.map((color, index) => (
                <input
                  type=""
                  value=""
                  key={index}
                  className="h-26 w-[26px] border-none rounded"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-2xl font-semibold">Quantity</h4>
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
          </div>
          <div className="w-full flex flex-col gap-16 md:flex-row md:items-end md:justify-between">
            <div>
              <small className="text-small text-gray">Total Price</small>
              <h4 className="text-lg font-medium">{`₦ ${formatNumberWithCommas(
                product?.price || 0
              )}`}</h4>
            </div>
            <div className="w-full flex justify-between items-center gap-16 md:justify-end">
              <Button
                text="Add to Cart"
                bg="bg-soft-blue"
                textColor="text-main"
                additionalClasses="w-1/2 md:w-auto"
              />
              <Button text="Checkout" additionalClasses="w-1/2 md:w-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center">
        <h1 className="text-big">{`More from ${product?.brand}`}</h1>
        <div className="w-full py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 place-items-center">
          {products
            .filter((item) => item.brand === product?.brand)
            .map((eachProduct) => (
              <ProductCard
                id={eachProduct.id}
                key={eachProduct.id}
                brand={eachProduct.brand}
                imgUrl={eachProduct.images[0]}
                price={eachProduct.price}
                productName={eachProduct.name}
                quantitySold={eachProduct.amountSold}
                rating={eachProduct.rating}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
