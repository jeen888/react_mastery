// import { map, filter, reduce, go, pipe, L, C } from "fxjs";
// import * as _ from "fxjs"; // too heavy
import { go, map } from "fxjs";

let FrontComp = function(props) {
  console.log(props);
  const liRows = props.propData1.map((item, i) => <li key={i}>{item}</li>);
  // const liRows=[];
  // for (let i=0; i<props.propData1.length; i++) {
  //   liRows.push(<li key={i}>{props.propData1[i]}</li>); // 중복되지 않는 key prop 추가
  // }
  return (<>
    <li>{props.frTitle}</li>
    <ul>
      {liRows}
    </ul>
  </>)  
}

const BackComp = ({propData2, baTitle}) => {
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
    <li>{baTitle}</li>
    <ul>
      <li>{liRows}</li>
    </ul> 
  </>)
}

function App() {
  // const frontData = ['HTML5', 'CSS3', 'JavaScript', 'jQuery'];
  // const backData = ['Java', 'Python', 'JSP', 'Spring boot'];
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
  const categories = [
    { Comp: FrontComp, data: ['HTML5', 'CSS3', 'JavaScript!!', 'jQuery'], title: "Front End", propName: "propData1", titleProp: "frTitle" },
    { Comp: BackComp, data: ['Java', 'Python', 'JSP', 'Spring boot'], title: "Back End", propName: "propData2", titleProp: "baTitle" }
  ];

  return (
    <div>
      <h1>React-Props</h1>
      <ol>
        {/* 2. go와 map을 사용하여 반복되는 컴포넌트 생성을 간결하게 표현 */}
        {go(
          categories,
          map(({ Comp, data, title, propName, titleProp }) => (
            <Comp 
              key={title} 
              {...{ [propName]: data, [titleProp]: title }} 
            />
          ))
        )}
      </ol>
    </div>
  );
}

export default App;