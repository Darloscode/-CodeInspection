import ProfileView from "@components/ProfileView";

export default function Profile() {


  const sample_data = {
    name: "John Doe",
    rol: "Developer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFU8Zdel1Zmmw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697774168625?e=2147483647&v=beta&t=ebIAB2U72CObroPX95OXWeZhKzV81E4_b40S5TTBkzw",
    aboutme: "I'm a developer",
    gender: "Male",
    age: 30
  };

  const handleImageClick = () => {
    alert("Edicion!");
  };

  return (
    <div>
        <ProfileView user_info={sample_data} onEdit={handleImageClick} isRowPosition={true}/>
    </div>
  );
}
