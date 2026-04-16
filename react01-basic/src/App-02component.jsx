function FrontComp() {
  return (<>
    <li>Frond End</li>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
      <li>jQuery</li>
    </ul> 
  </>)
}

const BackComp = () => {
  return (<>
    <li>Back End</li>
    <ul>
      <li>Java</li>
      <li>Python</li>
      <li>JSP</li>
      <li>Spring Boot</li>
    </ul> 
  </>)
}

let FormComp = function() {
  return (<>
    <form>
      <select name="gubun">
        <option value="front">Front End</option>
        <option value="back">Back End</option>
      </select>
      <input type="text" name="title" placeholder="Enter title" />
      <input type="submit" value="추가" />
    </form>
  </>)  
}

function App() {
  return (
    <>
      <h1>컴포넌트 연습</h1>
      <ol>
        <FrontComp />
        <BackComp />
      </ol>
      <FormComp />
    </>
  );
}

export default App;