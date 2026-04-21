import { useState, useEffect } from "react";

function MoveBox(props) {
  console.log('Lifecycle ==> 1. 컴포넌트 실행(함수 호출)');

  const [position, setPosition] = useState(props.initPosition);
  const [leftCount, setLeftCount] = useState(1);
  const boxStyle = {
    backgroundColor: 'red',
    position: 'relative',
    textAlign: 'center',
    width: '100px',
    height: '100px',
    margin: '10px',
    lineHeight: '100px',
    left: `${position}px`
  };

  const moveLeft = () => {
    setPosition(position - 20);
    setLeftCount(leftCount + 1);
  }
  const moveRight = () => {
    setPosition(position + 20);
  }

  useEffect(() => {
    console.log('Lifecycle ==> 3. useEffect 실행');
    return () => {
      console.log('Lifecycle ==> 4. useEffect 정리(컴포넌트 unmount)');
    }
  }, [leftCount]);

  console.log('Lifecycle ==> 2. 컴포넌트 렌더링');

  return <>
    <h4> 함수형 컴포넌트의 생명주기</h4>
    <div style={boxStyle}>{leftCount}</div>
    <button onClick={moveLeft}>왼쪽으로 이동</button>
    <button onClick={moveRight}>오른쪽으로 이동</button>
  </>
}

function Lifecycle() {
  return <>
    <h2>React Hook - useEffect</h2>
    <MoveBox initPosition={50} />
  </>
}

export default Lifecycle;