import styles from "../styles/confirm.module.css";
import success from "../resources/check-fill.svg";
import { useContext } from "react";
import { context } from "../App";

const Confirm = () => {
    const { setStep } = useContext(context);

    return (
        <main className={styles.container}>
            <main className={styles.wrapper}>
                <div className={styles.success}>
                    <img src={success} alt="Transaction successful" />
                </div>
                <h1 className={styles.header}>Purchase Completed</h1>
                <div className={styles.message}>
                    Please check your email for details concerning this
                    transaction
                </div>
                <div className={styles.return}>
                    <button onClick={() => setStep(1)}>Return Home</button>
                </div>
            </main>
        </main>
    );
};

export default Confirm;
