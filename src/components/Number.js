
const Number = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? 
   I added a class name so I could change the background color 
   on mouse click (css:active), but couldn't get it working.
  */
  
  if(value === 0){
    return (
      <div
        onClick={() => {onClick(value)}}
        className="btn"
        style={{
          padding: 10,
          textAlign: "center",
          border: ".5px solid black",
          width: 141,
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
        className="btn"
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
