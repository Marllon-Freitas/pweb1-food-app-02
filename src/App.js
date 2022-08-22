import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//globalStyles
import { GlobalStyles } from "./GlobalStyles";
import Pages from "./pages/Pages";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <GlobalStyles />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
