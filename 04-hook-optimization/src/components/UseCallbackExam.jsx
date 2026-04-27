import {useState, useEffect, useCallback} from "react";

const DivBox = ({fnBoxStyle, numberVar}) => {
  const [myStyle, setMyStyle] = useState({});

  useEffect(() => {
    console.log('박스 스타일 변경');
    setMyStyle(fnBoxStyle());
  }, [fnBoxStyle]);

  return <div style={myStyle}>{numberVar}</div>
}

export default function UseCallbackExam() {
  const [boxSize, setBoxSize] = useState(100);
  const [boxColor, setBoxColor] = useState(0);
  const [number, setNumber] = useState(0);
  const colorArr = ['red', 'green', 'blue'];

  // const fnBoxStyle = () => { // 훅 적용 전.
  //   return {
  //     backgroundColor: colorArr[boxColor],
  //     width: `${boxSize}px`,
  //     height: `${boxSize}px`,
  //     textAlign: 'center',
  //     lineHeight: `${boxSize}px`,
  //   }
  // }
  const fnBoxStyle = useCallback(() => { // 훅 적용 후.
    return {
      backgroundColor: colorArr[boxColor],
      width: `${boxSize}px`,
      height: `${boxSize}px`,
      textAlign: 'center',
      lineHeight: `${boxSize}px`,
    }
  }, [boxSize, boxColor]);

  return <>
    <h2>useCallback Exam</h2>
    <button onClick={()=>setBoxSize(boxSize+10)}>크기 증가</button>
    <button onClick={()=>setBoxColor((boxColor+1)%3)}>컬러 변경</button>
    <button onClick={()=>setNumber(number+1)}>숫자 변경</button>

    <DivBox fnBoxStyle={fnBoxStyle} numberVar={number} />
    </>
}