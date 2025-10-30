import React, { useContext, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";

function Task(props) {

  const [check, setCheck] = useState(props.completed);
  // const id=props.id;
  // console.log(id);

 function handleCheck(e) {
  
  const isChecked = e.target.checked; // get new checkbox state
  console.log(props.id);
  fetch(`http://localhost:8080/tasks/${props.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed: isChecked }),
  })
    .then((res) => {
      if (res.ok) {
        console.log("Task updated successfully");
        setCheck(isChecked);
      } else {
        console.error("Failed to update task");
      }
    })
    .catch((err) => console.error("Error:", err));
}

  const catColor = {
    work: {
      text: "text-[hsl(240,60%,60%)]",
      bg: "bg-[hsl(240,60%,95%)]",
      border: "border-[hsl(240,60%,80%)]",
    },
    home: {
      text: "text-green-500",
      bg: "bg-green-100",
      border: "border-green-200",
    },
    casuals: {
      text: "text-yellow-500",
      bg: "bg-yellow-100",
      border: "border-yellow-200",
    },
  };

  const styles=catColor[props.cat];

  const propDate = new Date(props.date);
  const date = propDate.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

  return (
    <>
      {/* <span></span> */}
      <div
        className={
          check
          ? `w-[350px] bg-black/8 border rounded-xl p-5 border-gray-300 hover:shadow-md`
            : `w-[350px] bg-white border rounded-xl p-5 border-gray-300 hover:shadow-md`
        }
      >
        <div className="flex flex-row gap-2 justify-between items-center">
          <div className="flex items-center space-x-2 relative">
            {/* Perfectly Centered Small Round Checkbox */}
            <div className="relative flex items-center justify-center">
              <input
                onChange={handleCheck}
                id="delete"
                type="checkbox"
                checked={check}
                className="peer w-4 h-4 appearance-none rounded-full border border-[hsl(240,60%,60%)] 
                 checked:bg-[hsl(240,60%,60%)] checked:border-[hsl(240,60%,60%)] 
                 focus:ring-0 cursor-pointer"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute w-[10px] h-[10px] hidden peer-checked:block pointer-events-none"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            {/* Label */}
            {check ?
            (
              <label className=" line-through font-semibold cursor-default select-none">
                {props.title}
              </label>
            ): (
              <label className="font-semibold cursor-default select-none">
                {props.title}
              </label>
            )}
          </div>

          <p className={`px-2.5 text-sm border-1 ${styles.border} ${styles.text} ${styles.bg} rounded-xl`}>
            {props.cat}
          </p>
        </div>
        <div className="text-sm  text-gray-500 py-2 gap-3 flex flex-col">
          <p className="min-h-10">{props.desc}</p>
          <p className="flex items-center gap-1 ">
            <CiCalendarDate size={18} />
            {date}
          </p>
        </div>
      </div>
    </>
  );
}

export default Task;
