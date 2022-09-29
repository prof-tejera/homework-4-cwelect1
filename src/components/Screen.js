const Screen = ({ value }) => {
  return (
    <div
      style={{
        border: ".5px solid black",
        width: 318,
        height: 70,
        textAlign: "right",
        paddingRight: 5,
        fontSize: 48,
        backgroundColor: "grey",
        color: "white"
      }}
    >
      {value}
    </div>
  );
};

export default Screen;
