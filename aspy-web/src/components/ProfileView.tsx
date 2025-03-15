import penToSquare from '../assets/pen-to-square.svg';
import { User } from '../types/User';

function ProfileView(user_info: User) { 
    return (
        <div className='flex flex-row md:flex-wrap justify-center gap-16 p-8 m-8'>
            <div className='flex flex-col gap-16 items-center'>
                <img className='rounded-full w-auto h-auto' src={user_info.image} alt={user_info.name} />
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className='font-kumbh text-primaryAspy font-semibold text-base'>{user_info.name}</h1>
                    <h2 className='font-kumbh text-secondaryAspy text-sm'>{user_info.rol}</h2>
                </div>
                <img src={penToSquare} className= 'fill-gray-200 w-1/6 h-1/6 ' alt="Editar perfil" />
            </div>
            <div className='flex flex-col gap-16'>
                <div className='flex flex-col gap-2'>
                    <h1 className='font-kumbh text-primaryAspy font-semibold text-base'>Sobre mí</h1>
                    <p className='font-kumbh text-sm text-secondaryAspy'>{user_info.aboutme}</p>
                </div>
                <div className='flex flex-row gap-16'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-kumbh text-primaryAspy font-semibold text-base'>Edad</h2>
                        <p className='font-kumbh text-sm text-secondaryAspy'>{user_info.age}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-kumbh text-primaryAspy font-semibold text-base'>Género</h2>
                        <p className='font-kumbh text-sm text-secondaryAspy'>{user_info.gender}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileView;