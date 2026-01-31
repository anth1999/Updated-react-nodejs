import { useEffect, useState } from "react";
import { getMessage } from "../services/api";

const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessage().then((res) => {
      setMessage(res.message);
    });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Node.js CI/CD Demo</h1>
      <p>{message}</p>
    </div>
  );
};

export default Home;
