import React, { useState } from "react";
import './styles/Transfer.style.css';

const Withdraw = ({ selectedUser, users, setCurrentAction }) => {
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleWithdrawAmount = (event) => {
        setWithdrawAmount(Number(event.target.value));
        // setCurrentAction("");
    };

    const handleConfirmWithdraw = () => {
        const targetUser = users.find((user) => user._id === selectedUser._id);
        if (targetUser) {
            console.log(
                `Withdrawn $${withdrawAmount} to ${targetUser.firstName} ${targetUser.lastName}`
            );
        } else {
            console.log("something went wrong");
        }
        setShowConfirmation(false);
        window.alert("Amount debited successfully");
    };

    const handleWithdrawCancel = () => {
        setShowConfirmation(false);
    };

    return (
        <>
            {showConfirmation ? (
                <div className="users-data">
                    <h3>Confirm Withdraw:</h3>
                    <p>
                        Withdraw $ {withdrawAmount} from{" "}
                        {selectedUser.firstName}
                    </p>
                    <button onClick={handleConfirmWithdraw}>Confirm</button>
                    <button onClick={handleWithdrawCancel}>Cancel</button>
                </div>
            ) : (
                <div className="users-data">
                    <h3>Enter amount to withdraw:</h3>
                    <input
                        type="number"
                        min="0"
                        onChange={handleWithdrawAmount}
                    />
                    <button onClick={() => setShowConfirmation(true)}>
                        Withdraw
                    </button>
                </div>
            )}
        </>
    );
};

export default Withdraw;