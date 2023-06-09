import React, { useState } from "react";
import {Counter2} from "./Count2";
import {Counter1} from "./Count1";

export function useIncrement(addAmount) {
    const [count, setCount] = useState(0);

    function increase(addAmount) {
        setCount(count + addAmount);
    }

    return [count, increase];
}

function App() {
    return (
        <div>
        <Counter1 />
        <Counter2 />
        </div>
);
}

export default App;