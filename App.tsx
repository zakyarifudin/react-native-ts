import React from 'react'
import { Provider} from "react-redux"
import { store } from "./App/redux/store"
//import Calculator from "./App/Modules/Calculator/index"
import Calculator from "./App/Modules/CalculatorRedux/index"

const App = () => {
  return (
    <Provider store={store} >
      <Calculator />
    </Provider>
  );
};

export default App;
