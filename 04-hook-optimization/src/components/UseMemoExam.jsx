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
    <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} />
    <p>{checkPrime ? '소수입니다.' : '소수가 아닙니다.'}</p>
    <input type='text' placeholder='이름 입력'value={text} onChange={(e) => setText(e.target.value)} />
  </>
}