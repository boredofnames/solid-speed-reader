import { useContext } from "solid-js";
import { SRContext, STATES } from "./context";
import styles from "./index.module.css";

export default function Input(props) {
  const [state, { setInput, clearInput, setRandomInput }] =
    useContext(SRContext);
  let input;

  function onInput(e) {
    setInput(input.value);
  }

  return (
    <div
      class={styles.inputcon}
      style={`display: ${state.state !== STATES.IDLE ? "none" : "flex"}`}
    >
      <textarea
        class={styles.input}
        ref={input}
        value={state.input.join(" ")}
        onInput={onInput}
      />
      <div class={styles.buttons}>
        <button onClick={setRandomInput}>♻️</button>
        <button onClick={clearInput}>❌</button>
      </div>
    </div>
  );
}
