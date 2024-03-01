const Temp = ({ tempDegree }) => {
  let message;

  if (tempDegree >= 90) {
    message = "Hot";
  } else if (tempDegree >= 70) {
    message = "Warm";
  } else {
    message = "Cold";
  }

  return <div> {message} </div>;
};

export default Temp;
