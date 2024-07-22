import React, { useContext } from "react";
import { SessionContext } from "../SessionProvider";
import { Navigate } from "react-router-dom";

export default function Home() {
  const { currentUser } = useContext(SessionContext);
  if (currentUser == null) return <Navigate replace to="/signin" />;

  return <div>Home Component!</div>;
}
