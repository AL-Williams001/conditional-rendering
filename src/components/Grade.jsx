const Grade = ({ grade }) => {
  let gradeMessage;

  switch (grade) {
    case "A":
      gradeMessage = "Excellent";
      break;
    case "B":
      gradeMessage = "Good Job";
      break;
    case "C":
      gradeMessage = "You Passed";
      break;
    case "D":
      gradeMessage = "You need to work harder";
      break;
    case "F":
      gradeMessage = "You failed";
      break;
    default:
      gradeMessage = "Invalid grade";
  }

  return (
    <div>
      <h1>Your grade is A</h1>
      <p>{gradeMessage}</p>
    </div>
  );
};

export default Grade;
