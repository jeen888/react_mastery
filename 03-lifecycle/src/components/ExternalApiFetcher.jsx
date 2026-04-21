import { useState, useEffect } from "react";

function RandomUser(props) {
  const [myJSON, setMyJSON] = useState({ results: [] });
  useEffect(() => {
    fetch('https://api.randomuser.me?results=10')
      .then(result => result.json())
      .then(json => {
        console.log(json);
        setMyJSON(json);
    });
  }, []);

  let trTag = myJSON.results.map(data => {
    return <>
      <tr key={data.login.md5}>
        <td><img src={data.picture.thumbnail} alt="{data.login.username}" /></td>
        <td><a href='/' onClick={
          e => {
            e.preventDefault();
            props.onProfile(data);
          }
        }>{data.login.username}</a></td>
        <td>{data.name.title}  {data.name.first} {data.name.last}</td>
        <td>{data.nat}</td>
        <td>{data.email}</td>
      </tr>
    </>
  });

  return <>
    <h2>외부 API 통신</h2>
    <table>
      <thead>
        <tr>
          <th>사진</th>
          <th>아이디</th>
          <th>이름</th>
          <th>국적</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>{trTag}</tbody>
    </table>
  </>
}

export default function ExternalApiFetcher() {
  return <>
    {/* <h2>외부 API 통신</h2> */}
    <RandomUser onProfile={data => {
      console.log(data);
      let info=`전화번호:${data.cell}\n이메일:${data.email}\n주소:${data.location.street.number} ${data.location.street.name}, ${data.location.city}, ${data.location.state}, ${data.location.country}`;
      alert(info);
    }} />
  </>
}