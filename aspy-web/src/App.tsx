import { useEffect, useState } from "react";
import ProfileView from "./components/ProfileView";

function App() {
  const [message, setMessage] = useState("");

  const sample_data = {
    name: "John Doe",
    rol: "Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFU8Zdel1Zmmw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697774168625?e=2147483647&v=beta&t=ebIAB2U72CObroPX95OXWeZhKzV81E4_b40S5TTBkzw",
    aboutme: "I'm a developer",
    gender: "Male",
    age: 30
  };

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
      <div>
        <ProfileView {...sample_data} />
      </div>
    </div>
  );
}

export default App;
