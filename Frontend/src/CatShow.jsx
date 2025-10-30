import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Task from "./Task";

function CatShow() {
  const { cat } = useParams();
  // console.log(cat);

  const style = {
    work: {
      text: "text-blue-400",
    },
    home: {
      text: "text-green-400",
    },
    casuals: {
      text: "text-yellow-400",
    },
  };
  const catt = style[cat];
  const [data, setData] = useState([]);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    fetch(`http://localhost:8080/tasks/${userId}?cat=${cat??"work"}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err.message));
  },[cat]);

  
  return (
    <>
      <div className="min-w-[1200] min-h-screen px-5 py-10">
        <div>
          <h1 className={`text-3xl font-bold ${catt.text}`}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)} Tasks
          </h1>
          <p className="py-2 text-[16px] text-gray-500">
            {data.length} tasks in this catogory
          </p>
        </div>

        <div className="grid grid-cols-3 py-5 justify-start gap-5">
          {data.map((dta,index)=>(
            <Task key={dta.id} id={dta.id} title={dta.title} cat={dta.cat} desc={dta.description} completed={dta.completed} date={dta.date}/>
          ))}
        </div>
      </div>
    </>
  );
}

export default CatShow;
