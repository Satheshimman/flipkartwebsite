import { Provider } from "react-redux";
import { Store } from "./Component/Store";
import { Routing } from "./Component/Routing";




function App() {
  return (
    <Provider store={Store}>
       <Routing/>
    </Provider>
  );
}

export default App;
