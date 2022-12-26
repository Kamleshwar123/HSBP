// import React from "react";
// import SalonService from "./salonService";
// import Link from "next/link";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// function SalonServiceData() {
//   const Cdata = [
//     {
//       pkgimg: "assets/images/pkg1.png",
//       pkgnme: "Normal Packages",
//       servicenme1: "Lotus Cleanup",
//       servicenme2: "Full Arms (Chocolate Wax)",
//       servicenme3: "Full Legs (Chocolate Wax)",
//       servicenme4: "VLCC Detan Pedicure ",
//       servicenme5: "Eyebrow",
//       servicenme6: "Upper Lip",
//     },
//     {
//       pkgimg: "assets/images/pkg1.png",
//       pkgnme: "Normal Packages",
//       servicenme1: "Lotus Cleanup",
//       servicenme2: "Full Arms (Chocolate Wax)",
//       servicenme3: "Full Legs (Chocolate Wax)",
//       servicenme4: "VLCC Detan Pedicure ",
//       servicenme5: "Eyebrow",
//       servicenme6: "Upper Lip",
//     },
//     {
//       pkgimg: "assets/images/pkg1.png",
//       pkgnme: "Normal Packages",
//       servicenme1: "Lotus Cleanup",
//       servicenme2: "Full Arms (Chocolate Wax)",
//       servicenme3: "Full Legs (Chocolate Wax)",
//       servicenme4: "VLCC Detan Pedicure ",
//       servicenme5: "Eyebrow",
//       servicenme6: "Upper Lip",
//     },
//     {
//       pkgimg: "assets/images/pkg1.png",
//       pkgnme: "Normal Packages",
//       servicenme1: "Lotus Cleanup",
//       servicenme2: "Full Arms (Chocolate Wax)",
//       servicenme3: "Full Legs (Chocolate Wax)",
//       servicenme4: "VLCC Detan Pedicure ",
//       servicenme5: "Eyebrow",
//       servicenme6: "Upper Lip",
//     },
//     {
//       pkgimg: "assets/images/pkg1.png",
//       pkgnme: "Normal Packages",
//       servicenme1: "Lotus Cleanup",
//       servicenme2: "Full Arms (Chocolate Wax)",
//       servicenme3: "Full Legs (Chocolate Wax)",
//       servicenme4: "VLCC Detan Pedicure ",
//       servicenme5: "Eyebrow",
//       servicenme6: "Upper Lip",
//     },
//     {
//       pkgimg: "assets/images/pkg1.png",
//       pkgnme: "Normal Packages",
//       servicenme1: "Lotus Cleanup",
//       servicenme2: "Full Arms (Chocolate Wax)",
//       servicenme3: "Full Legs (Chocolate Wax)",
//       servicenme4: "VLCC Detan Pedicure ",
//       servicenme5: "Eyebrow",
//       servicenme6: "Upper Lip",
//     },
//   ];
//   return (
//     <>
//       <section className="packages-list">
//         <div className="container pkg-bann">
//           <div className="row pkgs-list">
//             {Cdata.map((val, i) => {
//               return (
//                 <SalonService
//                   key={i}
//                   pkgimg={val.pkgimg}
//                   pkgnme={val.pkgnme}
//                   servicenme1={val.servicenme1}
//                   servicenme2={val.servicenme2}
//                   servicenme3={val.servicenme3}
//                   servicenme4={val.servicenme4}
//                   servicenme5={val.servicenme5}
//                 />
//               );
//             })}
//           </div>
//           <div className="pkg-l-more">
//             <Link href={"/"} className="book-btn1 pkg-book-btn">
//               View ALL <FontAwesomeIcon icon={faArrowRight} />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// export default SalonServiceData;
