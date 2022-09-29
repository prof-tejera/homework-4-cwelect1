import {useState} from 'react';
import Number from './Number';
import Operation from './Operation';
import Screen from './Screen';

const Calculator = () => {
  /** TODO: Here is where you are going to keep track of calculator state */
  const [firstOperand,  setFirstOperand]  = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operation,     setOperation]     = useState("");
  const [screenResult,  setScreenResult]  = useState("0");

  let result = "";

  /** TODO: what happens when I click a number? */
  const handleNumberClick = (number) => {
    if(operation === ""){
      result = firstOperand + number;
      setFirstOperand(result);
    }
    else{
      result = secondOperand + number;
      setSecondOperand(result);
    }
    
    setScreenResult(result);
  };

  /** TODO: what happens when I click an operation? */
  const handleOperationClick = (op) => {
    if (op === 'AC'){
      setScreenResult("0");
      clearOperatorsAndOperands();
    }
    else if (op === '='){
      setScreenResult(calculateResult(firstOperand, secondOperand, operation));
      clearOperatorsAndOperands();
    }
    else{
      setOperation(op);
    }
  };

  const calculateResult = (operand1, operand2, operator) => {
    let result = "";

    if(operator === '+'){
      result = parseFloat(operand1) + parseFloat(operand2);
    }
    else if(operator === '-'){
      result = operand1 - operand2;
    }
    else if(operator === '/'){
      result = operand1 / operand2;
    }
    else if(operator === 'x'){
      result = operand1 * operand2;
    }
    
    return result;
  };

  const clearOperatorsAndOperands = () => {
    setFirstOperand("");
    setSecondOperand("");
    setOperation("");
  }

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
