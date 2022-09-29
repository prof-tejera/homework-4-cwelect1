const Operation = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks an Operation, what do we want to pass to our parent? 
   * 1. Change background color while key/mouse down to indicate action
   * 2. Return value to parent for business logic processing
   * 
  */
   console.log('Operation component ' + value);
  if(value === "AC"){
    return (
      <div
        onClick={() => {onClick(value)}}
        style={{
          padding: 10,
          textAlign: "center",
          border: ".5px solid black",
          width: 60,
          backgroundColor: "grey",
          color: "white"
        }}
      >
        {value}
      </div>
    );
  }
  else{
    return (
      <div
        onClick={() => {onClick(value)}}
        style={{
          padding: 10,
          textAlign: "center",
          border: ".5px solid black",
          width: 60,
          backgroundColor: "orange",
          color: "white"
        }}
      >
        {value}
      </div>
    );
  }
  
};

export default Operation;
