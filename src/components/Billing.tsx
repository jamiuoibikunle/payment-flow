import React, { useContext } from "react";
import { context } from "../App";
import styles from "../styles/billing.module.css";

const Billing = () => {
    const { step, setStep } = useContext(context);

    return (
        <form onSubmit={() => setStep(step + 1)} className={styles.container}>
            <div className={styles.field}>
                <label>
                    Name on Card <span style={{ color: "red" }}>*</span>
                </label>
                <input type="text" placeholder="Opara Linus Ahmed" required />
            </div>
            <div className={styles.field}>
                <label>
                    Card Type <span style={{ color: "red" }}>*</span>
                </label>
                <select defaultValue="" className={styles.select} required>
                    <option value="" disabled>
                        Please select
                    </option>
                    <option value="Visa">Visa</option>
                    <option value="Visa">Mastercard</option>
                    <option value="Visa">Discover</option>
                    <option value="Visa">Verve</option>
                </select>
            </div>
            <div className={styles.card}>
                <div className={styles.details}>
                    <label>
                        Card details <span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="text" required />
                </div>
                <div className={styles.expiry}>
                    <label>
                        Expiry date <span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="text" required />
                </div>
                <div className={styles.cvv}>
                    <label>
                        CVV <span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="text" required />
                </div>
            </div>
            <section className={styles.submit}>
                <div className={styles.next}>
                    <button type="submit">Next</button>
                </div>
                <div className={styles.cancel} onClick={() => setStep(1)}>
                    <button>Cancel Payment</button>
                </div>
            </section>
        </form>
    );
};

export default Billing;
