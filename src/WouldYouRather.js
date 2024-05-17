import { useState } from "react"
import Card from "./Card"




export default function WouldYouRather({ list }){
    const [curCard, setCurCard] = useState(list[Math.round(Math.random() * (list.length - 1))])
    const [showResults, setShowResults] = useState(false)


    async function handleClick(winner){
      if(winner == "left"){
        curCard.left.wins++
      }else{
        curCard.right.wins++
      }
      setShowResults(true)
      await setTimeout(()=>setShowResults(false), 1000)
      setCurCard(list[Math.round(Math.random() * (list.length - 1))])
    }

    return(
      <div className="game">
        <h1 className="title">Would You Rather?</h1>
        <div className="choices">
        <Card handleClick={handleClick} curCard={curCard} side={"left"} showResults={showResults} />
        <Card handleClick={handleClick} curCard={curCard} side={"right"} showResults={showResults} />
        </div>
      </div>
    )
}