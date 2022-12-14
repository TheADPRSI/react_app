import { useEffect, useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // console.log(count);
  }, [count]);

  //

  return (
    <div className={styles.App}>
      React App
      <h3>{count}</h3>
      <button onClick={() => setCount((st) => st - 1)}>Sub</button>
      <button onClick={() => setCount((st) => st + 1)}>Add</button>
    </div>
  );
}

export default App;
