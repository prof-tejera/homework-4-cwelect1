const Number = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? 
   1. change background color to indicate a click
    a) change color back after release of click
    b) do we handle multiple clicks (user holds key down)
   2. return value clicked to business logic
  */
  console.log('Number component ' + value);
  if(value === 0){
    return (
      <div
        onClick={() => {onClick(value)}}
        style={{
          padding: 10,
          textAlign: "center",
          border: ".5px solid black",
          width: 142,
          backgroundColor: "grey",
          color: "white"
        }}
        props
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
          backgroundColor: "grey",
          color: "white"
        }}
      >
        {value}
      </div>
    );
  }
  
};

export default Number;
