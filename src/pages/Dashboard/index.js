import React from "react";
import { useAuth } from "../../contexts/auth";

function Dashboard() {
  const { user, signOut } = useAuth();
  function handleSignOut() {
    signOut();
  }
  return (
    <div>
      <div>
        <p>{user}</p>
        <button title="Sign Out" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
