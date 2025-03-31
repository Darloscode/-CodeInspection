import ProfileView from "@components/ProfileView";

export default function Profile() {


  const sample_data = {
    name: "John Doe",
    rol: "Developer",
    aboutme: "I'm a developer",
    gender: "Masculino",
    age: 30
  };


  const handleImageClick = () => {
    alert("Edicion!");
  };

  return (
    <div>
        <ProfileView user_info={sample_data} onEdit={handleImageClick} isRowPosition={true} />
    </div>
  );
}
