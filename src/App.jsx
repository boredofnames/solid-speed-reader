import SpeedReader from "./jsx/SpeedReader";
import styles from "./App.module.css";
import Theme from "./jsx/Theme";

function App() {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        Speed Reader <Theme />
      </header>
      <SpeedReader />
    </div>
  );
}

export default App;
