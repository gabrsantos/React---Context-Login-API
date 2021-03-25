import React from "react";
import { useAuth } from "../../contexts/auth";

function SignIn() {
  const { signIn } = useAuth();

  function handleSign() {
    signIn();
  }
  return (
    <div>
      <button title="Sign In" onClick={handleSign}>
        Sign In
      </button>
    </div>
  );
}

export default SignIn;
