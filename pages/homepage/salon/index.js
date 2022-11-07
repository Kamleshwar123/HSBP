import SalonHead from "./salonHead";
import SalonSearch from './salonSearch';
import SalonListData from "./salonData";
import Link from "next/link";
const Salon = () => {
    return (
        <><SalonHead />
            <section className="salon-section">
                <div className="container">
                    <div className="salon-section-bg">
                        <SalonSearch />
                        <div className='salon-header'>
                            <div className="col-6">
                                <p>East Delhi (10 Salons)</p>
                            </div>
                            <div className="col-6 text-end">
                                <Link href={'/'}>
                                    View All
                                </Link>
                            </div>
                        </div>
                        <div className='row'>
                            <SalonListData />
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Salon