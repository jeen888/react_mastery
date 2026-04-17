import { useState } from "react";

const TopComp = ({MyData}) => {
  return <>
    <ol>
      <li>FrontEnd</li>
      <ul>
        {MyData.front.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <li>BackEnd</li>
      <ul>
        {MyData.back.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </ol>  
  </>
}

export default function App() {
  const [MyData, setMyData] = useState({
    front: ['React native', 'Vue', 'Angular'],
    back: ['Node', 'Django', 'Spring']
  });

  const addFront = () => { // 기대대로 동작하지 않음
    MyData.front.push('React');
    setMyData(MyData);
  }
  const addBack = () => { // 기대대로 동작
    const newBack = [...MyData.back, 'Express'];
    const newMyData = {...MyData, back: newBack};
    setMyData(newMyData);
  }

  return <>
    <h1>Shallow Comp</h1>
    <TopComp MyData={MyData} />
    <button onClick={addFront}>Add FrontEnd</button>
    <button onClick={addBack}>Add BackEnd</button>
  </>
}