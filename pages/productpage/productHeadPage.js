import Image from "next/image";
import Banner from "../../public/assets/images/banner 1.webp";

const ProdHeadingPage = () => {
  return (
    <div className="services-head">
      <Image src={Banner} className="prod-page-banner" />
      <h1>Top Selling Product</h1>
      <p>
        Need ideas? See our list of top-selling products that are being loved by
        the masses.
      </p>
    </div>
  );
};
export default ProdHeadingPage;
