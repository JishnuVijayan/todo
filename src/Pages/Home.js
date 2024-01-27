import React, { useEffect } from "react";
import Firsthomecomponent from "../Components/Firsthomecomponent";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Home() {
  const checkCredentials = async () => {
    try {
      const token = localStorage.getItem("token");
      const decoded = jwtDecode(token, { complete: true });

      // Ensuring decoded token exists before accessing properties
      if (decoded) {
        if (!decoded.payload.email) {
          console.error("Invalid token: missing email property");
          localStorage.removeItem("token");
          navigate("/");
        } else {
          const req = await fetch("http://localhost:1337/api/home", {
            headers: { "x-access-token": token },
          });

          if (req.ok) {
            const data = await req.json();
            console.log(data);
          } else {
            console.error("Failed to fetch data:", req.statusText);
          }
        }
      } else {
        console.error("Error decoding the token");
      }
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      console.log("Raw Token:", token);
      checkCredentials();
    } else {
      console.warn("Token not found in local storage");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <Firsthomecomponent />
    </div>
  );
}
