import { Hero } from "../../components/Hero";
import brands from "../../../assets/data/brands.json";
// import productCategories from "../../../assets/data/productCategories.json";
import { Button } from "../../components/Button/Button";
import { Product } from "../../../interfaces/product";
import { ProductCard } from "../../components/Cards";
import products from "../../../assets/data/products.json";
import BrandLogo from "../../components/BrandLogo";

function Home() {
  const productToUse = products.sort(() => Math.random() - 0.5).slice(0, 14);
  return (
    <div className="w-full flex flex-col items-center font-roboto pb-52">
      <Hero />
      <div className="w-full h-[215px] flex flex-col justify-evenly items-center">
        <div className="w-full flex items-center justify-between gap-50 overflow-x-scroll">
          {brands.map((brand, index) => (
            <BrandLogo key={index} imgUrl={brand.logo} name={brand.name} />
          ))}
        </div>
        {/* <div className="w-full flex justify-center gap-16 items-center overflow-x-scroll h-[43px] text-nowrap">
          {productCategories.map((category, index) => (
            <Button
              text={category}
              key={index}
              bg="bg-light-gray"
              textColor="text-jet"
            />
          ))}
        </div> */}
      </div>
      <div className="w-full px-[6.88%]">
        <div className="w-full flex flex-col items-center max-w-[1242px] gap-80">
          <div className="w-full flex flex-col gap-20 items-center">
            <h1 className="text-big font-medium text-center">New Arrivals</h1>
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-[21px] place-items-center">
              <div className="col-span-1 lg:col-span-1 xl:col-span-2 rounded-lg overflow-hidden self-stretch">
                <img
                  src="images/home/new-arrivals-img.jpg"
                  alt="new arrivals"
                  className="w-full h-full object-cover"
                />
              </div>
              {productToUse.slice(0, 2).map((product) => (
                <ProductCard
                  id={product.id}
                  key={product.id}
                  brand={product.brand}
                  imgUrl={product.images[0]}
                  price={product.price}
                  productName={product.name}
                  quantitySold={product.amountSold}
                  rating={product.rating}
                  discountPercentage={product.discountPercentage}
                />
              ))}
            </div>
            <div className="w-full">
              <ThreeCards items={productToUse.slice(2, 5)} />
            </div>
          </div>
          <div className="flex w-full flex-col items-center gap-20">
            <h1 className="text-big font-medium text-center">
              Our Special Offers
            </h1>
            <ThreeCards items={productToUse.slice(5, 8)} />
          </div>
          <div className="flex w-full flex-col items-center gap-20">
            <h1 className="text-big font-medium text-center">
              Featured Sneakers
            </h1>
            <ThreeCards items={productToUse.slice(8, 14)} />
          </div>
          <div>
            <Button text="View All Sneakers" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

function ThreeCards({ items }: { items: Product[] }) {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-20 place-items-center">
      {items.map((item) => (
        <ProductCard
          id={item.id}
          key={item.id}
          brand={item.brand}
          imgUrl={item.images[0]}
          price={item.price}
          productName={item.name}
          quantitySold={item.amountSold}
          rating={item.rating}
          discountPercentage={item.discountPercentage}
        />
      ))}
    </div>
  );
}
