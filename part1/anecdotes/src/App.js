import React, { useState } from "react";
import "./App.css";
import Butoon from "./Butoon";

function App() {
  
  /**
   * numRandom()
   * @param {*} min
   * @param {*} max
   * @returns Return random number between min and max
   */
  const random = (min, max) => Math.floor(Math.random() * (max - min));
  

  const mayor = (array) => {
    let value = 0;
    for(const key in array) {
      if(array[key] > value) {
        value = array[key];
        var index = key;
      }
    }
    return [value, index];
  }

  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(0)
  
  // console.log(`Votos ${votes}, vote ${vote} selected ${selected} Mayor numero de votes ${mayor(votes)[0]} ${mayor(votes)[1]}`);  
  return (
    <div className="App">
      <h1>Anecdotes</h1>
      {anecdotes[selected]}
      <h3>Votes</h3>
      {votes[selected]}
      <br />
      <br />
      <br />
      <Butoon
        name="Vote"
        onClick={() =>   {
          votes[selected] += 1
          setVote(vote + 1)}
        }
        />
      <Butoon
        name="next anecdote"
        onClick={() => {
          setSelected(random(0,anecdotes.length))
          setVote(selected)
        }
      }
      />
      <h1>Anecdote with most cotes</h1>
      {anecdotes[mayor(votes)[1]]}
      <h3>Votes</h3>
      {mayor(votes)[0]}
    </div>
  );
}
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const votes = [0,0,0,0,0,0]

export default App;
