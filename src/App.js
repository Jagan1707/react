import logo from './logo.svg';
import './App.css';
import DataInd from './component/Com-1/ind'
import Hookcomp from './component/Com-2/sample'
import Register from './component/Com-3/Register';
import Test from "./component/Parent/parent"

function App() {
  return (
    <div className="App">
      {/* <DataInd data ='its working'/>
      <Hookcomp /> */}
     < Register /> 
       {/* <Test data="Parent" />  */}
      
    </div>
  );
}

export default App; 
