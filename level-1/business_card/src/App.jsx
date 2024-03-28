import React, { useState } from "react";
import { CreateCard } from "./components/CreateCard";

function App() {
  return (
    <>
      <div className="demo">
        <CreateCard />
        {/* <CardCompo
          name="Rahul"
          description="A TA in the 100xDevs cohort"
          interests={[
            { id: 1, name: "Ionic" },
            { id: 2, name: "Open Source" },
          ]}
          socialMedia={[
            { id: 1, handles: "LinkedIn" },
            { id: 2, handles: "Twitter" },
          ]}
        /> */}
      </div>
    </>
  );
}

const CardCompo = React.memo(
  ({ name, description, socialMedia, interests }) => {
    return (
      <div
        style={{
          width: "20%",
          backgroundColor: "rgb(255, 255, 255)",
          /* border: 2px solid red; */
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0 4px 8px 0 black"
      
        }}
      >
        <h1>{name}</h1>
        <p>{description}</p>
        <div>
          <b>Interests</b>
        </div>
        <div style={{ marginTop: "10px" }}>
          {interests?.map((val) => {
            return <div key={val.id}>{val.name}</div>;
          })}
        </div>
        <div style={{ marginTop: "10px" }}>
          {socialMedia?.map((val) => {
            return (
              <button
                style={{
                  color: "#ffffff",
                  backgroundColor: "blue",
                  marginRight: "10px",
                  height: "40px",
                  width: "90px",
                  border: "0px",
                  borderRadius: "5px",
                }}
                key={val.id}
              >
                {val.handles}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);

export default App;
