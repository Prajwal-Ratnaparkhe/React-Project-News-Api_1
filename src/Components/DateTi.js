import React, { useState } from "react";

const DateTi = () => {
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString("en-GB");
  const [ctime, setCtime] = useState(time);
  const [cdate, setDate] = useState(date);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time); 
  };
  const UpdateDate = () => {
    date = new Date().toLocaleDateString("en-GB");
    setDate(date);
  };

  setInterval(UpdateTime, 1000);
  setInterval(UpdateDate, 1000);

  return (
    <div>
      Time : <span> {ctime} </span> | Date : <span> {cdate} </span>
    </div>
  );
};

export default DateTi;
