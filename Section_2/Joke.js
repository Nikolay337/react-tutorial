import React from "react" 

export default function Joke(props) {
  return (
    <div>
      <h3 style={{display: props.setup ? "block" : "none" }}>{props.setup}</h3>
      <p>{props.punchline}</p>
      <hr />
    </div>
  )
}