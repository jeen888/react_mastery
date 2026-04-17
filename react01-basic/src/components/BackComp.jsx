// import { map, filter, reduce, go, pipe, L, C } from "fxjs";
// import * as _ from "fxjs"; // too heavy
// import { go, map } from "fxjs";

const BackComp = ({propData2, baTitle, onSetMode}) => {
  // const liRows=[];
  // let keyCnt=0;
  // for (let row of propData2) {
  //   liRows.push(<li key={keyCnt++}>{row}</li>);
  // }
  // const liRows = go(
  //   propData2,
  //   map((row, i) => <li key={i}>{row}</li>)
  // );
  const liRows = propData2.map((row, i) => <li key={i}>{row}</li>);
  const myEventHandler = e => {
    e.preventDefault(); // a 태그의 기본 동작인 페이지 이동 방지
    onSetMode('back'); // 부모 컴포넌트에서 전달된 setMode 함수 호출하여 mode 상태 변경
  }
  return (<>
    <li><a href='#' onClick={myEventHandler}>{baTitle}</a></li>
    {/* <li><a href='javascript:{onMyEvent}'>{baTitle}</a></li><!--error--> */}
    <ul>
      <li>{liRows}</li>
    </ul> 
  </>)
}

export default BackComp;