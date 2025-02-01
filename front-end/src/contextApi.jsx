import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchSession() {
      try {
        const response = await fetch("http://localhost:5000/session", {
          method: "GET",
          credentials: "include", // Ensure the cookie is sent
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data.user); // Set the user if session exists
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      } finally {
        setLoading(false); // Stop loading regardless of success or failure
      }
    }
    fetchSession();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  // const context = useContext(UserContext);
  // console.log(context);
  return useContext(UserContext);
}
