import React, {useState} from "react";
import "./App.css";
import { Button } from "./Button";
import { Stadistic } from "./Stadistic";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = () =>  good + neutral + bad;
  const average = () => all() / 3;
  const positive = () => (good * 100 / all());

  if(all() !== 0){
     return (
    <div className={"container"}>
      <h1>Give Feedback</h1>
      <Button name={"good"} onclick={()=> setGood(good + 1)} />
      <Button name={"neutral"} onclick={()=> setNeutral(neutral + 1)} />
      <Button name={"bad"} onclick={()=> setBad(bad + 1)} />
      <h2>STATISTICS</h2>
      <Stadistic  name = "Good" info={()=> good} />
      <Stadistic  name = 'Neutral' info={()=> neutral}/>
      <Stadistic  name = 'Bad' info={() => bad}/>
      <Stadistic  name = 'All' info={() => all()}/>
      <Stadistic  name = 'Average' info={() => average().toFixed(2)}/>
      <Stadistic  name = 'Positive' info={() => positive().toFixed(2)}/>
      </div>
  )}else{
     return (
      <div className={"container"}>
      <h1>Give Feedback</h1>
      <Button name={"good"} onclick={()=> setGood(good + 1)} />
      <Button name={"neutral"} onclick={()=> setNeutral(neutral + 1)} />
      <Button name={"bad"} onclick={()=> setBad(bad + 1)} />
      <h2>STATISTICS</h2>
      <h2>No feedback given</h2>
      </div>
      )
  }
};
