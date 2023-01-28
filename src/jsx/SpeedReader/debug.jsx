import { useContext } from "solid-js";
import { SRContext } from "./context";

export default function Debug(props) {
  const [state] = useContext(SRContext);
  return (
    <div style={`white-space: pre-wrap`}>{JSON.stringify(state, null, 2)}</div>
  );
}
