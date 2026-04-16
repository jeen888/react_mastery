const App = () => {
  return (<>
    <h2>React basic</h2>
    <ol>
      <li>Frond End</li>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>jQuery</li>
      </ul>
      <li>Back End</li>
      <ul>
        <li>Java</li>
        <li>Oracle</li>
        <li>JSP</li>
        <li>Spring Boot</li>
      </ul>
    </ol> 

    <form>
      <select name="gubun">
        <option value="front">Front End</option>
        <option value="back">Back End</option>
      </select>
      <input type="text" name="title" placeholder="Enter title" />
      <input type="submit" value="추가" />
    </form>
  </>);
}

export default App