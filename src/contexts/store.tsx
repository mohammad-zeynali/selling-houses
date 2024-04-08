import { useState, createContext } from "react";
import { useContext } from "react";

type StoreContextType = {
  isShowMobileNavbar: boolean;
  setIsShowMobileNavbar: React.Dispatch<React.SetStateAction<boolean>>;
};

const StoreContext = createContext({} as StoreContextType);
export const useStore = () => useContext(StoreContext);

export const Provider = ({ children }: { children: JSX.Element }) => {
  const [isShowMobileNavbar, setIsShowMobileNavbar] = useState(false);

  const values = {
    isShowMobileNavbar,
    setIsShowMobileNavbar,
  } as StoreContextType;

  return (
    <StoreContext.Provider value={values}>{children}</StoreContext.Provider>
  );
};

export default Provider;
