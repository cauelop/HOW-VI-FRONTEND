import { useContext } from "react";
import { AuthContext } from "../contexts/auth.tsx";

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuth;
