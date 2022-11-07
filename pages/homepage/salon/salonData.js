import React from "react";
import SalonList from "./salonList";
import Link from "next/link";
function SalonListData() {
    const Cdata = [
        {
            SalonImg: "/assets/images/salon1.webp",
            salonName: "HSBP Salon",
            salonAdd: "Rohini",
            SalonRating: "4.5",
            SalonReview: "356 Reviews",
        },
        {
            SalonImg: "/assets/images/salon2.webp",
            salonName: "HSBP Salon",
            salonAdd: "Ghaziabad",
            SalonRating: "4.5",
            SalonReview: "356 Reviews",
        },
        {
            SalonImg: "/assets/images/salon3.webp",
            salonName: "HSBP Salon",
            salonAdd: "Noida",
            SalonRating: "4.5",
            SalonReview: "356 Reviews",
        },
        {
            SalonImg: "/assets/images/salon4.webp",
            salonName: "HSBP Salon",
            salonAdd: "Delhi",
            SalonRating: "4.5",
            SalonReview: "356 Reviews",
        },

        
    ];
    return (
        <>

            {Cdata.map((val, i) => {
                return (

                        <SalonList key={i}
                            SalonImg={val.SalonImg}
                            salonName={val.salonName}
                            salonAdd={val.salonAdd}
                            SalonRating={val.SalonRating}
                            SalonReview={val.SalonReview}
                        />

                );
            })}

        </>
    );

}
export default SalonListData