import React, { useState } from "react";
import "./Githubcard.css";
import axios from "axios";
export default function Githubcard() {
  const [username, setusername] = useState("");
  const [githubInfo, setGithubInfo] = useState("");
  async function getGithubInfo() {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      if (res.status === 200) {
        setGithubInfo(JSON.stringify(res.data));
      }
    } catch (error) {
      console.log(error);
      return alert("something went wrong!");
    }
  }
  return (
    <div>
      <div className="main-container">
        <input
          type="text"
          placeholder="GitHub username"
          className="github-input"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />
        <button className="github-find-btn" onClick={getGithubInfo}>
          Find
        </button>
      </div>
      {githubInfo ? <Showgithubcard data={githubInfo} /> : <></>}
    </div>
  );
}

function Showgithubcard({ data }) {
  const val = JSON.parse(data);
  return (
    <div className="Showgithubcard-main-container">
      <div className="Showgithubcard-container">
        <div style={{ textAlign: "center" }}>
          <img
            src={val?.avatar_url}
            alt="no-image"
            style={{ borderRadius: "50%", width: "150px" }}
          />
          <p>
            <b style={{ fontSize: "30px", fontFamily: "system-ui" }}>
              {val?.name}
            </b>
            <div style={{ fontFamily: "system-ui" }}>{val?.login}</div>
          </p>
        </div>
        <p>
          <div>
            <label>Bio:</label>
            <div>{val?.bio}</div>
          </div>
          <p className="row">
            <div className="col-md-6">
                <label></label>
            </div>
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
          </p>
        </p>
      </div>
    </div>
  );
}
