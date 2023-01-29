import { createContext } from "solid-js";
import { createStore } from "solid-js/store";
import { randomElementFromArray } from "../../js/utils";

const randomTexts = [
  "The color of animals is by no means a matter of chance; it depends on many considerations, but in the majority of cases tends to protect the animal from danger by rendering it less conspicuous. Perhaps it may be said that if coloring is mainly protective, there ought to be but few brightly colored animals. There are, however, not a few cases in which vivid colors are themselves protective. The kingfisher itself, though so brightly colored, is by no means easy to see. The blue harmonizes with the water, and the bird as it darts along the stream looks almost like a flash of sunlight.",
  "Desert animals are generally the color of the desert. Thus, for instance, the lion, the antelope, and the wild donkey are all sand-colored. “Indeed,” says Canon Tristram, “in the desert, where neither trees, brushwood, nor even undulation of the surface afford the slightest protection to its foes, a modification of color assimilated to that of the surrounding country is absolutely necessary. Hence, without exception, the upper plumage of every bird, and also the fur of all the smaller mammals and the skin of all the snakes and lizards, is of one uniform sand color.”",
];

export const STATES = {
  IDLE: "idle",
  STARTING: "starting",
  RUNNING: "running",
};

export const SRContext = createContext([
  {
    current: 0,
    input: ["This", "is", "an", "example", "input"],
    speed: 250,
    state: STATES.IDLE,
  },
  {},
]);

export function SRProvider(props) {
  const [state, setState] = createStore({
    current: props.current || 0,
    input: props.input || ["This", "is", "an", "example", "input"],
    speed: props.speed || 250,
    state: props.state || STATES.IDLE,
  });
  const sr = [
    state,
    {
      setInput(input) {
        setState({ input: input.split(/\s/g), current: 0 });
      },
      setRandomInput() {
        setState({
          input: randomElementFromArray(randomTexts).split(/\s/g),
          current: 0,
        });
      },
      clearInput() {
        setState({ input: [], current: 0 });
      },
      setCurrent() {
        setState((state) => ({
          state:
            state.current + 1 === state.input.length
              ? STATES.IDLE
              : state.state,
          current:
            state.current + 1 === state.input.length ? 0 : state.current + 1,
        }));
      },
      setSpeed(ms) {
        if (ms < 1) ms = 1;
        else if (ms > 1000) ms = 1000;
        setState({ speed: ms });
      },
      setSRState(state) {
        setState({ state: state });
      },
    },
  ];

  return <SRContext.Provider value={sr}>{props.children}</SRContext.Provider>;
}
