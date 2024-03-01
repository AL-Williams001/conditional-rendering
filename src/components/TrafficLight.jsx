const TrafficLight = ({ color }) => {
  return (
    <div>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: color === "red" ? "red" : "grey",
        }}
      ></div>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: color === "yellow" ? "yellow" : "grey",
        }}
      ></div>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: color === "green" ? "green" : "grey",
        }}
      ></div>
    </div>
  );
};

export default TrafficLight;
