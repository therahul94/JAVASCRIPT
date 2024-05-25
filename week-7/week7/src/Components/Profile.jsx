import React from "react";
import "./Profile.css";
export default function Profile() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="profile-card">
        <div style={{ height: "40%", backgroundColor: "black" }}></div>
        <div
          style={{
            height: "40%",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "white",
              borderRadius: "50%",
              position: "absolute",
              top: "150px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="/random-person.jpg"
              alt="no-val"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          </div>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ fontFamily: "math" }}>
              <b>Joey Tribiani</b>
              <span style={{ marginLeft: "10px", color: "gray" }}>32</span>
              <div style={{ marginTop: "10px", color: "gray" }}>London</div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "20%",
            borderTop: "1px solid gray",
            fontFamily: "math",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div>
                <b>80K</b>
              </div>
              <div style={{color: "gray"}}>Followers</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div>
                <b>803K</b>
              </div>
              <div style={{color: "gray"}}>Likes</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div>
                <b>1.4K</b>
              </div>
              <div style={{color: "gray"}}>Photos</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
