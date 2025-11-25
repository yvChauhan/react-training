import { useEffect } from "react";
import { useNavigate } from "react-router";

function Thanks() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <h1>
      Thank You for Your Purchase! you will be redirected to the home page in 5
      seconds...
    </h1>
  );
}
