import React from "react";
import {useState, useEffect} from "react"

const Dummy = ()=>{
    const  [data, setData]= useState([])
    const fetchapi = async ()=>{
    const value= await fetch("https://jsonplaceholder.typicode.com/todos")
    const valuedata= await value.json();
    console.log(data)
    setData(valuedata)
}

useEffect(()=>{
    fetchapi();

}, [])

    return (
        <>
        <div className="container">
        {
            data.map((ele) => { 
            return  (
                <>
                <p>{ele.id} {ele.title}</p>
                <p>{ele.id} {ele.title}</p>
                </>
            )
            })
        }
        </div> 
        </>
    )
}


export default Dummy