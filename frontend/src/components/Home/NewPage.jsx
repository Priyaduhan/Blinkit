import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const NewPage = () => {
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/user/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.error("Error fetching:", err));
  }, []);
  console.log("New Page is running");

  return (
    <div>
      <h1>Dynamic Routing</h1>
    </div>
  );
};

export default NewPage;
