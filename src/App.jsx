import { GlobalStyle } from "./style/global/style";
import RegisterComponent from "./pages/Register";
import { Buffer } from 'buffer';

const App = () => {
  window.Buffer = Buffer;
  return (
    <>
      <GlobalStyle />
      <RegisterComponent/>
    </>
  )
}

export default App;