import { Match, Switch, useContext } from "solid-js";
import { roundAccurate } from "../../js/utils";
import { SRContext, STATES } from "./context";

import styles from "./index.module.css";

export default function Display(props) {
  const [state] = useContext(SRContext);

  function getEstimate() {
    let len = (state.input.length * state.speed) / 1000,
      unit = len > 60 ? "minute" : "second";
    if (unit === "minute") len /= 60;
    return `${state.input.length} words at ${
      state.speed
    }ms approx. ${roundAccurate(len, 2)} ${unit}${len > 1 ? "s" : ""}`;
  }

  return (
    <div class={styles.display}>
      <Switch>
        <Match when={state.state === STATES.IDLE}>
          <div class={styles.centerText}>
            <p>Waiting to start!</p>
            <p class={styles.small}>{getEstimate}</p>
          </div>
        </Match>
        <Match when={state.state === STATES.STARTING}>
          <p>Get ready!</p>
        </Match>
        <Match when={state.state === STATES.RUNNING}>
          <p>{state.input[state.current]}</p>
        </Match>
      </Switch>
    </div>
  );
}
