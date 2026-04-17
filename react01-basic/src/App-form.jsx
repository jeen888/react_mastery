// import { map, filter, reduce, go, pipe, L, C } from "fxjs";
// import * as _ from "fxjs"; // too heavy
// import { go, map } from "fxjs";
import { useState } from "react";
// import FrontComp from "./components/FrontComp";
// import BackComp from "./components/BackComp";
// import hereLogo from './assets/hero.png';

function WriteForm(props) {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // const { gubun, title } = e.target;
  //   // console.log(gubun.value, title.value);
  //   // props.writeAction(gubun.value, title.value); 
  //   props.writeAction(e);
  // }
  return <>
    <form onSubmit={props.writeAction}>
      <select name='gubun'>
        <option value='front'>프론트엔드</option>
        <option value='back'>백엔드</option>
      </select> 
      <input type='text' name='title' placeholder='제목을 입력하세요.' />
      <button type='submit'>등록</button>
    </form>
  </>
}
function App() {
  const [message, setMessage] = useState('폼값 검증 진행 중...');
  const writeAction = e => {
    e.preventDefault();
    const { gubun, title } = e.target;
    if (title.value.length < 5) {
      setMessage('제목은 5글자 이상 입력하세요.');
    } else {
      setMessage(`등록된 글은 ${gubun.value} - ${title.value} 입니다.`);
    }
  }
  return <>
    <div>
      <h2>React-Form</h2>
      <WriteForm writeAction={writeAction} />
      <p>{message}</p>
    </div>
  </>
}

export default App;