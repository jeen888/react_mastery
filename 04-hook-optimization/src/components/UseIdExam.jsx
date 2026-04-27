import { useId, useEffect } from "react";

const InputField=({label, name, autoFocus=false})=>{
  const id = useId();

  useEffect(()=>{
    if(autoFocus){
      document.getElementById(id).focus();
    }
  }, []);

  return <>
    <label htmlFor={id}>{label}</label>
    <input type='text' id={id} name={name} />
  </>
}
 
const MyForm = () => {
  const commonId = useId();

  return <>
    <h2>useId Exam</h2>
    <div>
      <InputField label='ID' name='id' autoFocus={true} /><br />
      <InputField label='Name' name='name' /><br />
      Gender 
      <input type='radio' id={`${commonId}-gender1`} name='gender' />
      <label htmlFor={`${commonId}-gender1`}>Man</label>
      <input type='radio' id={`${commonId}-gender2`} name='gender' />
      <label htmlFor={`${commonId}-gender2`}>Woman</label>  
    </div>
  </>
}

export default MyForm;