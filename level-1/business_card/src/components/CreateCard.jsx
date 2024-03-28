import React, { useState } from "react";
import "./CreateCard.css";
import { IoIosClose } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
export function CreateCard() {
  const [fullname, setfullname] = useState("");
  const [description, setdescription] = useState("");
  const [CurrInterests, setCurrInterests] = useState("");
  const [CurrSocialmedia, setCurrSocialmedia] = useState("");
  const [InterestsArr, setInterestsArr] = useState([]);
  const [SocialmediaArr, setSocialmediaArr] = useState([]);

  function addInterests() {
    if (!CurrInterests) {
      return alert("Please provide interest to add");
    }
    setInterestsArr([
      ...InterestsArr,
      {
        id: uuidv4(),
        name: CurrInterests,
      },
    ]);
    setCurrInterests("");
  }

  function addSocialmedia() {
    if (!CurrSocialmedia) {
      return alert("Please provide social media to add");
    }
    setSocialmediaArr([
      ...SocialmediaArr,
      {
        id: uuidv4(),
        handles: CurrSocialmedia,
      },
    ]);
    setCurrSocialmedia("");
  }

  function cancalInterests(id) {
    const index = InterestsArr.findIndex((details) => details.id === id);
    InterestsArr.splice(index, 1);
    setInterestsArr([...InterestsArr]);
  }

  function cancalSocialmediaHandles(id) {
    const index = SocialmediaArr.findIndex((handle) => handle.id === id);
    SocialmediaArr.splice(index, 1);
    setSocialmediaArr([...SocialmediaArr]);
  }

   function createCard() {
    try {
      fetch("http://localhost:8000/Card", {
        method: 'post',
        headers: {'content-type': 'application/json'},
        data: {
          fullname: fullname,
          description: description,
          Interests: InterestsArr,
          SocialmediaHandles: SocialmediaArr
        }
      })
        .then((response) => response.json())
        .then((res) => {
          if(res.status === 201){
            alert(res.data.msg);
          }
        });
    } catch (error) {
      console.log(error);
      alert(error.response.data.error);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "40%",
          backgroundColor: "rgb(255, 255, 255)",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0 4px 8px 0 black",
        }}
      >
        <div
          style={{
            textAlign: "center",
            color: "#1763e5",
            fontFamily: "system-ui",
          }}
        >
          <h1>Create Card</h1>
        </div>

        <div>
          <input
            className="inputBox"
            value={fullname}
            placeholder="Full Name"
            onChange={(e) => setfullname(e.target.value)}
          />
        </div>
        <div>
          <textarea
            rows={10}
            value={description}
            className="inputBox"
            placeholder="Description"
            onChange={(e) => setdescription(e.target.value)}
          />
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              className="inputBox"
              placeholder="interests"
              value={CurrInterests}
              onChange={(e) => setCurrInterests(e.target.value)}
            />
            <button
              style={{
                backgroundColor: "#1763e5",
                border: "0px",
                borderRadius: "10px",
                color: "white",
                height: "34px",
                // width: "110px",
              }}
              onClick={addInterests}
            >
              Add
            </button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {InterestsArr.map((item) => {
              return (
                <div
                  style={{
                    backgroundColor: "#1763e5",
                    color: "white",
                    height: "20px",
                    width: "fit-content",
                    padding: "5px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "5px",
                    margin: "5px",
                  }}
                >
                  {item.name}
                  <IoIosClose onClick={() => cancalInterests(item.id)} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              className="inputBox"
              placeholder="Social media"
              value={CurrSocialmedia}
              onChange={(e) => setCurrSocialmedia(e.target.value)}
            />
            <button
              style={{
                backgroundColor: "#1763e5",
                border: "0px",
                borderRadius: "10px",
                color: "white",
                height: "34px",
                // width: "110px",
              }}
              onClick={addSocialmedia}
            >
              Add
            </button>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {SocialmediaArr.map((item) => {
            return (
              <div
                style={{
                  backgroundColor: "#1763e5",
                  color: "white",
                  height: "20px",
                  width: "fit-content",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "5px",
                  margin: "5px",
                }}
              >
                {item.handles}
                <IoIosClose onClick={() => cancalSocialmediaHandles(item.id)} />
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <button
            style={{
              width: "80px",
              height: "45px",
              borderRadius: "5px",
              border: "0px solid black",
              backgroundColor: "#1763e5",
              color: "white",
            }}
            onClick={createCard}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
