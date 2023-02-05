import Home from './pages';
import { createContext, useEffect, useState } from 'react';

export const MenuContext = createContext();

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('./Menu.json')
      .then((response) => response.json())
      .then((data) => setItems(data.serviceTimes));
  }, []);

  return (
    <MenuContext.Provider value={{ items }}>
      <Home />
    </MenuContext.Provider>
  );
}

export default App;
