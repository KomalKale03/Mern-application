import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/NewUser.style.css";
import { createNewUser } from "../api/Api";
import Navbar from "../components/Navbar";



const CreateNewUser = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    // const [showForm, setShowForm] = useState(false);
    // const [creationConfirmed, setCreationConfirmed] = useState(false);

    // const toggleCreate = () => {
    //     setShowForm(!showForm);
    //     setCreationConfirmed(false);
    // };
    const [users, setUsers] = useState("");

    const handleConfirmCreateNewUser = () => {
        createNewUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
        })
            .then((response) => {
                setFirstName("");
                setLastName("");
                setEmail("");
                // setCreationConfirmed(true);
                console.log("confirm created user res:", response);
                setUsers([...users, response.data]);
                window.alert("User created successfully");
                navigate("/UsersList");

            })
            .catch((error) => {
                console.log("error creating user", error);
            });
    };

    // const handleCancelCreateNewUser = () => {
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     // setShowForm(false);
    // };

    return (
        <div> <Navbar />
        <div className="create-new-user-container">
            {/* {!creationConfirmed && ( */}
            <>
                {/* {showForm ? ( */}
                <div className="form-container">
                    <input
                        type="text"
                        placeholder="First name"
                        value={firstName}
                        onChange={(event) =>
                            setFirstName(event.target.value)
                        }
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(event) =>
                            setLastName(event.target.value)
                        }
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        }
                    />
                    <button onClick={handleConfirmCreateNewUser}>
                        Create
                    </button>
                    <div class="toast align-items-center" role="alert" aria-live="assertive" aria-atomic="true">
                        <div class="d-flex">
                            <div class="toast-body">
                                Hello, world! This is a toast message.
                            </div>
                            <button onClick={handleConfirmCreateNewUser}>
                        Create
                    </button>
                        </div>
                    </div>
                    {/* <button onClick={handleCancelCreateNewUser}>
                                Cancel
                            </button> */}
                </div>
                {/* :(
                        <button >Create New user</button>
                    ) */}
            </>

        </div>
        </div>
    );
};

export default CreateNewUser;