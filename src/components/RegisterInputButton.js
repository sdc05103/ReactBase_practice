import React, {useRef} from 'react';

export default function FocusInputButton(){
    // useRef 훅을 사용해 input 요소에 대한 참조를 생성 
    const inputRef = useRef();

    const focusInput = () =>{
        console.log(inputRef.current)
        inputRef.current.focus();   // 참조하고 있는 곳으로 들어가서 포커스?
    };

    return (
        <div>
            <button onClick = {focusInput} > 입력하러 가기</button>

            <div style={{height:2000}}></div>

            <input ref={inputRef} type="number" />

            <div style ={{height:2000}}></div>
        </div>
    )


}