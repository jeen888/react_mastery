import { useEffect, useRef } from "react";

const UseRefExam2 = () => {
  const passRef1 = useRef();
  const passRef2 = useRef();

  useEffect(() => {
    passRef1.current.focus();
  }, []);

  const checkPassword = () => {
    if (passRef1.current.value === passRef2.current.value) {
      alert('비밀번호 일치');
    } else {
      alert('비밀번호 불일치');
      passRef1.current.value = '';
      passRef2.current.value = '';
      passRef1.current.focus();
    }
  }

  return <>
    <h2>useRef Exam2</h2>  
    <form>
      pw1 : <input type='text' ref={passRef1} name='pass1' /><br />
      pw2 : <input type='text' ref={passRef2} name='pass2' /><br />
      <button type='button' onClick={checkPassword}>비밀번호 확인</button>    
    </form>
  </>
}

export default UseRefExam2;