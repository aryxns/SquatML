import React from "react";
import Webcam from "react-webcam";
import ReactSpeedometer from "react-d3-speedometer"
import * as poseDetection from '@tensorflow-models/pose-detection';
import * as tf from '@tensorflow/tfjs-core';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import '@tensorflow/tfjs-backend-webgl'
import Loader from 'react-loader-advanced';

function HomePage(){
  const [angle, setAngle] = React.useState(null);
  const name = localStorage.name;
  const [loading, setLoading] = React.useState(true);
  let repcount = 0;
  const [reps, setRep] = React.useState(0); 
  const [isActive, setisActive] = React.useState(false);
  const [time, setTime] = React.useState(300);  
  const webcamRef = React.useRef(null);
  localStorage.setItem("reps", 0);
  const myreps = localStorage.getItem("reps");
  window.onload = async function(){
    var image = "Aryan.jpg";
    var img = new Image();
    img.src = image;
    const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
    const poses = await detector.estimatePoses(img);
    var sign = window.prompt("Enter your name: ");
    localStorage.setItem("name", sign);
    setTimeout(()=>{setLoading(false)}, 7000);
  }

  function handleStart(){
    setRep(0);
    setisActive(true);
    setTimeout(()=>{video_calc()}, 1000)
    setTimeout(()=>{video_calc()}, 2000)
    setTimeout(()=>{video_calc()}, 3000)
    setTimeout(()=>{video_calc()}, 4000)
    setTimeout(()=>{video_calc()}, 5000)
    setTimeout(()=>{video_calc()}, 6000)
    setTimeout(()=>{video_calc()}, 7000)
    setTimeout(()=>{video_calc()}, 8000)
    setTimeout(()=>{video_calc()}, 9000)
    setTimeout(()=>{video_calc()}, 10000)
    setTimeout(()=>{video_calc()}, 11000)
    setTimeout(()=>{video_calc()}, 12000)
    setTimeout(()=>{video_calc()}, 13000)
    setTimeout(()=>{video_calc()}, 14000)
    setTimeout(()=>{video_calc()}, 15000)
    setTimeout(()=>{video_calc()}, 16000)
    setTimeout(()=>{video_calc()}, 17000)
    setTimeout(()=>{video_calc()}, 18000)
    setTimeout(()=>{video_calc()}, 19000)
    setTimeout(()=>{video_calc()}, 20000)
    setTimeout(()=>{video_calc()}, 21000)
    setTimeout(()=>{video_calc()}, 22000)
    setTimeout(()=>{video_calc()}, 23000)
    setTimeout(()=>{video_calc()}, 24000)
    setTimeout(()=>{video_calc()}, 25000)
    setTimeout(()=>{video_calc()}, 26000)
    setTimeout(()=>{video_calc()}, 27000)
    setTimeout(()=>{video_calc()}, 28000)
    setTimeout(()=>{video_calc()}, 29000)
    setTimeout(()=>{video_calc()}, 30000)
    setTimeout(()=>{video_calc()}, 31000)
    setTimeout(()=>{video_calc()}, 32000)
    setTimeout(()=>{video_calc()}, 33000)
    setTimeout(()=>{video_calc()}, 34000)
    setTimeout(()=>{video_calc()}, 35000)
    setTimeout(()=>{video_calc()}, 36000)
    setTimeout(()=>{video_calc()}, 37000)
    setTimeout(()=>{video_calc()}, 38000)
    setTimeout(()=>{video_calc()}, 39000)
    setTimeout(()=>{video_calc()}, 40000)
    setTimeout(()=>{video_calc()}, 41000)
    setTimeout(()=>{video_calc()}, 42000)
    setTimeout(()=>{video_calc()}, 43000)
    setTimeout(()=>{video_calc()}, 44000)
    setTimeout(()=>{video_calc()}, 45000)
    setTimeout(()=>{video_calc()}, 46000)
    setTimeout(()=>{video_calc()}, 47000)
    setTimeout(()=>{video_calc()}, 48000)
    setTimeout(()=>{video_calc()}, 49000)
    setTimeout(()=>{video_calc()}, 50000)
    setTimeout(()=>{video_calc()}, 51000)
    setTimeout(()=>{video_calc()}, 52000)
    setTimeout(()=>{video_calc()}, 53000)
    setTimeout(()=>{video_calc()}, 54000)
    setTimeout(()=>{video_calc()}, 55000)
    setTimeout(()=>{video_calc()}, 56000)
    setTimeout(()=>{video_calc()}, 57000)
    setTimeout(()=>{video_calc()}, 58000)
    setTimeout(()=>{video_calc()}, 59000)
    setTimeout(()=>{localStorage.setItem("reps", reps);}, 60000)
    setTimeout(()=>{window.location.href = "/thanks"}, 61000)
  };

  async function video_calc(){
    const calVid = document.createElement("video");
    var stream = (webcamRef.current.stream);
    calVid.srcObject = stream;
    calVid.width = 200;
    calVid.height = 200;
    calVid.play();
    const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
    const poses = await detector.estimatePoses(calVid);
    const keys = (poses[0].keypoints);
    const rs = keys[16];
    const re = keys[14];
    const rw = keys[12];
    const elbow_flexion = Math.atan2(rs['y'] - re['y'], rs['x'] - re['x']) - Math.atan2(rw['y'] - re['y'], rw['x'] - re['x']) * (180/Math.PI)
    console.log(elbow_flexion)
    const answer = Math.abs(elbow_flexion);
    const result = 90 - answer;
    const finres = Math.round(Math.abs(result))
    //console.log(right_elbow, right_wrist, elbow_flexion);
    setAngle(finres);
    if (finres < 90 && finres > 60){
      const adding = repcount + 1;
      repcount += 1;
      setRep(adding);
      console.log(adding);
    }
  };
  return(
    <div>
    <div className="w-screen bg-gray-900 fixed max-h max-w h-full">
    <div className="relative float-left left-24 top-24">
        <Webcam className="rounded-lg"
          audio={false}
          height={1280}
          mirror={true}
          screenshotFormat="image/jpeg"
          ref={webcamRef}
          width={720} />
        </div>
        <div className="float-right mr-40">
        <Loader backgroundStyle={{backgroundColor: 'black'}} show={loading} message={'loading'}>
        <button onClick={handleStart} className="relative font-mono font-bold top-10 right-10 m-10 bg-blue-900 p-3 text-white text-lg">START SQUATS</button>
          <div className="text-white font-bold mt-10 relative overflow-hidden 0 w-72 h-72">
              <h1 className="text-2xl">Squat Angle: {angle}</h1>
              <h1 className="text-2xl mt-10 ">Reps: {reps}</h1>
              <div className="mt-20">
              <ReactSpeedometer minValue={0} value={angle} maxValue={90} className="mt-20"/>
              </div>
          </div>
          {isActive ? (<div className="mt-10">
            <CountdownCircleTimer
            isPlaying
            duration={60}
            colors={[
              ['#004777', 0.33],
              ['#F7B801', 0.33],
              ['#A30000', 0.33],
            ]}
          ></CountdownCircleTimer></div>
          ): (<h1 className="mt-5 text-lg text-white w-80 ">Position the camera at an angle of 70* and show your body upto the stomach</h1>)}
           </Loader>
        </div>
    </div>
   
    </div>
  )
}

export default HomePage;