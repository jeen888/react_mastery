// import { map, filter, reduce, go, pipe, L, C } from "fxjs";
// import * as _ from "fxjs"; // too heavy
import { go, map } from "fxjs";

let FrontComp = function(props) {
  // console.log(props);
  const liRows = props.propData1.map((item, i) => <li key={i}>{item}</li>);
  // const liRows=[];
  // for (let i=0; i<props.propData1.length; i++) {
  //   liRows.push(<li key={i}>{props.propData1[i]}</li>); // 중복되지 않는 key prop 추가
  // }
  return (<>
    {/* <li><a href='#' onClick={()=>{props.onMyEvent();}}>{props.frTitle}</a></li> */}
    <li><a href='/' onClick={e=>{e.preventDefault();props.onMyEvent()}}>{props.frTitle}</a></li>
    <ul>
      {liRows}
    </ul>
  </>)  
}

const BackComp = ({propData2, baTitle, onMyEvent}) => {
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
  return (<>
    <li><a href='#' onClick={e=>{e.preventDefault();onMyEvent('test')}}>{baTitle}</a></li>
    {/* <li><a href='javascript:{onMyEvent}'>{baTitle}</a></li><!--error--> */}
    <ul>
      <li>{liRows}</li>
    </ul> 
  </>)
}

function App() {
  const frontData = ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'React'];
  const backData = ['Java', 'Python', 'JSP', 'Spring boot', 'Node.js'];
  // return (
  //   <>
  //     <div>
  //       <h1>React-Props</h1>
  //       <ol>
  //         <FrontComp propData1={frontData} frTitle="Front End" />
  //         <BackComp propData2={backData} baTitle="Back End" />
  //       </ol>
  //     </div>
  //   </>
  // );
  // 1. 데이터를 구조화하여 관리 (데이터와 제목을 한 세트로 묶음)
  const myEventHandler1 = () => alert("프론트 엔드 클릭!");
  const myEventHandler2 = msg => alert(msg);
  const categories = [
    { Comp: FrontComp, data: frontData, title: "프론트 엔드", propName: "propData1", titleProp: "frTitle", onMyEvent: myEventHandler1 },
    { Comp: BackComp, data: backData, title: "백 엔드", propName: "propData2", titleProp: "baTitle", onMyEvent: myEventHandler2 },
  ];

  return (
    <div>
      <h1>React-Props</h1>
      <ol>
        {/* 2. go와 map을 사용하여 반복되는 컴포넌트 생성을 간결하게 표현 */}
        {go(
          categories,
          map(({ Comp, data, title, propName, titleProp, onMyEvent }) => (
            <Comp 
              key={title} 
              {...{ [propName]: data, [titleProp]: title, onMyEvent }} 
            />
          ))
        )}
      </ol>
    </div>
  );
}

export default App;