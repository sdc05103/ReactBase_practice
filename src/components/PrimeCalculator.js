import React, {useState, useMemo} from 'react';

function calculatePrimes(limit){
    console.log(`limit: ${limit} 에 대한 소수 계산`)
    const primes = [];
    for(let i =2; i<=limit; i++){
        let isPrime = true;
        for(let j = 2; j < i; j++){
            if(i%j == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primes.push(i);
        }

        console.log("소수 연산 완료");
    }
    return primes;
}

// export default function PrimeCalculator(props){
//     const [limit, setLimit] = useState(10);
//     const [count, setCount] = useState(0);

//     const primes = calculatePrimes(limit);
//     console.log(typeof primes);

//     const addCount = () =>{
//                 setCount(count+1);
        
//     }

//     return(
//         <div>
//                 {count}
//                 <button onClick ={addCount}>카운트 증가</button>
//             <input type="number"
//             value = {limit}
//             onChange ={(e) => setLimit(Number(e.target.value))}
//             />
//             <p>계산된 소수: {primes.join(', ')}</p>
//         </div>
//     );
// }

// use Memo 사용

export default function PrimeCalculator(props){
    const [limit, setLimit] = useState(10);
    const [count, setCount] = useState(0);

    const primes = useMemo(() => calculatePrimes(limit), [limit]);
    // limit이 바뀔 때만 다시 계산할꺼야 => 성능 최적화 

    const addCount = () =>{
        setCount(count+1);

    }

    return(
        <div>
            {count}
            <button onClick ={addCount}>카운트 증가</button>
            <input 
            type ="number"
            value = {limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            />
            <p>계산된 소수: {primes.join(', ')}</p>
        </div>
    )
}