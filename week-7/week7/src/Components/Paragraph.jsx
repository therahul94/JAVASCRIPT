import { useMemo, useState } from "react";
import "./Paragraph.css";

export default function Paragraph() {
  const [numberOfwords, setnumberOfwords] = useState("");
  const [paraResult, setparaResult] = useState("");
  function generateWords(){
    let alphabates = "abcdefghijklmnopqrstuvwxyz";
    let wordlength = Math.floor(Math.random()*4)+3;
    let randomWord = "";
    for(let i=0; i<wordlength; i++){
      let randomIndex = Math.floor(Math.random()*26);
      randomWord+=alphabates[randomIndex];
    }
    return randomWord;
  }
  function generatePara(){
    for(let i=0; i<numberOfwords; i++){
      setparaResult(parares=> parares+ generateWords()+" ");
    }
  };
  return (
    <div className="para-div">
      <h1>Para Generator</h1>
      <div>
        <input
          placeholder="Enter number of words"
          type="number"
          className="input-box"
          value={numberOfwords}
          onChange={(e)=>setnumberOfwords(e.target.value)}
        ></input>
        <button className="button" onClick={generatePara}>Generate</button>
      </div>
      <ShowParagraph para={paraResult}/>
    </div>
  );
}

function ShowParagraph({para}){
  return (
    <>{para} </>
  )
}
