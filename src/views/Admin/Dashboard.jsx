import { useState, useEffect } from "react";
import { getUsers } from "../../api/Api";
import TransactionList from "./TransactionList";
import Deposit from "../Deposit";
import Withdraw from "../Withdraw";
import "../styles/UserList.style.css";
import "../styles/NewUser.style.css";
const actionComponents = {
    transfer: TransactionList,
    deposit: Deposit,
    withdraw: Withdraw,
};

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [currentAction, setCurrentAction] = useState("");
    // const [showUsersList, setShowUsersList] = useState(true);

    useEffect(() => {
        getUsers()
            .then((data) => setUsers(data))
            .catch((error) => {
                console.error("Error fetching users", error);
            });
    }, []);

    // const handleToggleUsersList = () => {
    //     // setShowUsersList((prevShowUsersList) => !prevShowUsersList);
    //     setSelectedUser(null);
    //     setCurrentAction("");
    // };

    const handleUserSelection = (user) => {
        setSelectedUser((prevSelectedUser) => {
            return prevSelectedUser && prevSelectedUser._id === user._id
                ? null
                : user;
        });
        setCurrentAction("");
    };

    // const handleAction = (action) => {
    //     setCurrentAction((prevCurrentAction) =>
    //         prevCurrentAction === action ? "" : action
    //     );
    // };

    const renderActionComponent = () => {
        const ActionComponent = actionComponents[currentAction];
        return ActionComponent && selectedUser ? (
            <ActionComponent
                users={users}
                selectedUser={selectedUser}
                setCurrentAction={setCurrentAction}
            />
        ) : null;
    };

    return (
        <div className="">
            {/* <button onClick={handleToggleUsersList}>
                {showUsersList ? "Hide Users List" : "Show Users List"}
            </button> */}

                <ol className="listed">
                    {users.map((user) => (
                        <li
                            key={user._id}
                            onClick={() => handleUserSelection(user)}
                            className={
                                selectedUser && selectedUser._id === user._id
                                    ? "selected"
                                    : ""
                            }>
                            <a href='#'>{user.firstName} {user.lastName}</a>
                        </li>
                        
                    ))}
                </ol>

            {selectedUser && (
                <div className="users-data">
                    <h2>
                        {selectedUser.firstName} {selectedUser.lastName}
                    </h2>
                    <h5><p>Email: {selectedUser.email}</p></h5>
                     </div>
                     )} 

            {renderActionComponent()}
        </div>
    );
};

export default Dashboard;

