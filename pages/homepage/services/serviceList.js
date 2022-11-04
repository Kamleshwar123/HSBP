import ServiceData from "./serviceData";
const ServiceList = () => {
    const Serdata = [
        {
            serviceimg: "assets/images/service-1.webp",
            servicenme: "Body Care",
            servicdisc: "Relax Detox and Rajuvenate"
        },
        {
            serviceimg: "assets/images/service-2.webp",
            servicenme: "Skin Care",
            servicdisc: "Pamper Your Skin and Unleash a Beautiful You !"
        },
        {
            serviceimg: "assets/images/service-3.webp",
            servicenme: "Hair Care",
            servicdisc: "From Couture Cut revitalising Treatment we've got it all !"
        },
    ];
    const SerSecdata = [
        {
            serviceimg: "assets/images/makeup.webp",
            servicenme: "Makeup Services",
            servicdisc: "Relax Detox and Rajuvenate"
        },
        {
            serviceimg: "assets/images/mehandi-art.webp",
            servicenme: "Mehndi Art Services",
            servicdisc: "Relax Detox and Rajuvenate"
        },
    ]
    return (
        <>
        <section className="service-list">
            <div className="container service-list-bg">
            <div className="row">
                {Serdata.map((val, i) => {
                    return (
                        <ServiceData key={i}
                            serviceimg={val.serviceimg}
                            servicenme={val.servicenme}
                            servicdisc={val.servicdisc} />

                    );
                })}
            </div>
            <div className="row justify-content-center">
                {SerSecdata.map((val, i) => {
                    return (
                        <ServiceData key={i}
                            serviceimg={val.serviceimg}
                            servicenme={val.servicenme}
                            servicdisc={val.servicdisc} />

                    );
                })}
            </div>
            </div>
            </section>
        </>
    )
}
export default ServiceList