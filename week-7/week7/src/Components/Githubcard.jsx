import React, { useState } from "react";
import "./Githubcard.css";
import axios from "axios";
import { GoPeople } from "react-icons/go";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegFolderOpen, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
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
      <div className="main-container-data">
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
          <Link to={val?.html_url} target="blank_">
            <img
              src="/Github-icon.jpg"
              alt="no-image"
              style={{
                borderRadius: "50%",
                width: "40px",
                position: "absolute",
                top: "300px",
                right: "44%",
              }}
            />
          </Link>
          <p>
            <b style={{ fontSize: "30px", fontFamily: "system-ui" }}>
              {val?.name}
            </b>
            <div style={{ fontFamily: "system-ui" }}>{val?.login}</div>
          </p>
        </div>
        <p>
          {val?.bio ? (
            <div>
              <label>Bio:</label>
              <div>{val?.bio}</div>
            </div>
          ) : (
            <></>
          )}
          <Container style={{ marginTop: "15px" }}>
            <Row>
              <Col>
                <div className="details-div">
                  <label>
                    <GoPeople className="icons" />
                  </label>
                  <span>
                    <b>{val?.followers}</b> followers -
                  </span>
                  <span style={{ marginLeft: "4px" }}>
                    <b>{val?.following}</b> following
                  </span>
                </div>
              </Col>

              {val?.company ? (
                <Col>
                  <div className="details-div">
                    <label>
                      <HiOutlineBuildingOffice2 className="icons" />
                    </label>
                    <span>{val?.company}</span>
                  </div>
                </Col>
              ) : (
                <></>
              )}
              {val?.location ? (
                <Col>
                  <div className="details-div">
                    <label>
                      <IoLocationOutline className="icons" />
                    </label>
                    <span>{val?.location}</span>
                  </div>
                </Col>
              ) : (
                <></>
              )}

              {val?.email ? (
                <Col>
                  <div className="details-div">
                    <label>
                      <MdOutlineMailOutline className="icons" />
                    </label>
                    <span>{val?.email}</span>
                  </div>
                </Col>
              ) : (
                <></>
              )}

              {val?.twitter_username ? (
                <Col>
                  <div className="details-div">
                    <label>
                      <FaXTwitter className="icons" />
                    </label>
                    <span>{val?.twitter_username}</span>
                  </div>
                </Col>
              ) : (
                <></>
              )}

              <Col>
                <div className="details-div">
                  <label>
                    <FaRegFolderOpen className="icons" />
                  </label>
                  <span>
                    <b>{val?.public_repos}</b> Public Repository -
                  </span>
                  <span style={{ marginLeft: "4px" }}>
                    <b>{val?.public_gists}</b> Public Gists
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
          {val?.blog ? (
            <div>
              <label>Blog:</label>
              <div>{val?.blog}</div>
            </div>
          ) : (
            <></>
          )}
        </p>
      </div>
    </div>
  );
}
