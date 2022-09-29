import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <div>
      Welcome to the second page!
      <br />
      <br />
      <Link to="/">Go back to home screen</Link>
    </div>
  );
};

export default OtherPage;
