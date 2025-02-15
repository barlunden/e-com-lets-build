/* eslint-disable no-unused-vars */
import { useContext } from "react";
import InteractionsContext from "../context/InteractionsContext";



function Counter() {
    const [counter, setCounter] = useContext(InteractionsContext);
    
    return(
        <div className="z-99 fixed bottom-0 w-full p-10 bg-gradient-to-l from-30% to-70% from-indigo-700 to-indigo-500 text-sky-50">
            <h1 className="text-3xl lg:text-5xl">Number of profiles visited: {counter}</h1>
        </div>
    )
}

export default Counter;