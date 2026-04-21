import { useState, useEffect } from "react";

const GlobalTop = props => {
  console.log('GlobalTop ==> 1. 컴포넌트 실행(함수 호출)');

  const [myList, setMyList] = useState([]);

  useEffect(() => {
    console.log('GlobalTop ==> 3. useEffect 실행');
    fetch('/json/myData.json')
      .then(result => result.json())
      .then(json => {
        console.log(json);
        setMyList(json)
    });
  }, []);

  const myHandle = (e) => {
    e.preventDefault();
    props.myLinkClick(e.target.dataset.id);
  }

  let listTag = myList.map(data => {
    return <>
      <li key={data.id}><a href={data.id} data-id={data.num} onClick={myHandle}>{data.id}</a></li>
    </>
  })
  console.log('GlobalTop ==> 2. 컴포넌트 렌더링');

  return <>
    <nav>
      <ul>
        {listTag}
      </ul>    
    </nav>
  </>
}

const ContentBody = props => {
  return <>
    <div>
      <h2>{props.myResult.name}</h2>
      <ul>
        <li>num : {props.myResult.num}</li>
        <li>id : {props.myResult.id}</li>
        <li>name : {props.myResult.name}</li>
        <li>cell : {props.myResult.cell}</li>
        <li>descripttion : {props.myResult.descripttion}</li>
      </ul>
    </div>
  </>
} 

const LocalJsonFetcher = () => {
  const [myResult, setMyResult] = useState({});
  const myLinkClick = (num) => {
    fetch(`/json/dto${num}.json`)
      .then(result => result.json())
      .then(json => {
        console.log(json);
        setMyResult(json)
    });
  }

  return <>
    <h2>내부 서버 통신</h2>
    <GlobalTop myLinkClick={myLinkClick} />
    <ContentBody myResult={myResult} />
  </>
}

export default LocalJsonFetcher;