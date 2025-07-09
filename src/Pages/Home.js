import React, { useEffect, useState } from "react";
import Firsthomecomponent from "../Components/Firsthomecomponent";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Home() {
  const navigate = useNavigate();
  const [fetchTodo, setFetchTodo] = useState([]);

  // const checkCredentials = async () => {
  //   try {
  //     const token = localStorage.getItem("token");
  //     const decoded = jwtDecode(token, { complete: true });

  //     Ensuring decoded token exists before accessing properties
  //     if (decoded) {
  //       if (!decoded.payload.email) {
  //         console.error("Invalid token: missing email property");
  //         localStorage.removeItem("token");
  //         navigate("/");
  //       } else {
  //         const req = await fetch("http://localhost:1337/api/home", {
  //           headers: { "x-access-token": token },
  //         });

  //         if (req.ok) {
  //           const data = await req.json();
  //           console.log(data);
  //           setFetchTodo(data.userData.todo);
  //           console.log(fetchTodo);
  //         } else {
  //           console.error("Failed to fetch data:", req.statusText);
  //         }
  //       }
  //     } else {
  //       console.error("Error decoding the token");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error.message);
  //   }
  // };

  const checkCredentials = async () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token);
      if (decoded && decoded.email) {
        const req = await fetch("http://localhost:1337/api/home", {
          headers: { "x-access-token": token },
        });
        if (req.ok) {
          const data = await req.json();
          console.log(data);
          if (data.status === "ok" && data.todo) {
            setFetchTodo(data.todo);
            localStorage.setItem("token", token);
            navigate("/home");
          }
        } else {
          console.log("Failed to fetch data.", req.statusText);
        }
      } else {
        console.error("Invalid token: missing email property");
        localStorage.removeItem("token");
        navigate("/");
      }
    } catch (error) {
      console.log("Error fetching email.", error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      console.log("Raw Token:", token);
      try {
        checkCredentials();
      } catch (error) {
        console.log("Error decoding the token:", error.message);
        navigate("/");
      }
    } else {
      console.warn("Token not found in local storage");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <Firsthomecomponent todos={fetchTodo} />
    </div>
  );
}
