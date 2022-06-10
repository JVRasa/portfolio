/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from 'react';

const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  const [is1stModalOpen, setIs1stModalOpen] = useState(false);
  const [is2ndModalOpen, setIs2ndModalOpen] = useState(false);
  const [is3rdModalOpen, setIs3rdModalOpen] = useState(false);
  const [is4thModalOpen, setIs4thModalOpen] = useState(false);
  return (
    <ModalContext.Provider
      value={{
        is1stModalOpen,
        setIs1stModalOpen,
        is2ndModalOpen,
        setIs2ndModalOpen,
        is3rdModalOpen,
        setIs3rdModalOpen,
        is4thModalOpen,
        setIs4thModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContext;
