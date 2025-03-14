import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar"; // Cambia Navbar por Sidebar

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test") // Asegúrate de que Laravel use esta ruta
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <header>
          <h1>My React App with Laravel</h1>
        </header>
        <hr />
        <h2>Message from Laravel API:</h2>
        <hr />
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;