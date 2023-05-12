import { createContext ,useState} from 'react';

export const AppContext = createContext(null);

function Context({ children }) {
  const [cart, setCart] = useState([
    {
      id: '1',
      name: 'iphone',
      src: '/Items/iphone.png',
      price: 1000.0,
      quantity: 1,
    },
  ]);

  return (
    <AppContext.Provider value={{ cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
}
export default Context;