import React, { useEffect } from "react";

const ArrayRender = () => {
  const userArray = [
    {
      firstName: "swati",
      lastName: "sharma",
      email: "duhanpriya264@gmail.com",
      contactNumber: "9817782184",
      city: "Hisar",
      state: "Haryana",
      pinCode: "125033",
      address: "Hansi",
      password: "Swati@1234",
      confirmPassword: "Swati@1234",
    },

    {
      firstName: "priya",
      lastName: "duhan",
      email: "priya264@gmail.com",
      contactNumber: "9817782184",
      city: "Hisar",
      state: "Haryana",
      pinCode: "125033",
      address: "Hansi",
      password: "Swati@1234",
      confirmPassword: "Swati@1234",
    },
    {
      firstName: "nitish",
      lastName: "sharma",
      email: "nitish264@gmail.com",
      contactNumber: "9817782184",
      city: "Hansi",
      state: "Haryana",
      pinCode: "125033",
      address: "Hansi",
      password: "Swati@1234",
      confirmPassword: "Swati@1234",
    },
    {
      firstName: "swati",
      lastName: "sharma",
      email: "duhanpriya264@gmail.com",
      contactNumber: "9817782184",
      city: "Hisar",
      state: "Haryana",
      pinCode: "125033",
      address: "Hansi",
      password: "Swati@1234",
      confirmPassword: "Swati@1234",
    },
  ];
  //   useEffect(async (data) => {
  //     const response = await fetch("http://localhost:8000/userArray", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });
  //   }, []);

  async function fetchArray(data) {
    const response = await fetch("http://localhost:8000/userArray", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // console.log(response.json());
    const myData = await response.json();
    console.log(myData);
    console.log(myData.SendedData);

    // console.log(response.SendedData);
  }

  useEffect(() => {
    fetchArray(userArray);
  }, []);

  return (
    <div>
      <h1>rendering data from an array</h1>
    </div>
  );
};

export default ArrayRender;
