import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route>
    <Route path="/" element={ <Home />} />
    <Route path="/movie/:id" element={ <Detail />} />
  </Route>
  )
);

function App() {
return(
    <RouterProvider router={router} />
  );
}
export default App;