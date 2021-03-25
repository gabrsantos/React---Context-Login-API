import React from "react";
import { useAuth } from "../contexts/auth";
import Loading from "../pages/Loading/index";

import AuthRoutes from "../routes/auth_routes";
import AppRoutes from "../routes/app_routes";

function Routes() {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <Loading
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      />
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
