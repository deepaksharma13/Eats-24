import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <>
      <h4>Opps!!!</h4>
      <p>Something Went Wrong</p>
      <h5>{err.data}</h5>
    </>
  );
};

export default Error;
