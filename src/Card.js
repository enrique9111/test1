import { useEffect, useState } from "react"




export default function Card({ curCard, handleClick, side, showResults}){
    const [active, setActive] = useState(false)
    const results = {left: curCard.left.wins/(curCard.left.wins+curCard.right.wins)*100, right:curCard.right.wins/(curCard.left.wins+curCard.right.wins)*100}
    useEffect(function(){
        setActive(false)
    }, [curCard])

    return (
        showResults?
        <div className={`results ${side}`}>
            <h1>{Math.round(results[side])}%</h1>
        </div>
        :
        <div className={`${side}`} onMouseEnter={()=>(setActive(true))} onMouseLeave={()=>setActive(false)} onClick={()=>{handleClick(`${side}`)}}>
            <h1 className="description" style={active?{animation: ".2s ease 0s 1 normal forwards running scrollUp"}:{animation: ".2s ease 0s 1 normal forwards running scrollDown"}}>{curCard[side].description}</h1>
        </div>
    )
}