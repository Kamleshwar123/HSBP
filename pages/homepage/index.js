import BannerSlider from './banner';
import PlatForms from './platforms';
import Packages from './packages';
import Services from './services';
import BookAppointment from './bookAppointment';
import HomeSalon from './salon';

const HomePage = () => {
  return (
      <>
      <BannerSlider />
      <PlatForms />
      <Packages />
      <Services />
      <BookAppointment />
      <HomeSalon />
      </>
  )
}

export default HomePage