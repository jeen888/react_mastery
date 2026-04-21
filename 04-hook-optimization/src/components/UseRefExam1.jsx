import {useState, useRef} from 'react'

export default function UseRefExam1() {
  const [stateNum, setStateNum] = useState(0);
  const refNum = useRef(0);
  let myNum = 0;

  const plusState = () => {
    setStateNum(stateNum + 1);
    console.log('State 증가', stateNum);
  }

  const plusRef = () => {
    refNum.current = refNum.current + 1;
    console.log('Ref 증가', refNum.current);
    // setRefDisplay(refNum.current);
  }

  const plusMyNum = () => {
    // myNum = myNum + 1;  // error
    console.log('myNum 증가', ++myNum);
  }

  return <>
    <h2>useRef Exam1</h2>
    <p>State: {stateNum}</p>
    <p>Ref: {refNum.current}</p>
    <p>myNum: {myNum}</p>
    <button onClick={plusState}>State 증가</button>
    <button onClick={plusRef}>Ref 증가</button>
    <button onClick={plusMyNum}>myNum 증가</button>
  </>
}