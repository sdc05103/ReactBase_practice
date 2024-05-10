import logo from './logo.svg';
// import './App.css';
// import HelloWorld from './components/HelloWorld';
import CaptionImage from './components/CaptionImage';
import BlinkComponent from './components/Blinkcomponent';
import CBlinkComponent from './components/BlinkcomponentClass';
import CountComponent from './components/CountComponent';
import {useState} from 'react';
import FocusInputButton from './components/RegisterInputButton';
import PrimeCalculator from './components/PrimeCalculator';
import InputFieldWithColorPicker from './components/TodoApp';
import TodoApp from './components/Todo/TodoApp';



// function App() {
//   const [showCount, setShowCount] = useState(true);

//   return (
//     <div className="App">
//       <button onClick={e=>{
//         setShowCount(!showCount);
//       }}>버튼</button>
//       {showCount ? <CountComponent /> : null}
//       <FocusInputButton />

//    <BlinkComponent text="hello"/>
//     </div>
//     //showCount가 false가 되면 기존의 CountComponent가 호출되다가 null로 변해서 return을 실행하며 컴포넌트가 종료된다. useEffect가 완전히 종료되기 위해서는 가지고 있는 메모리를 반환해야하는데 이는 return값 실행으로 반환 
//   );
// }


function App(){
  return (
    <div>
      {/* <PrimeCalculator text={4} /> */}
      {/* <CountComponent /> */}
      {/* <InputFieldWithColorPicker/> */}
      <TodoApp/>
    </div>
  )
}


export default App;
