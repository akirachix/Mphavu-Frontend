
'use client'
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { addPlayer } from '../../utils/addPlayer'; 
import { IoIosArrowDropdown } from "react-icons/io";

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

    const [playerPhotoPreview, setPlayerPhotoPreview] = useState<string | null>(null);

    const [teams, setTeams] = useState<string[]>([]);
    const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState<boolean>(false);
    const [selectedTeam, setSelectedTeam] = useState<string>('');
    const [position, setPosition] = useState<string[]>([]);
    const [isPositionDropdownOpen, setIsPositionDropdownOpen] = useState<boolean>(false);
    const [selectedPosition, setSelectedPosition] = useState<string>('');

    const [successMessage, setSuccessMessage] = useState<string | null>(null);


    useEffect(() => {
        setTeams(['Mphavu', 'Ligi Ndogo', 'Kipaji', 'Nextgen']);
    }, []);

    useEffect(() => {
        setPosition(['Goalkeeper', 'Defender', 'Striker']);
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
            formData.append('playerPhoto', playerPhoto); 
        }

       try {
            const response = await addPlayer(formData);
            console.log(response);
            setSuccessMessage('Player has been successfully added!');
            // Clear the form after successful submission
            setPlayerPhoto(null);
            setPlayerPhotoPreview(null);
            setSelectedTeam('');
            setSelectedPosition('');

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

            setPlayerPhotoPreview(URL.createObjectURL(file)); // Set the image preview

        }
    };

    const inputClasses =

    'ml-20 w-[80%] h-[10%] py-8 px-8 text-sm border-blue-500 border rounded-[24px] shadow-md shadow-black/50 font-[josefinSans]';

    'w-full h-full py-8 px-8 text-sm border-blue-500 border rounded-[24px] shadow-md shadow-black/50 font-[josefinSans]';


    return (
        <div className="min-h-screen flex items-center justify-center font-[josefinSans]">
            <div className="w-full max-w-7xl bg-white rounded-xl border border-black pl-40 pr-40 pt-5 pb-5">
            <div className="flex mb-8 items-center justify-between">
                <Link href="/components/players">
    <ArrowLeft className="w-10 h-10 ml-20 font-bold text-black-600" />

    <ArrowLeft className="w-10 h-10 font-bold text-black-600" />
    </Link>
    <h2 className="text-4xl text-[#283891] font-bold mx-auto">Add New Player</h2>
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
                            className="w-14 h-14 bg-blue-500 rounded-full flex justify-center text-white text-6xl focus:outline-none mr-4 shadow-md"
                        >
                            +
                        </button>
                        <span className="text-3xl text-black-600">
                            {playerPhoto ? `Selected: ${playerPhoto.name}` : 'Add player photo'}
                        </span>
                    </div>
                    {playerPhotoPreview && (
                        <div className="mb-6 flex justify-center">
                            <img src={playerPhotoPreview} alt="Player Photo" className="w-40 h-40 rounded-full object-cover" />
                        </div>
                    )}

                    <div className="mb-4">
                        <label htmlFor="playerName" className="block text-xl text-black mb-1 ml-24">


                    <div className="mb-4">
                        <label htmlFor="playerName" className="block text-xl text-black mb-1 ml-5">

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

                        <label htmlFor="team" className="block text-xl text-black mb-1 ml-24">

                        <label htmlFor="team" className="block text-xl text-black mb-1 ml-5">

                            Team
                        </label>
                        <div className="relative">
                            <button
                                type="button"
                                className={`border border-black ${inputClasses} text-left flex justify-between items-center mb-2`} 
                                onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
                            >
                                <span>{selectedTeam || 'Select a team'}</span>
                                <IoIosArrowDropdown className="w-10 h-6 text-[#283891]"/> 
                            </button>
                            {isTeamDropdownOpen && (
                                <div className="absolute z-10 w-64 bg-white border border-black mt-1 rounded-[12px] shadow-lg right-0">
                                    {teams.map((team) => (
                                        <button
                                            key={team}
                                            type="button"
                                            className="block w-60 text-left px-4 py-2 border border-black hover:bg-[#177BBD] hover:text-white m-2" 
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
                        <label htmlFor="position" className="block text-xl text-black mb-1 ml-24">

                        <label htmlFor="position" className="block text-xl text-black mb-1 ml-5">

                            Position
                        </label>
                        <div className="relative">
                            <button
                                type="button"
                                className={`border border-black ${inputClasses} text-left flex justify-between items-center mb-2`} 
                                onClick={() => setIsPositionDropdownOpen(!isPositionDropdownOpen)}
                            >
                                <span>{selectedPosition || 'Select a position'}</span>
                                <IoIosArrowDropdown className="w-10 h-6 text-[#283891]" /> 
                            </button>
                            {isPositionDropdownOpen && (
                                <div className="absolute z-10 w-64 bg-white border border-black mt-1 rounded-[12px] shadow-lg right-0">
                                    {position.map((position) => (
                                        <button
                                            key={position}
                                            type="button"
                                            className="block w-60 text-left px-4 py-2 border border-black hover:bg-[#177BBD] hover:text-white m-2" 
                                            onClick={() => {
                                                setSelectedPosition(position);
                                                setIsPositionDropdownOpen(false);
                                                setValue('position', position);
                                            }}
                                        >
                                            {position}
                                        </button>
                                    ))}
                                </div>
                            )}
                            {errors.position && <p className="text-red-500 text-sm">{errors.position.message}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="dob" className="block text-xl text-black mb-2 hover:bg-blue-100 ml-24">

                        <label htmlFor="dob" className="block text-xl text-black mb-2 hover:bg-blue-100 ml-5">

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
                            className="bg-[#46BC14] w-64 hover:bg-[#177BBD] text-white font-bold py-5 px-6 rounded-[20px] shadow-md text-2xl"
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
