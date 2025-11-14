import { GlobalStyle } from "./style/global/style";
import RoutesComponent from "./Routes";
import { Buffer } from 'buffer';

const App = () => {
  window.Buffer = Buffer;
  return (
    <>
      <GlobalStyle />
      <RoutesComponent/>
    </>
  )
}

export default App;