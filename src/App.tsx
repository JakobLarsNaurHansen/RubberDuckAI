import { useState } from "react";
import "./duckAnimations.css";
import duckImg from "./assets/duck.png";
import ChatBox from "./components/ChatBox";

function App() {
  const [duckIsThinking, setDuckIsThinking] = useState(false);

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.container}>
        <h1 style={styles.title}>Hello, I'm your rubber duck 🦆</h1>
        <img
          src={duckImg}
          alt="Rubber Duck"
          className={`floating-duck ${duckIsThinking ? "wobbling-duck" : ""}`}
          style={styles.duckImage}
        />
        <ChatBox setDuckIsThinking={setDuckIsThinking} />
      </div>
    </div>
  );
}

const styles: any = {
  pageWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "2rem",
    boxSizing: "border-box",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "600px",
    width: "100%",
    textAlign: "center",
  },
  duckImage: {
    width: "300px",
    height: "auto",
    marginBottom: "1rem",
  },
  title: {
    marginBottom: "1rem",
    fontSize: "2.5rem",
  },
};

export default App;
