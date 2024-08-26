import React, { useState } from 'react';
import Image from "next/legacy/image";
import Modal from './ModalEquipo';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
      <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden flex flex-col justify-between h-full">
        <div className="relative w-full h-80">
          <Image src={imageUrl} alt={name} layout="fill"/>
        </div>
        <div className="p-4 flex flex-col items-center flex-grow hover:text-blue-500 transition duration-300 cursor-default">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="">{role}</p>
          <button 
            className="mt-4 bg-yellow-500 hover:bg-blue-500 transition duration-300 text-white px-4 py-2 rounded hover:bg-blue-00"
            onClick={() => setIsModalOpen(true)}
          >
            Ver mas
          </button>
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        content={
          <div>
            <h2 className="text-2xl font-bold mb-4">{name}</h2>
            <p>{description}</p>
          </div>
        }
      />
    </div>
  );
};

export default TeamMember;