import { Switch, useContext } from "solid-js";
import { SRContext, STATES } from "./context";
import Input from "./input";

import styles from "./index.module.css";

export default function Controls(props) {
  const [state, { setCurrent, setSpeed, setSRState }] = useContext(SRContext);
  let speed;
  let startTO;

  function start() {
    if (state.state === STATES.IDLE) {
      setSRState(STATES.STARTING);
      startTO = setTimeout(() => {
        setSRState(STATES.RUNNING);
        loop();
      }, 3000);
    } else {
      clearTimeout(startTO);
      setSRState(STATES.IDLE);
    }
  }

  function loop() {
    if (state.state === STATES.IDLE) return;
    setTimeout(() => {
      setCurrent(), loop();
    }, state.speed);
  }

  return (
    <div class={styles.controls}>
      <Input />
      <div class={styles.speed}>
        <button onClick={start}>
          <Switch>
            <Match when={state.state === STATES.IDLE}>▶️</Match>
            <Match when={state.state !== STATES.IDLE}>⏸️</Match>
          </Switch>
        </button>
        <input
          type="number"
          ref={speed}
          min={1}
          max={1000}
          value={state.speed}
          onInput={(e) => setSpeed(e.currentTarget.value)}
        />
        ms
      </div>
    </div>
  );
}
