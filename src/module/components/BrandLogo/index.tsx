type BrandLogoProps = {
  name: string;
  imgUrl: string;
};

function BrandLogo({ imgUrl, name }: BrandLogoProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-light-gray md:h-[100px] md:w-[100px] h-42 w-[42px] rounded-full flex items-center justify-center">
        <div className="md:max-h-42 md:max-w-[42px] max-h-18 max-w-[18px]">
          <img src={imgUrl} alt={name} className="h-full object-cover" />
        </div>
      </div>
      <h3 className="text-nowrap text-x-small md:text-logo-title">{name}</h3>
    </div>
  );
}

export default BrandLogo;
