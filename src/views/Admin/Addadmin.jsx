import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
const Addadmin = () => {
  const navigate = useNavigate();
 
    const [admin, setAdmin] = useState({
        email: "",
        username: "",
        phone: "",
        password: "",
        gender: "",
      });
      // const [userType, setUserType] = useState("");
      // const [secretKey, setSecretKey] = useState("");
    
    
      const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target
        setAdmin({
          ...admin,
          [name]: value
        })
      }
    
      const PostData = async (e) => {
        e.preventDefault();
        const { email, username, phone, password, gender } = admin;
        const res = await fetch("api/admin/registerAdmin", {
          method: "POST",
          headers: {
            "Content-Type": "application/JSON"
          },
          body: JSON.stringify({
             email, username, phone, password, gender
    
          })
        });
    
        const data = await res.json();
        if (!data || data.status === 422) {
          window.alert("INVALID");
          console.log("INVALID");
        } else {
          window.alert("Congratulations");
          console.log("Congratulations");
          navigate("/login");


        }
      }
    
        // if(userType === "Admin" && secretKey !== "Komal"){
        //   e.preventDefault();
        //   alert("Invalid Code");
        // } else{
        //   e.preventDefault();
        //   const { email, username, account, phone, password, gender } = user;
        //   const res = await fetch("/register", {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/JSON"
        //     },
        //     body: JSON.stringify({
        //        email, username, account, phone, password, gender,userType
      
        //     })
        //   });
      
        //   const data = await res.json();
        //   if (!data || data.status === 422) {
        //     window.alert("INVALID");
        //     console.log("INVALID");
        //   } else {
        //     window.alert("Congratulations");
        //     console.log("Congratulations");
        //   }
        // }
    
      return (
        <Container>
          <div>
            <form method='POST' >
              {/* <h4 style={{ color: 'GrayText', display: 'inline', float: 'left' }}>Register as:</h4>
              <div className='form-check form-check-inline' style={{
                alignItems: "center",
                justifyContent: "center"
              }}>
                <input type="radio" className="form-check-input" id="radio01" name='ruler' value="Admin" onChange={(e) => setUserType(e.target.value)} />
                <label className="form-check-label" htmlFor="radio01">Admin</label>
              </div>
              <div className='form-check form-check-inline' id="top">
                <input type="radio" className="form-check-input" id="radio01" name='ruler' value="User" onChange={(e) => setUserType(e.target.value)} />
                <label className="form-check-label" htmlFor="radio01">User</label>
              </div> */}
              {/* {userType === "Admin" ? (
                <label>
                  <p className="label-txt">ENTER YOUR CODE</p>
                  <input type="text" className="input" name="email"  onChange={(e) => setSecretKey(e.target.value)} />
                  <div className="line-box">
                    <div className="line"></div>
                  </div>
                </label>
              ) : null} */}
              <label>
                <p className="label-txt">ENTER YOUR EMAIL</p>
                <input type="text" className="input" name="email" value={admin.email} onChange={handleChange} />
                <div className="line-box">
                  <div className="line"></div>
                </div>
              </label>
              <label>
                <p className="label-txt">ENTER YOUR NAME</p>
                <input type="text" className="input" name='username' value={admin.username} onChange={handleChange} />
                <div className="line-box">
                  <div className="line"></div>
                </div>
              </label>
              {/* {userType === "User" ? ( */}
              {/* <label>
                <p className="label-txt">ENTER YOUR ACCOUNT NO.</p>
                <input type="text" className="input" name='account' value={admin.account} onChange={handleChange} />
                <div className="line-box">
                  <div className="line"></div>
                </div>
              </label> */}
              {/* ) : null} */}
              <label>
                <p className="label-txt">ENTER YOUR PHONE NUMBER</p>
                <input type="text" className="input" name='phone' value={admin.phone} onChange={handleChange} />
                <div className="line-box">
                  <div className="line"></div>
                </div>
              </label>
    
              <label>
                <p className="label-txt">ENTER YOUR PASSWORD</p>
                <input type="text" className="input" name='password' value={admin.password} onChange={handleChange} />
                <div className="line-box">
                  <div className="line"></div>
                </div>
              </label>
              {/* <div className='container'> */}
              <h5 style={{ color: 'GrayText', display: 'inline', margin: '8px', padding: '2px' }}>Please Select Your Gender:</h5>
              <div className='form-check form-check-inline'>
                <input type="radio" className="form-check-input" id="radio01" name='gender' value="female" onChange={handleChange} />
                <label className="form-check-label" htmlFor="radio01">Female</label>
              </div>
              <div className='form-check form-check-inline' id="top">
                <input type="radio" className="form-check-input" id="radio01" name='gender' value="male" onChange={handleChange} />
                <label className="form-check-label" htmlFor="radio01">Male</label>
              </div>
              <div className='form-check form-check-inline'>
                <input type="radio" className="form-check-input" id="radio01" name='gender' value="others" onChange={handleChange} />
                <label className="form-check-label" htmlFor="radio01">Others</label>
              </div>
              <div className='button'>
                <button type="submit" value="register" onClick={PostData} >submit</button>
              </div>
            </form>
          </div>
        </Container >
      )
    
    }
    
    const Container = styled.div`
    body {
        background: #C5E1A5;
      }
      form {
        width: 60%;
        margin: 60px auto;
        background: #efefef;
        padding: 60px 120px 80px 120px;
        text-align: center;
        -webkit-box-shadow: 2px 2px 3px rgba(0,0,0,0.1);
        box-shadow: 2px 2px 3px rgba(0,0,0,0.1);
      }
      label {
        display: block;
        position: relative;
        margin: 40px 0px;
      }
      .label-txt {
        position: absolute;
        top: -1.6em;
        padding: 10px;
        font-family: sans-serif;
        font-size: .8em;
        letter-spacing: 1px;
        color: rgb(120,120,120);
        transition: ease .3s;
      }
      .input {
        width: 100%;
        padding: 10px;
        background: transparent;
        border: none;
        outline: none;
      }
      
      .line-box {
        position: relative;
        width: 100%;
        height: 2px;
        background: #BCBCBC;
      }
      
      .line {
        position: absolute;
        width: 0%;
        height: 2px;
        top: 0px;
        left: 50%;
        transform: translateX(-50%);
        background: #8BC34A;
        transition: ease .6s;
      }
      
      .input:focus + .line-box .line {
        width: 100%;
      }
      
      .label-active {
        top: -3em;
      }
      
      
      button {
        display: inline-block;
        padding: 12px 24px;
        background: rgb(220,220,220);
        font-weight: bold;
        color: rgb(120,120,120);
        border: none;
        outline: none;
        border-radius: 3px;
        cursor: pointer;
        transition: ease .3s;
      }
      
      button:hover {
        background: #8BC34A;
        color: #ffffff;
      }
    }`;

export default Addadmin;