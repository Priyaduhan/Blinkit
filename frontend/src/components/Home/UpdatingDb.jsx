import React, { useEffect } from "react";

const UpdatingDb = () => {

    async function updatingDb(){

     const response =    await fetch("http://localhost/signup/:dbId",{
        method:"POST"
     })
    }


  return (
    <div>
      <p>Updating db </p>
    </div>
  );
};

export default UpdatingDb;
