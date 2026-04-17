// import { map, filter, reduce, go, pipe, L, C } from "fxjs";
// import * as _ from "fxjs"; // too heavy
// import { go, map } from "fxjs";

// let FrontComp = function(props) {
export default function FrontComp(props) {
  // console.log(props);
  const liRows = props.propData1.map((item, i) => <li key={i}>{item}</li>);
  // const liRows=[];
  // for (let i=0; i<props.propData1.length; i++) {
  //   liRows.push(<li key={i}>{props.propData1[i]}</li>); // 중복되지 않는 key prop 추가
  // }
  const myEventHandler = e => {
    e.preventDefault(); // a 태그의 기본 동작인 페이지 이동 방지
    // props.onMyEvent(); // 부모 컴포넌트에서 전달된 이벤트 핸들러 호출
    props.onSetMode('front'); // 부모 컴포넌트에서 전달된 setMode 함수 호출하여 mode 상태 변경
  }
  return (<>
    {/* <li><a href='#' onClick={()=>{props.onMyEvent();}}>{props.frTitle}</a></li> */}
    <li><a href='/' onClick={myEventHandler}>{props.frTitle}</a></li>
    <ul>
      {liRows}
    </ul>
  </>)  
}

// export default FrontComp;