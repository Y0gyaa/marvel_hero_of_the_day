'use client';
import React, { useState, useEffect } from 'react';
import Image from "next/image";




export default function Home() {
  require('dotenv').config();
  var [result,setresult] = useState([]);
  useEffect(() => {
    const {REACT_APP_API_URL} = process.env;
    console.log({REACT_APP_API_URL})
    fetch("https://gateway.marvel.com:443/v1/public/stories?limit=10&ts=1&apikey=55b7c82ac42b7acd2d511e67a58a9370&hash=093050e44786518763c661274ca02252")
   .then(response => response.json())
   .then(data => {
    var n = Math.floor(Math.random() * 11);
    if(result.length >= 0){
      setresult(data.data.results[n]);
    }
  });
  })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" max-w-2xl font-mono ">
       <div className="m-9">
        <p className="text-5xl text-orange-400 ">{(result.originalIssue != undefined)?result.originalIssue.name:"Hold up!"}</p>
        <h1 className="pt-4 text-2xl">{(result.title != undefined)?result.title:"We are loading comics..."}</h1> 
        </div>
        <div className="fixed right-3 bottom-6">
        <Image src="/Mlogo.png" alt='Marvel Comics Official Data' width={400} height={100}/>
        </div>
      </div> 
    </main>
  )
}