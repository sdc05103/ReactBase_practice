import React, {useState, useEffect, useCallback} from 'react'

// export default function CountComponent(){
//     const [count, setCount] = useState(10)

//     const addCount = () =>{
//         setCount(count+1);
//     }

//     return (
//         <div>
//             <div>{count}</div>
//             <button onClick = {addCount}>1 증가</button>
//         </div>
//     )
// }

export default function CountComponent() {
    const [count, setCount] = useState(0);
    const [value1, setValue1] = useState(true);

    const ChangeValue = () =>{
      setValue1((v) => !v);
    }

  
    // const addCount = () => {
    //   setCount(count + 1);
    // };

     const addCount = useCallback(()=>{
      setCount(count+1);
     },[]); // [] count를 넣냐 안넣는냐에 따라 달라진다. 
    
    useEffect(() => {
      console.log("데이터 받아오기! (이 함수는 한 번만 실행됩니다.)");
      return () => {
        console.log(
          "메모리를 잡아먹으면 리소스 해제하는 함수를 return 해주어야 합니다."
        );
      };
    }, []); //[]이면 한번 호출, dep의 값이 변경될 때마다 callback함수를 실행한다. useEffect를 마무리하기 위한 종료함수?
  
    useEffect(() => {
      console.log(`카운트가 증가할때마다 실행! \n -count: ${count}`);
    }, [count]);    //[count]이면 증가할때마다 호출
  
    return (
      <div>
        <div>
            <div>{value1}</div>
            <button onClick={ChangeValue}>State변경</button>
        </div>
        <div>{count}</div>
        <button onClick={addCount}>1 증가</button>
      </div>
    );
  }