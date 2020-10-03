import React, { useContext } from "react";
import { Login } from "./Login";
import { UserContext } from "./UserContext";

const Index = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>Index</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={() => {
            //Call logout to server
            setUser(null);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await Login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Index;
