/* import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"; */

import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {

  // 누군가 만들어 놓은 컴포넌트를 잘 사용하면 된다.
  // Swith(Routes)가 하는 역할은 Route를 찾는 것인데 Route는 URL을 의미한다.
  // 사용자가 "/" 경로에 있으면 Home Route를 랜더링한다.

  return <Router>
    <Routes>
      <Route path = "/movie/:id" element={<Detail />} />
      <Route path = "/" element={<Home />} />
    </Routes>
  </Router>; 
}



export default App;
