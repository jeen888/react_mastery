let FrontComp = function(props) {
  // const liRows = props.list.map((item, index) => <li key={index}>{item}</li>);
  const liRows=[];
  for (let i=0; i<props.propData1.length; i++) {
    liRows.push(<li key={i}>{props.propData1[i]}</li>); // 중복되지 않는 key prop 추가
  }
  return (<>
    <li>{props.frTitle}</li>
    <ul>
      {liRows}
    </ul>
  </>)  
}

const BackComp = ({propData2, baTitle}) => {
  const liRows=[];
  let keyCnt=0;
  for (let row of propData2) {
    liRows.push(<li key={keyCnt++}>{row}</li>);
  }
  return (<>
    <li>{baTitle}</li>
    <ul>
      <li>{liRows}</li>
    </ul> 
  </>)
}

function App() {
  const frontData = ['HTML5', 'CSS3', 'JavaScript', 'jQuery'];
  const backData = ['Java', 'Python', 'JSP', 'Spring Boot'];
  return (
    <>
      <div>
        <h1>React-Props</h1>
        <ol>
          <FrontComp propData1={frontData} frTitle="Front End" />
          <BackComp propData2={backData} baTitle="Back End" />
        </ol>
      </div>
    </>
  );
}

export default App;