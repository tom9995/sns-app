import { createContext, useEffect, useState } from "react";
import { authRepository } from "./repositories/auth";

export const SessionContext = createContext<any | null>(null);

export const SessionProvider = (props: any) => {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSession();
  }, []);

  const setSession = async () => {
    const currentUser: any = await authRepository.getCurrentUser();
    setCurrentUser(currentUser);
    setIsLoading(false);
  };

  if (isLoading) return <div></div>;
  return (
    <SessionContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </SessionContext.Provider>
  );
};
