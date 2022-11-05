import SalonHead from "./salonHead";
import SalonList from "./salonList";
import SalonSearch from './salonSearch';
const Salon = () => {
    return (
        <><SalonHead />
            <section className="salon-section">
                <div className="container">
                    <div className="salon-section-bg">
                    <SalonSearch />
                        <SalonList />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Salon