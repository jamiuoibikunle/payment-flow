import React, { useContext } from "react";
import { context } from "../App";
import styles from "../styles/pay.module.css";

const Pay = () => {
    const { step, setStep } = useContext(context);

    return (
        <main>
            <main className={styles.container}>
                <header className={styles.header}>
                    <div>Item Name</div>
                    <div>N Price</div>
                </header>
                <section className={styles.item}>
                    <div>Data science and usability</div>
                    <div>50,000.00</div>
                </section>
                <section className={styles.shipping}>
                    <div>Shipping</div>
                    <div>0.00</div>
                </section>
                <section className={styles.total}>
                    <div>Total</div>
                    <div>50,000.00</div>
                </section>
            </main>
            <section className={styles.submit}>
                <div className={styles.next}>
                    <button type="submit" onClick={() => setStep(step + 1)}>
                        Next
                    </button>
                </div>
                <div className={styles.cancel} onClick={() => setStep(1)}>
                    <button>Cancel Payment</button>
                </div>
            </section>
        </main>
    );
};

export default Pay;
