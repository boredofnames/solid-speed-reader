import SpeedReader from "./jsx/SpeedReader";
import styles from "./App.module.css";

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>Speed Reader</header>
      <SpeedReader />
    </div>
  );
}

export default App;
