import React, { useEffect, useState } from 'react'


export default function BlinkComponent({text}) {
    const [showText, setShowText] = useState(true);
    // const X = useState(초기값)
    // X[0]: State 객체 자체, X[1]: state를 변경할 수 있는 함수 

    // useEffect(()=>{
    // const timeoutId = setInterval(()=>{
    // setShowText(showText=>!showText);
    // }, 1000);

    // // const sample = setTimeout(()=>{
    // //     console.log('10초 후 실행')
    // // }, 10000);

    // return () => {clearInterval(timeoutId)}
    // }, []
    // )

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