import React, { useEffect } from "react";

const ShowingFirstname = () => {
  async function showdata() {
    const getSignupData = await fetch("http://localhost:8000/firstname", {
      method: "GET",
    });
    // console.log("data");

    const data = await getSignupData.json();
    console.log("data from db is ", data);
    // const arrayData = data.data;
    // // console.log("fetching array", data.data);
    // {
    //   arrayData.map((item, index) => {
    //     console.log(item.firstName);
    //   });
    // }
  }

  useEffect(() => {
    showdata();
  }, []);

  return <div>showing firsname of all data stored in const</div>;
};

export default ShowingFirstname;
