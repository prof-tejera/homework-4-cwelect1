import {useState} from 'react';
import Number from './Number';
import Operation from './Operation';
import Screen from './Screen';

const Calculator = () => {
  console.log('Calcultor component');
  /** TODO: Here is where you are going to keep track of calculator state */
  // Need at least 3 useStates (1st num, operation, 2nd num)
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  //const [operation, setOperation] = useState("");
  const [screenResult, setScreenResult] = useState("0");

  let isOperand1 = true;
  //let operators = [];

  /** TODO: what happens when I click a number? */
  const handleNumberClick = (number) => {
    if(isOperand1){
      setFirstOperand(firstOperand + number);
    }
    else{
      setSecondOperand(secondOperand + number);
    }
    
    setScreenResult(firstOperand);
    console.log("firstOperand: " + firstOperand + " secondOperand: " + secondOperand)
    // push value into string
    // concat additional numbers (before and operation is chosen)

  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = (operation) => {
    if (operation === 'AC'){
      console.log('AC')
      setScreenResult("0");
      setFirstOperand("");
    }
    // 1st operation?
    //  - push into array of operators
    //  - push current operand string into numbers array and clear string (for next operand)
    // 2nd or later operation
    //  - push to array
    //  - perform calculateion and display value 
    //  - if "=", calculate, display then clear all stored values
  };

  return (
    <div>
      <Screen value={screenResult} />
      <div style={{ display: "flex" }}>
        <Operation value="AC" onClick={(val) => handleOperationClick(val)} />
        <Number value={""} />
        <Number value={""} />
        <Operation value="/" onClick={(val) => handleOperationClick(val)} />
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <Number value={9} onClick={(val) => handleNumberClick(val)} />
          <Number value={6} onClick={(val) => handleNumberClick(val)} />
          <Number value={3} onClick={(val) => handleNumberClick(val)} />
        </div>
        <div>
          <Number value={8} onClick={(val) => handleNumberClick(val)} />
          <Number value={5} onClick={(val) => handleNumberClick(val)} />
          <Number value={2} onClick={(val) => handleNumberClick(val)} />
        </div>
        <div>
          <Number value={7} onClick={(val) => handleNumberClick(val)} />
          <Number value={4} onClick={(val) => handleNumberClick(val)} />
          <Number value={1} onClick={(val) => handleNumberClick(val)} />
        </div>
        <div style={{ /*paddingLeft: 10*/ }}>
          <Operation value="x" onClick={(val) => handleOperationClick(val)} />
          <Operation value="-" onClick={(val) => handleOperationClick(val)} />
          <Operation value="+" onClick={(val) => handleOperationClick(val)} />
        </div>
      </div>
      <div style={{ display: "flex" }}>
      <Number value={0} onClick={(val) => handleNumberClick(val)} />
      <Number value={"."} onClick={(val) => handleNumberClick(val)} />
      <Operation value={"="} onClick={(val) => handleOperationClick(val)} />
      </div>
    </div>
  );
};

export default Calculator;
