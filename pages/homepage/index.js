import BannerSlider from "./banner";
import PlatForms from "./platforms";
// import Packages from "./packages";
// import Services from "./services";
import SalonPackage from "./salonPackage/salonPackage";
import SalonService from "./salonService/salonService";
import BookAppointment from "./bookAppointment";
import HomeSalon from "./salon";
import Products from "./product";
import Franchises from "./franchises";
import Institute from "./institute";
import Testimonials from "./testimonials";
import HsbpApp from "./app";

const HomePage = () => {
  return (
    <>
      <BannerSlider />
      <PlatForms />
      {/* <Packages />
      <Services /> */}
      <SalonPackage />
      <SalonService />
      <BookAppointment />
      <HomeSalon />
      <Products />
      <Franchises />
      <Institute />
      <Testimonials />
      <HsbpApp />
    </>
  );
};

export default HomePage;
