import React, {useState} from "react";
import '../styles/Sign-up-in.css';

function FormInput(props) {
//   const [inputType] = useState(props.type);
//   const [inputValue, setInputValue] = useState('');

//   function inputChange(e){
//     setInputValue(e.target.value);
//     if(props.onChange) {
//         props.onChange(inputValue)
//     }
//   }
  return (
    <div className="input-elements">
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.inputType} name={props.name} /*value={props.inputValue} onChange={inputChange}*/ placeholder={props.placeholder} className="inputclass" required/>
    </div>
  );
}
  export default FormInput;