import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ArrowLeft, ChevronDown } from 'lucide-react';
import { addPlayer } from '../../utils/addPlayer'; 

const validationSchema = Yup.object().shape({
    playerName: Yup.string()
        .required('Player Name is required')
        .min(3, 'Player Name must be at least 3 characters'),
    team: Yup.string().required('Team is required'),
    position: Yup.string()
        .required('Position is required')
        .min(2, 'Position must be at least 2 characters'),
    dob: Yup.date().required('Date of Birth is required').nullable(),
});

export default function AddPlayer() {
    const [playerPhoto, setPlayerPhoto] = useState<File | null>(null);
    const [teams, setTeams] = useState<string[]>([]);
    const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState<boolean>(false);
    const [selectedTeam, setSelectedTeam] = useState<string>('');

    useEffect(() => {
        setTeams(['Mphavu', 'Ligi Ndogo', 'Kipaji', 'Nextgen']);
    }, []);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('playerName', data.playerName);
        formData.append('team', data.team);
        formData.append('position', data.position);
        formData.append('dob', data.dob);
        if (playerPhoto) {
            formData.append('playerPhoto', playerPhoto); // Append the photo if selected
        }

        try {
            const response = await addPlayer(formData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPlayerPhoto(file);
        }
    };

    const inputClasses =
        'w-full h-full py-8 px-8 text-gray-700 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 shadow-md';

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg border border-black pl-40 pr-40 pt-5 pb-5">
                <div className="flex mb-6">
                    <ArrowLeft className="w-10 h-10 font-bold text-black-600" />
                    <h2 className="text-3xl text-[#283891] font-bold justify-center ml-44">Add New Player</h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-6 flex justify-center items-center">
                        <input
                            type="file"
                            id="photoUpload"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handlePhotoUpload}
                        />
                        <button
                            type="button"
                            onClick={() => document.getElementById('photoUpload')?.click()}
                            className="w-16 h-16 bg-blue-500 rounded-full flex justify-center text-white text-6xl focus:outline-none mr-4 shadow-md"
                        >
                            +
                        </button>
                        <span className="text-2xl text-gray-600">
                            {playerPhoto ? `Selected: ${playerPhoto.name}` : 'Add player photo'}
                        </span>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="playerName" className="block text-sm font-medium text-gray-700 mb-1 hover:bg-blue-100">
                            Player Name
                        </label>
                        <input
                            className={inputClasses}
                            id="playerName"
                            type="text"
                            {...register('playerName')}
                        />
                        {errors.playerName && <p className="text-red-500 text-sm">{errors.playerName.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="team" className="block text-sm font-medium text-gray-700 mb-1">
                            Team
                        </label>
                        <div className="relative">
                            <button
                                type="button"
                                className={`${inputClasses} text-left flex justify-between items-center`}
                                onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
                            >
                                <span>{selectedTeam || 'Select a team'}</span>
                                <ChevronDown className="w-6 h-6" />
                            </button>
                            {isTeamDropdownOpen && (
                                <div className="absolute z-10 w-full bg-white border border-gray-200 mt-1 rounded-md shadow-lg">
                                    {teams.map((team) => (
                                        <button
                                            key={team}
                                            type="button"
                                            className="block w-full text-left px-4 py-2 hover:bg-blue-100"
                                            onClick={() => {
                                                setSelectedTeam(team);
                                                setIsTeamDropdownOpen(false);
                                                setValue('team', team);
                                            }}
                                        >
                                            {team}
                                        </button>
                                    ))}
                                </div>
                            )}
                            {errors.team && <p className="text-red-500 text-sm">{errors.team.message}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2 hover:bg-blue-100">
                            Position
                        </label>
                        <input
                            className={inputClasses}
                            id="position"
                            type="text"
                            {...register('position')}
                        />
                        {errors.position && <p className="text-red-500 text-sm">{errors.position.message}</p>}
                    </div>

                    <div className="mb-6">
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2 hover:bg-blue-100">
                            Date of birth
                        </label>
                        <input
                            className={inputClasses}
                            id="dob"
                            type="date"
                            {...register('dob')}
                        />
                        {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            className="bg-[#46BC14] hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline shadow-md"
                            type="submit"
                        >
                            Add Player
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
