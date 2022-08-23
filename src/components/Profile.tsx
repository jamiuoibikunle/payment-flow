import React, { useContext } from "react";
import { context } from "../App";
import styles from "../styles/profile.module.css";

const forms = [
    {
        name: "Name",
        placeholder: "Opara Linus Ahmed",
        required: false,
    },
    {
        name: "Email Address",
        placeholder: "OparaLinusAhmed@devmail.com",
        required: true,
        info: "The purchase receipt will be sent to this address",
    },
    {
        name: "Address 1",
        placeholder: "The address of the user goes here",
        required: false,
    },
    {
        name: "Address 2",
        placeholder: "and here",
        required: false,
    },
];

const Profile = () => {
    const { step, setStep, states, setState, lgas } = useContext(context);

    return (
        <form className={styles.container} onSubmit={() => setStep(step + 1)}>
            {forms.map(({ name, placeholder, required, info }, index) => {
                return (
                    <div className={styles.field} key={index}>
                        <label>
                            {name}{" "}
                            {required && (
                                <span style={{ color: "red" }}>*</span>
                            )}
                        </label>
                        <input
                            type="text"
                            placeholder={placeholder}
                            required={required}
                        />
                        {info && <div className={styles.info}>{info}</div>}
                    </div>
                );
            })}
            <div className={styles.region}>
                <div className={styles.field}>
                    <label>Local Government</label>
                    <select defaultValue="" className={styles.select} required>
                        <option value="" disabled>
                            Please select
                        </option>
                        {lgas.map((lga: string) => {
                            return <option value={lga}>{lga}</option>;
                        })}
                    </select>
                </div>
                <div className={styles.field}>
                    <label>State</label>
                    <select
                        defaultValue=""
                        className={styles.select}
                        onChange={(e) => setState(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Please select
                        </option>
                        {states.map(
                            (state: { name: string }, index: number) => {
                                return (
                                    <option key={index} value={state.name}>
                                        {state.name}
                                    </option>
                                );
                            }
                        )}
                    </select>
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

export default Profile;
