import React, { useEffect, useState } from 'react'


export default function BlinkComponent({text}) {
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        console.log("hi");
        const intervalId = setInterval(()=>{
            console.log("호출");
            setShowText(!showText); // setShowText("");
        },3000);

        return () => {clearInterval(intervalId);}
    },[showText]);  //[showText]로 해줘야 


    return (
        <div>
            {showText? text : null}
        </div>
    )

}