import { Button } from "../Button/Button";

export function Hero() {
  return (
    <div className="bg-[--hero-bg]">
      <div>
        <h1>Step up Your Game</h1>
      </div>
      <div>
        <p>
          Shop now for unbeatable comfort, top-notch designs, and top-tier
          performance from your favorite brands. Elevate your sneaker game with
          us!
        </p>
      </div>
      <div>
        <form>
          <button>Search</button>
          <input placeholder="Search" />
        </form>
      </div>
      <div>
        <Button text="Shop Now" />
      </div>
    </div>
  );
}
