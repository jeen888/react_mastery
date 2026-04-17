// import { map, filter, reduce, go, pipe, L, C } from "fxjs";
// import * as _ from "fxjs"; // too heavy
// import { go, map } from "fxjs";
import { useState } from "react";
import FrontComp from "./components/FrontComp";
import BackComp from "./components/BackComp";

function App() {
  const frontData = ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'React'];
  const backData = ['Java', 'Python', 'JSP', 'Spring boot', 'Node.js'];
  // 1. 데이터를 구조화하여 관리 (데이터와 제목을 한 세트로 묶음)
  const myEventHandler1 = () => alert("프론트 엔드 클릭!");
  const myEventHandler2 = msg => alert(msg);
  const [mode, setMode] = useState('both');
  const handleSetMode = mode => setMode(mode);
  const handleResetMode = handleSetMode.bind(null, 'both'); // mode를 'both'로 리셋하는 함수

  let contents = '';

  if (mode === 'front') {
    contents = <>
    <FrontComp propData1={frontData} frTitle="Front End" onSetMode={handleSetMode} />
    </>
  } else if (mode === 'back') {
    contents = <>
      <BackComp propData2={backData} baTitle="Back End" onSetMode={handleSetMode} />
    </>
  } else {
    contents = (
      <>
        <FrontComp propData1={frontData} frTitle="Front End" onSetMode={handleSetMode} />
        <BackComp propData2={backData} baTitle="Back End" onSetMode={handleSetMode} />
      </>
    );
  }
  // const categories = [
  //   { Comp: FrontComp, data: frontData, title: "프론트 엔드", propName: "propData1", titleProp: "frTitle", onMyEvent: myEventHandler1 },
  //   { Comp: BackComp, data: backData, title: "백 엔드", propName: "propData2", titleProp: "baTitle", onMyEvent: myEventHandler2 },
  // ];
  return (
    <>
      <div>
        <h1><a href='#' onClick={handleResetMode}>React-State</a></h1>
        <ol>
          {contents}
        </ol>
      </div>
    </>
  );

  // return (
  //   <div>
  //     <h1>React-Props</h1>
  //     <ol>
  //       {/* 2. go와 map을 사용하여 반복되는 컴포넌트 생성을 간결하게 표현 */}
  //       {go(
  //         categories,
  //         map(({ Comp, data, title, propName, titleProp, onMyEvent }) => (
  //           <Comp 
  //             key={title} 
  //             {...{ [propName]: data, [titleProp]: title, onMyEvent }} 
  //           />
  //         ))
  //       )}
  //     </ol>
  //   </div>
  // );
}

export default App;