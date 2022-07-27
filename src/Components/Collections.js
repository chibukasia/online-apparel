import React, { useEffect } from "react";
import Item from "./Item";

function Collections({ apparels, setApparels, search, category, price, gender}) {
  //fetch apparels

  useEffect(() => {
    fetch("http://localhost:3000/apparells")
      .then((res) => res.json())
      .then((data) => {
        setApparels(data);
        //console.log(data)
      });
  }, []);
  const searchList = apparels
    .filter((apparel) =>
      apparel.apparel_name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((apparel) => {
      if (category === "All") return true;
      return apparel.category === category;
    })
    .filter(apparel=>apparel.price <= price)
    .filter(apparel=>{
        if (gender === 'all') return true
        return apparel.gender === gender;
    })
  const apparaelsList = searchList.map((apparel) => {
    //console.log(apparel.image)
    return <Item key={apparel.id} apparel={apparel} />;
  });

  return <div className="flex-container">{apparaelsList}</div>;
}

export default Collections;
