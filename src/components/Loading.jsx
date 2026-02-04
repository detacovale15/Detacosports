import { ThreeDot } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="loading-container">
      <img src="/FutbolBall.png" alt="Pelota de fútbol" />
      <ThreeDot color={["#dd621f", "#3bdd1f", "#1f9add", "#c11fdd"]} />
    </div>
  );
};

export default Loading;
