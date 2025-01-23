import { createContext, useContext } from "react";

const AppContext = createContext();
export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ rate, faqs, featuredBlogs }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
