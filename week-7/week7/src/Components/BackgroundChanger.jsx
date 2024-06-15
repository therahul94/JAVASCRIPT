import React, { useState } from "react";
import "./BackgroundChanger.css";

export default function BackgroundChanger() {
    const [selectedColor, setSelectedColor] = useState('white');
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: "90vh",
          backgroundColor: selectedColor
        }}
      >
        <div
          style={{
            borderRadius: "10px",
            display: "flex",
            justifyContent: "space-around",
            width: "70%",
            boxShadow: "5px 10px 18px #888888",
            padding:"5px",
            backgroundColor: "white"
          }}
        >
          <button
            className="button-css"
            style={{
              borderRadius: "10px",
              width: "80px",
              height: "30px",
              backgroundColor: "red",
              border: "0px",
            }}
            onClick={()=>setSelectedColor("red")}
          >
            Red
          </button>
          <button
            className="button-css"
            style={{
              borderRadius: "10px",
              width: "80px",
              height: "30px",
              backgroundColor: "yellow",
              border: "0px",
            }}
            onClick={()=>setSelectedColor("yellow")}

          >
            Yellow
          </button>
          <button
            className="button-css"
            style={{
              borderRadius: "10px",
              width: "80px",
              height: "30px",
              backgroundColor: "black",
              border: "0px",
              color: "white",
            }}
            onClick={()=>setSelectedColor("black")}

          >
            Black
          </button>
          <button
            className="button-css"
            style={{
              borderRadius: "10px",
              width: "80px",
              height: "30px",
              backgroundColor: "purple",
              border: "0px",
            }}
            onClick={()=>setSelectedColor("purple")}

          >
            Purple
          </button>
          <button
            className="button-css"
            style={{
              borderRadius: "10px",
              width: "80px",
              height: "30px",
              backgroundColor: "green",
              border: "0px",
            }}
            onClick={()=>setSelectedColor("green")}

          >
            Green
          </button>
          <button
            className="button-css"
            style={{
              borderRadius: "10px",
              width: "80px",
              height: "30px",
              backgroundColor: "blue",
              border: "0px",
            }}
            onClick={()=>setSelectedColor("blue")}

          >
            Blue
          </button>
          <button
            className="button-css"
            style={{
              borderRadius: "10px",
              width: "80px",
              height: "30px",
              backgroundColor: "#FFA500",
              border: "0px",
            }}
            onClick={()=>setSelectedColor("#FFA500")}

          >
            Default
          </button>
        </div>
      </div>
    </div>
  );
}
