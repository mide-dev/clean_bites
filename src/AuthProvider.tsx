import { createContext, useState, useEffect, ReactNode } from "react";
import { setCookie } from "./Pages/auth/utils";
import { getCurrentUser } from "./constants/api";

interface AuthContextType {
  isAuth: AuthState;
  setIsAuth: (authState: AuthState) => void;
  userData: UserData;
}

interface AuthState {
  accessToken?: string;
  refreshToken?: string;
}

interface UserData {
  id?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState<AuthState>({});
  const [userData, setUserData] = useState<UserData>({});

  useEffect(() => {
    const fetchCurrentUser = async () => {
      if (isAuth.accessToken) {
        setCookie("accessToken", isAuth.accessToken, 1);
        setCookie("refreshToken", isAuth.refreshToken, 90);
        const currentUser = await getCurrentUser(isAuth.accessToken);
        setUserData(currentUser);
      }
    };

    fetchCurrentUser();
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
