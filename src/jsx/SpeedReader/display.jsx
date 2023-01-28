import { Match, Switch, useContext } from "solid-js";
import { SRContext, STATES } from "./context";

import styles from "./index.module.css";

export default function Display(props) {
  const [state] = useContext(SRContext);
  return (
    <div class={styles.display}>
      <Switch>
        <Match when={state.state === STATES.IDLE}>Waiting to start!</Match>
        <Match when={state.state === STATES.STARTING}>Get ready!</Match>
        <Match when={state.state === STATES.RUNNING}>
          {state.input[state.current]}
        </Match>
      </Switch>
    </div>
  );
}
