import "./App.css";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router";
import { LoginPage } from "../1_pages/LoginPage";
import { AuthProvider } from "../providers/AuthProvider";
import { WithAuth } from "../hocs/WithAuth";
import { GamePage } from "../1_pages/GamePage";
import { GameLayout } from "../2_layouts/GameLayout";

const router = createBrowserRouter([
  { path: "login", element: <LoginPage /> },
  {
    path: "game",
    element: (
      <WithAuth>
        <GameLayout />
      </WithAuth>
    ),
    children: [
      {
        path: "",
        element: <GamePage />,
      },
    ],
  },
  { path: "*", element: <Navigate to="/login" /> },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
