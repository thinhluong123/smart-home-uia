import { createContext, useContext, useState } from "react";
const NotiContext = createContext<any>(null);
export default function NotiProvider({ children }: { children: React.ReactNode }) {
  const [notification, setNotification] = useState<string | null>(null);
  return (
    <NotiContext.Provider value={{ notification, setNotification }}>
      {children}
    </NotiContext.Provider>
  );
}
export const useNoti = () => useContext(NotiContext);