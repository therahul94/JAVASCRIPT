import React, { useState } from "react";
import "./BirthdayWisher.css";

export default function BirthdayWisher() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  return (
    <div>
      {!done ? (
        <div className="img-container">
          <div className="input-container">
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "20px",
                  height: "25px",
                }}
              >
                {" "}
                Enter Your Name{" "}
              </p>
              <input
                style={{ width: "360px", display: "block" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                style={{
                  backgroundColor: "#00576e",
                  marginTop: "30px",
                  border: "0px #00576e",
                  color: "white",
                  width: "25%",
                  height: "31px",
                  borderRadius: "5px",
                }}
                onClick={() => setDone(true)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "black",
          }}
        >
          <div className="birthday-wish-card wishcard1">
            <h1>Happy Birthday Dear... It's party time!</h1>
            <h1>From {name}</h1>
            <WishcardFooter1 />
          </div>
          <div className="birthday-wish-card wishcard2">
            <h1>Happy Birthday Bro... Party kidhar hai be?</h1>
            <h1>From {name}</h1>
            <WishcardFooter2 />
          </div>
          <div className="birthday-wish-card wishcard3">
            <h1>Happy Birthday Darling...</h1>
            <h1>From {name}</h1>
            <WishcardFooter3 />
          </div>
        </div>
      )}
    </div>
  );
}

function WishcardFooter1() {
  return (
    <div className="wishcard-Footer">
      <div className="hashtags">#Party_Time</div>
    </div>
  );
}

function WishcardFooter2() {
  return (
    <div className="wishcard-Footer">
      <div className="hashtags">#ChutiyaBanayaTumko</div>
    </div>
  );
}

function WishcardFooter3() {
  return (
    <div className="wishcard-Footer">
      <div className="hashtags">#Party_Time</div>
      <div className="hashtags">#Masti</div>
    </div>
  );
}
