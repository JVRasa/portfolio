/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';

const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  const [is1stModalOpen, setIs1stModalOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ is1stModalOpen, setIs1stModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
