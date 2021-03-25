import React, { useState, createContext, useEffect, useContext } from "react";
import * as auth from "../services/auth";
import Loading from "../pages/Loading/index";

//Ligando API
import api from "../services/api";

const AuthContext = createContext({});

//Criando uma nova função para desacoplar componentes.
function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  //Criando um Loading ->
  const [loading, setLoading] = useState(true);

  //LocalStorage ->
  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await localStorage.getItem("@RAuth:user");
      const storagedToken = await localStorage.getItem("@RAuth:token");

      // simular uma lentidão para mostar o loading.
      //   await new Promise((resolve) => setTimeout(resolve, 2000));

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        //Verifica Token para API
        api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
      }
      setLoading(false);
    }

    loadStorageData();
  });

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);

    //Recebe Token para API
    api.defaults.headers.Authorization = `Baerer ${response.token}`;
    // LocalStorage
    await localStorage.setItem("@RAuth:user", JSON.stringify(response.user));
    await localStorage.setItem("@RAuth:token", response.token);
  }

  async function signOut() {
    //LocalStorage Clear;
    await localStorage.clear();
    setUser(null);
  }

  if (loading) {
    return (
      <Loading
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  return (
    <div>
      <AuthContext.Provider
        value={{ signed: !!user, user, loading, signIn, signOut }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export { AuthProvider, useAuth };
