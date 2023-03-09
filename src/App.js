import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Layout from './Layout/Layout';

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route>
    <Route path={`${process.env.PUBLIC_URL}/`} element={< Home />} />
    <Route path="/movie/:id" element={ <Detail />} />
  </Route>
  )
);

function App() {
return(
  <Layout>
    <RouterProvider router={router} />
  </Layout>
  );
}
export default App;