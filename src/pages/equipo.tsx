"use client"
import React, { useState } from 'react';
import TeamMember from '../components/TeamMember';
import { team } from '../data/team';

const Equipo: React.FC = () => {
    return (
        <div id="equipo">
            <div className="container mx-auto pt-8 sm:px-8 md:px-8">
                <h1 className="text-4xl font-bold mb-8 text-center hover:text-blue-500 transition duration-300 cursor-default">Nuestro Equipo</h1>
                <div className="flex flex-wrap justify-center -mx-2 max-sm:px-8">
                    {team.map((member, index) => (
                        <TeamMember
                            key={index}
                            name={member.name}
                            role={member.role}
                            imageUrl={member.imageUrl}
                            description={member.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Equipo;
