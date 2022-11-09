import BannerSlider from './banner';
import PlatForms from './platforms';
import Packages from './packages';
import Services from './services';
import BookAppointment from './bookAppointment';
import HomeSalon from './salon';
import Products from './product';
import Franchises from './franchises';
import Institute from './institute'
import Testimonials from './testimonials';
import HsbpApp from './hsbpApp';

const HomePage = () => {
  return (
    <>
      <BannerSlider />
      <PlatForms />
      <Packages />
      <Services />
      <BookAppointment />
      <HomeSalon />
      <Products />
      <Franchises />
      <Institute />
      <Testimonials />
      <HsbpApp />
    </>
  )
}

export default HomePage