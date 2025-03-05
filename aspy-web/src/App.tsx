import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test") // Asegúrate de que Laravel use esta ruta
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Mi Aplicación React con Laravel</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
