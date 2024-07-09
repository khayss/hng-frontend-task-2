import { ProductNavbar } from "../../components/NavBar";
import products from "../../../assets/data/products.json";
import { ProductCard } from "../../components/Cards";
import { Button } from "../../components/Button/Button";

function Products() {
  return (
    <div className="w-ful flex justify-center pb-96 px-16 md:px-32 lg:px-48 xl:px-0">
      <div className="max-w-[1241px] w-full">
        <div className="w-full flex flex-col items-center gap-26 pt-36">
          <ProductNavbar />
          <div className="flex flex-col items-center gap-26">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[21px] gap-y-20 place-items-center">
              {products.map((product) => (
                <ProductCard
                  id={product.id}
                  brand={product.brandCategory}
                  imgUrl={product.images[0]}
                  price={product.price}
                  productName={product.name}
                  quantitySold={product.amountSold}
                  rating={product.rating}
                  discountPercentage={product.discountPercentage}
                  key={product.id}
                  favorite={product.favorite}
                  inCart={product.inCart}
                />
              ))}
            </div>
            <div className="w-full flex items-center justify-center">
              <Button text="View More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
