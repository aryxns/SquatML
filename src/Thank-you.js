import React from "react";

function ThankYou(){
  const name = localStorage.name;
  const reps = localStorage.reps;
  var link = "https://twitter.com/intent/tweet?text=I%20just%20did%20" + String(reps) + "%20squats%20in%20one%20minute%20on%20https://squatml.aryxns.repl.co/"; 
  return(
    <div className="w-screen bg-gray-900 fixed max-h max-w h-full">
    <h1 className="mt-40 text-3xl text-white">Congrats {name}, you did {reps} squats in 1 minute.</h1>
    <a className="m-10 relative top-20 uppercase text-lg text-white bg-blue-400 p-3" href={link}>Tweet this out!</a>
    </div>
  )
}

export default ThankYou;