import {useIncrement} from "./Count";

export function Counter1() {
    const [count, increase] = useIncrement(1);

    return (
        <div>
        <p>Counter 1: {count}</p>
    <button onClick={() => increase(1)}>Add 1</button>
    </div>
);
}