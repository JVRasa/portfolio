import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { ModalContextProvider } from './contexts/ModalContext';

function App() {
  return (
    <ModalContextProvider>
      <Header />
      <Main />
      <Footer />
    </ModalContextProvider>
  );
}

export default App;
