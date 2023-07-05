import React, { useState, useEffect } from "react";
import "../styles/Transfer.style.css";


const TransactionList = ({ selectedUser, users, setCurrentAction }) => {
  const [transferAmount, setTransferAmount] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);


  const handleTransferTarget = (targetUser) => {
    console.log(
      `Transferred funds from ${selectedUser.firstName} ${selectedUser.lastName} to ${targetUser.firstName} ${targetUser.lastName}`
    );
    setCurrentAction("");
  };

  // const handleTransferAmount = (event) => {
  //     // setTransferAmount(Number(event.target.value));
  // };

  const handleConfirmTransfer = () => {
    const targetUser = users.find((user) => user._id !== selectedUser._id);
    window.alert("Amount transfered successfully");
    console.log(
      `Transferred $${transferAmount} from ${selectedUser.firstName} ${selectedUser.lastName} to ${targetUser.firstName} ${targetUser.lastName}`
    );
    setShowConfirmation(false);
    handleTransferTarget(targetUser);
  };

  const handleTransferCancel = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      {showConfirmation ? (
        <div className="users-data">
          <h3>Confirm Transfer:</h3>
          <p>
            Transfer $ {transferAmount} from{" "}
            {selectedUser.firstName} {selectedUser.lastName} to{" "}
            {
              users.find((user) => user._id !== selectedUser._id)
                .firstName
            }{" "}
            {
              users.find((user) => user._id !== selectedUser._id)
                .lastName
            }
          </p>
          <button onClick={handleConfirmTransfer}>Confirm</button>
          <button onClick={handleTransferCancel}>Cancel</button>
        </div>
      ) : (
        <div className="users-data">
          <h3>Enter transfer amount:</h3>
          <input
            type="number"
            min="0"
          />
          <h4>Select target user to transfer funds to:</h4>
          <ol className="listed">
            {users
              .filter((user) => user._id !== selectedUser._id)
              .map((user) => (
                <li
                  key={user}
                  onClick={() => setShowConfirmation(true)}
                >
                  <a href="#">{user.credit} {user.balance}</a>
                </li>
              ))}
          </ol>
        </div>
      )}
    </>
  );
};

export default TransactionList;
