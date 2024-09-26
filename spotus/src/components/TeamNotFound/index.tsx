"use client"
import { useState } from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import TeamsHeader from '../TeamsHeader';
import TeamCreationForm from '../TeamCreationForm';
const TeamSearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleAddTeam = () => {
        setShowForm(true); 
    };

    const handleBackToTeams = () => {
        setShowForm(false); 
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {!showForm && <Navbar />} 
            {showForm ? (
                <TeamCreationForm onBack={handleBackToTeams} /> 
            ) : (
                <>
                    <TeamsHeader setIsCreatingTeam={handleAddTeam} />
                    <main className="container mx-auto p-4 text-center"> 
                        <h2 className="text-[50px] ">Team Not Found</h2> 
                    </main>
                </>
            )}
        </div>
    );
};

export default TeamSearchPage;
