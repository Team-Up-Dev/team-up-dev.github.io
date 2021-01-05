import loadable from "@loadable/component";
import "bootstrap/dist/css/bootstrap.min.css";

const Routing = loadable(() => import("./components/Routing"));

function App() {
  return <Routing />;
}

export default App;
