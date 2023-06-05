import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { login } = useContext(UserContext);

  const navigate = useNavigate();
  
  if (login === true) {
    return <>{children}</>;
  } else if (login === false || login === null) {
    navigate('/');
    return null;
  } else {
    return <></>;
  }
}
