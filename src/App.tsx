import { useState } from "react";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false)
  
  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true)
  }

  function handleCloaseNewTransactionModal() {
    setIsNewTransactionOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header 
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionOpen}
        onRequestClose={handleCloaseNewTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}