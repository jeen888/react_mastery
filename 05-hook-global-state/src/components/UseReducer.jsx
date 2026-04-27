import { useReducer, useState } from "react";

const bankReducer=(bankState, bankAction)=>{
  console.log("리듀서 실행", bankState, bankAction);
  switch(bankAction.mode) {
    case "deposit":
      return bankState + bankAction.amount;
    case "withdraw":
      return bankState - bankAction.amount;
    default:
      return bankState;
  }
}

const UseRecucer = () => {
  const [inputMoney, setInputMoney] = useState(0);
  const [balance, bankDispatch] = useReducer(bankReducer, 0);

  return <>
    <h2>useReducer 은행</h2>
    <p>잔액: {balance}</p>
    <input type="number" value={inputMoney} step={1000} onChange={(e)=>setInputMoney(Number(e.target.value))} />
    <button onClick={()=>bankDispatch({mode: "deposit", amount: inputMoney})}>입금</button>
    <button onClick={()=>bankDispatch({mode: "withdraw", amount: inputMoney})}>출금</button>
  </>
}

export default UseRecucer;