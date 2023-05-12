import { createContext ,useState} from 'react';

export const AppContext = createContext(null);

function Context({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <AppContext.Provider value={{ cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
}
export default Context;