import { Dashboard } from "./components/Dashboard/index.tsx";
import { Header } from "./components/Header/index.tsx";
import { GlobalStyle } from "./styles/global.ts";
import Modal from 'react-modal';
import { useState } from "react";

Modal.setAppElement('#root');
function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}  />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar nova transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;
