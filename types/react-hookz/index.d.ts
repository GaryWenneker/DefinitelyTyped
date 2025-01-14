// Type definitions for react-hookz 1.0
// Project: https://github.com/garywenneker/react-hookz#readme
// Definitions by: Gary Wenneker <https://github.com/garywenneker>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

// Use an interface so that different versions of React can be used
interface ReactInterface {
  useEffect: (...args: any[]) => any;
  useState: (...args: any[]) => any;
  useMemo: (...args: any[]) => any;
}
// to ignore strict-export-declare-modifiers error
export {};

// Where S is typeof state and A is typeof associated actions
export interface Store<S, A> {
  state: S;
  actions: A;
  setState(state: S, afterUpdateCallback?: () => void): void;
}

export type InitializerFunction<S, A> = (store: Store<S, A>) => void;

type UseGlobal<S, A> = (() => [S, A]) &
  (<NS>(stateFunc: (state: S) => NS) => [NS, A]) &
  (<NS, NA>(stateFunc: (state: S) => NS, actionsFunc: (state: A) => NA) => [NS, NA]) &
  (<NA>(stateFunc: undefined, actionsFunc: (state: A) => NA) => [S, NA]);

export function useStore<S, A>(
  React: ReactInterface,
  inititalState: S,
  actions: object,
  initializers?: InitializerFunction<S, A>,
): UseGlobal<S, A>;
