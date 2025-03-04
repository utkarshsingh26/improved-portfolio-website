import { Vortex } from "./ui/vortex";
import './VortexDemo.css';
import { useNavigate } from 'react-router-dom';

export function VortexDemo() {
  const navigate = useNavigate();


  const goToHome = () => {
    navigate('/home'); 
  };

  return (
    <div className="w-full h-screen">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center fade-in" style={{ animationDelay: '1s' }}>
          Utkarsh Singh.
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center fade-in" style={{ animationDelay: '2s' }}>
          Shooting for the stars
        </p>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center fade-in" style={{ animationDelay: '3s' }}>
          Since 1998.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 fade-in" style={{ animationDelay: '4s' }}>
          <button 
            onClick={goToHome}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Find out more
          </button>
        </div>
      </Vortex>
    </div>
  );
}
