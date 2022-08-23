import Main from "./components/Main";
import "./App.css";
import { createContext, useEffect, useState } from "react";

const context = createContext<any>(null);

export const App = () => {
    const [step, setStep] = useState(1);
    const [states, setStates] = useState([]);
    const [state, setState] = useState("");
    const [lgas, setLgas] = useState([]);

    useEffect(() => {
        fetch("https://locationsng-api.herokuapp.com/api/v1/states")
            .then((response) => response.json())
            .then((response) => setStates(response))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        let newState;

        if (state === "Federal Capital Territory") {
            newState = "abuja";
        } else {
            newState = state.replaceAll(" ", "_");
        }

        state &&
            fetch(
                `https://locationsng-api.herokuapp.com/api/v1/states/${newState.toLowerCase()}/lgas`
            )
                .then((response) => response.json())
                .then((response) => setLgas(response))
                .catch((err) => console.error(err));
    }, [state]);

    return (
        <context.Provider value={{ step, setStep, states, setState, lgas }}>
            <Main />
        </context.Provider>
    );
};

export { context };
