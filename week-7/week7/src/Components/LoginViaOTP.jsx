import React, { useEffect, useRef, useState } from "react";
import "./LoginViaOTP.css";
export default function LoginViaOTP() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const [otp1, setotp1] = useState("");
  const [otp2, setotp2] = useState("");
  const [otp3, setotp3] = useState("");
  const [otp4, setotp4] = useState("");
  const [openOTP, setopenOTP] = useState(false);
  const [Mobileno, setMobileno] = useState("");
  function sendOTP() {
    if (!Mobileno || Mobileno.toString().length !== 10) {
      alert("Mobile number should consist of 10 digits");
    } else {
      setopenOTP(true);
    }
  }
  // function
  function loginFn() {
    let finalOTP = String(otp1) + String(otp2) + String(otp3) + String(otp4);
    return alert(`Your final OTP is: ${finalOTP}`);
  }

  function changeFocus(e, i) {
    let sentValue = Number(e.target.value)%10;
    if (i === 1) {
      setotp1(String(sentValue));
      if(sentValue){
      ref2.current.focus();}
    }
    if (i === 2) {
      setotp2(String(sentValue));
      if(sentValue){
      ref3.current.focus();}
    }
    if (i === 3) {
      setotp3(String(sentValue));
      if(sentValue){
      ref4.current.focus();}
    }
    if (i === 4) {
      setotp4(String(sentValue));
    }
  }

  useEffect(() => {
    if (openOTP && ref1.current) {
      ref1.current.focus();
    }
  }, [openOTP]);
  return (
    <div className="main-container">
      <div className="sub-div">
        <div id="content-div">
          <div className="parent-div">
            <h3>Login Via OTP</h3>
          </div>
          {!openOTP ? (
            <div>
              <div className="parent-div">
                <input
                  type="number"
                  value={Mobileno}
                  // maxLength="10"
                  min="1000000000"
                  max="9999999999"
                  onChange={(e) => setMobileno(e.target.value)}
                  placeholder="Enter your mobile number"
                  id="input-mobile"
                />
              </div>
              <div className="parent-div">
                <button className="btn-otp" onClick={sendOTP}>
                  Send OTP
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div>
                <input
                  type="number"
                  className="otp-input"
                  ref={ref1}
                  value={otp1}
                 
                  onChange={(e) => changeFocus(e, 1)}
                  // autoFocus
                />
                <input
                  type="number"
                  className="otp-input"
                  ref={ref2}
                  value={otp2}
                
                  onChange={(e) => changeFocus(e, 2)}
                />
                <input
                  type="number"
                  className="otp-input"
                  ref={ref3}
                  value={otp3}
                 
                  onChange={(e) => changeFocus(e, 3)}
                />
                <input
                  type="number"
                  className="otp-input"
                  ref={ref4}
                  value={otp4}
               
                  onChange={(e) => changeFocus(e, 4)}
                />
              </div>
              <div className="parent-div">
                <button className="btn-otp" onClick={loginFn}>
                  Login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
