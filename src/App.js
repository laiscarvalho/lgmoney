import { Dashboard } from "./components/Dashboard/index.tsx";
import { Header } from "./components/Header/index.tsx";
import { GlobalStyle } from "./styles/global.ts";


function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <GlobalStyle/>
    </>
  );
}

export default App;
