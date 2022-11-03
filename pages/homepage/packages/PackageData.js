import React from "react";
import PackageList from "./PackagesList";

function PackageListData() {
    const Cdata = [
        {
            pkgimg: "assets/images/pkg1.png",
            pkgnme: "Normal Packages",
            servicenme1: "Lotus Cleanup",
            servicenme2: "Full Arms (Chocolate Wax)",
            servicenme3: "Full Legs (Chocolate Wax)",
            servicenme4: "VLCC Detan Pedicure ",
            servicenme5: "Eyebrow",
            servicenme6: "Upper Lip",
        },
    ];
    return (
        <>
            <div className="container pkg-bann">
                <div className="row pkgs-list">
                    {Cdata.map((val, i) => {
                        return (
                            <PackageList key={i}
                                pkgimg={val.pkgimg}
                                pkgnme={val.pkgnme}
                                servicenme1={val.servicenme1}
                                servicenme2={val.servicenme2}
                                servicenme3={val.servicenme3}
                                servicenme4={val.servicenme4}
                                servicenme5={val.servicenme5} />
                        );
                    })}
                </div>
                <div className="pkg-l-more">
                   <p>hello</p>
                </div>
            </div>
        </>
    );

}
export default PackageListData