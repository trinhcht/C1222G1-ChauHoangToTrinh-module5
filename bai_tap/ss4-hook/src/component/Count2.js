import {useIncrement} from "./Count";

export function Counter2() {
    const [count, increase] = useIncrement(2);

    return (
        <div>
        <p>Counter 2: {count}</p>
    <button onClick={() => increase(2)}>Add 2</button>
    </div>
);
}