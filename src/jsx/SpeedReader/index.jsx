import { SRProvider } from "./context";
import Controls from "./controls";
import Debug from "./debug";
import Display from "./display";

import styles from "./index.module.css";

export default function SpeedReader(props) {
  return (
    <div class={styles.speedreader}>
      <SRProvider>
        <Controls />
        <Display />
        {/* <Debug /> */}
      </SRProvider>
    </div>
  );
}
