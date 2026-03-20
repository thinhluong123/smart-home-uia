import { createContext, useState, useContext, useEffect } from "react";
import { supabase } from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { useNoti } from "./NotiProvider";
const AuthContext = createContext<any>(null);
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { setNotification } = useNoti();
  const navigate = useNavigate();
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const handleLogout = async (e: any) => {
    setNotification('Logging out...');
    e.preventDefault();
    await supabase.auth.signOut();
    navigate('/login');
};
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
      console.log("Current user:", data.user);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser, handleLogin, handleLogout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);