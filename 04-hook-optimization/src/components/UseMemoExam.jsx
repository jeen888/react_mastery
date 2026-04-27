import { useState, useMemo } from "react";

const isPrime = (num) => {
  for (let exCost=1; exCost<1234567890; exCost++) {}
  if (num <=1) return false;
  for (let i=2; i<=Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

export default function UseMemoExam() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('');

  // const checkPrime = isPrime(number);

  const checkPrime = useMemo(() => {
    return isPrime(number);
  }, [number]);

  return <>
    <h2>useMemo Exam</h2>
    <input type='number' value={number} placeholder="소수 판단할 숫자입력"
      onChange={e => setNumber(e.target.value)} />
    <p>정수 {number}는 {checkPrime ? '소수 O' : '소수 X'}</p>
    <input type='text' placeholder='이름 입력(소수 판단과 무관)' value={text} 
      onChange={e => setText(e.target.value)} />
  </>
}