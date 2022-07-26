import React, { useEffect } from "react";
import Item from "./Item";

function Collections ({apparels, setApparels}){

    //fetch apparels

    useEffect (()=>{
        fetch('http://localhost:3000/apparells')
        .then(res=>res.json())
        .then(data=>{
            setApparels(data)
            //console.log(data)
        })
    }, []);

    const apparaelsList = apparels.map(apparel=>{
        //console.log(apparel.image)
        return <Item key={apparel.id} apparel={apparel}/>
    })

    return (
        <div className='flex-container'>
            {apparaelsList}
        </div>
    )
}

export default Collections;