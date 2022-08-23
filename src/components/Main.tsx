import { useContext } from "react";
import { context } from "../App";
import styles from "../styles/main.module.css";
import Billing from "./Billing";
import Confirm from "./Confirm";
import Pay from "./Pay";
import Profile from "./Profile";

interface Props {
    step: number;
    setStep: (step: number) => void;
    states: { name: string }[];
    setState: (state: string) => void;
    lgas: string[];
}

const Main = () => {
    const { step } = useContext(context);

    return (
        <main className={styles.container}>
            {step === 4 && <Confirm />}
            {step < 4 && (
                <section className={styles.wrapper}>
                    <h1>Complete your Purchase</h1>
                    <section className={styles.stepper}>
                        <div className={step === 1 ? styles.active : ""}>
                            Personal Info
                        </div>
                        <div
                            className={
                                step === 2 || step === 3 ? styles.active : ""
                            }
                        >
                            Billing Info
                        </div>
                        <div className={step === 4 ? styles.active : ""}>
                            Confirm Payment
                        </div>
                    </section>
                    {step === 1 && <Profile />}
                    {step === 2 && <Billing />}
                    {step === 3 && <Pay />}
                </section>
            )}
        </main>
    );
};

export default Main;
