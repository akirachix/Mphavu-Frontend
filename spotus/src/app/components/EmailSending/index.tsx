"use client"; 

import React, { useState } from 'react';
import { Search, ArrowLeft, Plus, X } from 'lucide-react';
import { useSendInvite } from '../../hooks/useSendInvite';  
import { validateEmail } from '../../utils/fetchEmail';
import { useAgents } from '@/app/hooks/useAgents'; 
import { useCoaches } from '@/app/hooks/useCoaches'; 
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const AgentsPage = () => {
  const [selected, setSelected] = useState('Coaches');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false); 
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { inviteSent, successMessage, sendInvite, setInviteSent } = useSendInvite(); 
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const { coaches, loading: loadingCoaches, error: errorCoaches } = useCoaches();
  const { agents, loading: loadingAgents, error: errorAgents } = useAgents();
  const [sentEmails, setSentEmails] = useState<string[]>([]);


  const handleSendInvite = async (e: React.FormEvent) => {
    e.preventDefault();

    setInviteSent(false);
    setErrorMessage('');

    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (sentEmails.includes(email)) {
      alert('This email has already been invited.');
      return;
    }

    setLoading(true);

    try {
      await sendInvite(email); 
      setEmail('');
      setInviteSent(true);
      setErrorMessage('');
      setSentEmails([...sentEmails, email]); 
    } catch (error) {
      console.error('Failed to send invite:', error);
      setInviteSent(false); 
      setErrorMessage('Error sending invite: ' + error.message); 
    }finally {
      setLoading(false); 
    }

    setTimeout(() => {
      setIsModalOpen(false);
      setInviteSent(false);
      setErrorMessage(''); 
    }, 3000);
  };


  const handleView = (user: any) => {
    setSelectedUser(user); 
    setIsUserModalOpen(true); 
  };
  
  
  const closeUserModal = () => {
    setIsUserModalOpen(false);
    setSelectedUser(null); 
  };

  const renderData = (data: any[], loading: boolean, error: string | null, label: string) => {
    if (loading) return <p>Loading {label}...</p>;
    if (error) return <p>Error fetching {label}: {error}</p>;
    if (data.length === 0) return <p>Oops! No {label} Yet</p>;

    const filteredData = data.filter((item) =>
      `${item.first_name} ${item.last_name}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );

    return (
      <div className="overflow-x-auto p-4 2xl:mt-4">
      <table className="min-w-[700px] bg-white rounded-lg 2xl:w-[1300px] xl:w-[800px] lg:w-[650px] 2xl:ml-12 2xl:mt-4">
           <thead>
             <tr>
               <th className="2xl:px-4 2xl:py-2 text-left 2xl:text-[28px] xl:px-4 xl:py-2 text-left xl:text-[28px] lg:px-4 lg:py-2 text-left lg:text-[24px] font-bold">Profile</th>
               <th className="2xl:px-4 2xl:py-2 text-left 2xl:text-[28px] xl:px-4 xl:py-2 text-left xl:text-[28px] lg:px-4 lg:py-2 text-left lg:text-[24px] font-bold">Name</th>
              <th className="2xl:px-4 2xl:py-2 text-left 2xl:text-[28px] xl:px-4 xl:py-2 text-left xl:text-[28px] lg:px-4 lg:py-2 text-left lg:text-[24px] font-bold">Location</th>
              <th className="2xl:px-4 2xl:py-2 text-left 2xl:text-[28px] xl:px-4 xl:py-2 text-left xl:text-[28px] lg:px-4 lg:py-2 text-left lg:text-[24px] font-bold">View</th>
            </tr>
          </thead>
          <tbody>
             {filteredData.map((item: any, index: number) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}
              >
                <td className="px-4 py-2 flex items-center">
                  <img
                    src={`http://localhost:8000${item.profile_picture || "/path/to/default/profile.jpg"}`}
                    alt={`${item.first_name} ${item.last_name}`}
                    className="2xl:w-16 2xl:h-16 lg:w-14 lg:h-14 rounded-full mr-2 shadow"
                  />
                </td>
                <td className="2xl:px-4 py-2 2xl:text-[24px] xl:px-4 py-2 xl:text-[22px] lg:text-[20px] text-sm">{item.first_name} {item.last_name}</td>
                <td className="2xl:px-4 py-2 2xl:text-[24px] xl:px-4 py-2 xl:text-[22px] lg:text-[20px] text-sm">{item.location || 'N/A'}</td>
                <td className="px-4 py-2">

                   <button 
                    onClick={() => handleView(item)} 
                    className="bg-[#46BC14] hover:bg-[#E99700] text-white 2xl:text-[24px] 2xl:w-[120px] 2xl:h-[44px] xl:text-[24px] xl:w-[120px] xl:h-[44px] lg:text-[24px] lg:w-[120px] lg:h-[44px] rounded-[15px]"
                  >
                    View
                  </button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className={`flex h-screen bg-gray-100 ${josefin.className}`}>

<div className="2xl:w-80 lg:w-56 xl:w-72 bg-blue-500 text-white flex flex-col items-center">
  <div className="p-4">
    <img src="/images/image (5).png" alt="Spot Us Logo" className="2xl:w-[217px] 2xl:h-[70px] 2xl:mt-8 lg:w-[217px] lg:h-[70px] lg:mt-8" />
  </div>

  <nav className="mt-12 flex flex-col items-center w-full">
    <a
      href="#"
      onClick={() => setSelected('Agents')}
      className={`block py-2 px-4 2xl:text-[36px] 2xl:mt-8 lg:text-[36px] 2xl:h-24 lg:h-28 w-full text-center ${
        selected === 'Agents' ? 'bg-[#033354]' : 'hover:bg-[#033354]'
      }`}
    >
      Agents
    </a>
    <a
      href="#"
      onClick={() => setSelected('Coaches')}
      className={`block py-2 2xl:text-[36px] lg:text-[36px] 2xl:h-24 w-full text-center 2xl:mt-24 lg:mt-14 ${
        selected === 'Coaches' ? 'bg-[#033354]' : 'hover:bg-[#033354]'
      }`}
    >
      Coaches
    </a>
  </nav>
</div>

      <div className="flex-1 flex flex-col">
      <header className="bg-white shadow-sm">
          <div className="max-w-7xl mt-8 mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <button className="text-black hover:text-gray-900 lg:ml-[-70px] 2xl:ml-2">
              <ArrowLeft className="h-6 w-[160px] text:black 2xl:ml-[-180px] xl:ml-[20px]" />
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="2xl:mr-[-50px] xl:mr-[60px] lg:mr-4 bg-blue-500 hover:bg-[#E99700] text-white font-bold py-2 px-4 rounded-[15px] inline-flex items-center text-[24px] 2xl:px-4"
            >
              <Plus className="h-[30px] w-[30px] mr-2 bg-white rounded-2xl text-blue-600 hover:text-[#E99700]" />
              {selected === 'Agents' ? 'Add Agent' : 'Add Coach'}
            </button>
          </div>
        </header>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 lg:mt-[18px] mt-12 ">
           <div className="relative  2xl:ml-[-30px] lg:ml-[20px] xl:ml-[60px]">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="2xl:w-[700px] lg:w-[350px] 2xl:h-[50px] bg-[#E3E3E3] xl:w-[450px] xl:h-[50px] pl-10 pr-4 py-2 rounded-[20px] border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-3 top-3.5">
              <Search className="h-5 w-5 text-black flex items-center justify-center" />
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center justify-start mt-8">
            {selected === 'Agents'
              ? renderData(agents, loadingAgents, errorAgents, 'Agents')
              : renderData(coaches, loadingCoaches, errorCoaches, 'Coaches')}
          </div>
        </div>

        <div className="flex-1 flex flex-col">

        {isModalOpen && selectedUser && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
    <div className="bg-gray-800 p-6 rounded-lg w-[500px]">
      <div className="flex justify-between items-center mb-4">
        <button onClick={closeModal}>
          <X className="h-5 w-5 text-white" />
        </button>
      </div>
      <div className="text-white">
        <p><strong>First Name:</strong> {selectedUser.first_name}</p>
        <p><strong>Last Name:</strong> {selectedUser.last_name}</p>
        <p><strong>Location:</strong> {selectedUser.location || 'N/A'}</p>
        <p><strong>Email:</strong> {selectedUser.email || 'N/A'}</p>

        {selectedUser.role.toLowerCase() === 'coach' && selectedUser.teams && selectedUser.teams.length > 0 && (
          <div className="2xl:mt-4 xl:">
            <strong>Teams:</strong>
            <ul className="list-disc list-inside">
              {selectedUser.teams.map((team: string, index: number) => (
                <li key={index}>{team}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  </div>
)}


        {errorMessage && (
          <div className="fixed bottom-4 right-4 text-red-500 text-[21px] z-50 bg-white p-4 rounded-lg h-[30px] flex items-center justify-center">
            {errorMessage}
          </div>
        )}
      </div>

   
      {isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-[20px] w-[600px] h-[300px] flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl mt-8">Email</h2>
          <button onClick={() => setIsModalOpen(false)} className="text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSendInvite} className="flex flex-col">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            className="w-full p-2 mb-4 rounded"
            required
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-[150px] bg-[#46BC14] text-white py-2 rounded-[10px] hover:bg-[#E99700] mt-4"
              disabled={loading} 
            >
              {loading ? 'Sending invite...' : 'Send Invite'}
            </button>
 
          </div>
      

       
        </form>
        {errorMessage && (
          <p className="text-red-500 mt-4">{errorMessage}</p>
        )}
           {inviteSent && (
          <div className="fixed top-[62%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[21px] z-50 p-4 rounded-lg flex items-center justify-center">

            Invitation sent successfully
          </div>
        )}
      </div>
    </div>
  )}

{isUserModalOpen && selectedUser && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-gray-800 rounded-xl 2xl:p-4 2xl:w-1/3 relative 2xl:h-[38vh] 2xl:h-[350px] xl:w-[550px] xl:h-[300px] lg:w-[450px] lg:pl-4 lg:h-[250px]"> 

      <button onClick={() => setIsUserModalOpen(false)} className="text-white absolute top-2 right-2"> 
        <X className="2xl:h-6 2xl:w-6 2xl:mr-8 2xl:mt-4 xl:mr-8 xl:mt-4 lg:mr-4 lg:mt-2" />
      </button>

      <div className="flex items-center mb-20">
        <img
          src={`http://localhost:8000${selectedUser.profile_picture || "/path/to/default/profile.jpg"}`}
          alt={`${selectedUser.first_name} ${selectedUser.last_name}`}
          className="2xl:w-56 2xl:h-56 rounded-full 2xl:mr-4 2xl:mt-2 xl:w-36 xl:h-36 lg:w-28 lg:h-28"
        />
        <div className='2xl:ml-20 2xl:mt-12 lg:mt-8 lg:ml-8'>
          <p className='text-[20px]'>
            <span className='2xl:text-[20px] xl:text-[20px] lg:text-[16px] text-white'>
              {selectedUser.role.charAt(0).toUpperCase() + selectedUser.role.slice(1)}{' '}
            </span>
            <span className='2xl:text-[20px] xl:text-[20px] text-white lg:text-[16px]'>{selectedUser.first_name} {selectedUser.last_name}</span>
          </p>
          <p className='text-white 2xl:text-[20px]  2xl:mt-2 xl:text-[20px] lg:text-[16px]'>
            Location: {selectedUser.location || 'N/A'}
          </p>
          <p className='text-white 2xl:mt-2 2xl:text-[20px] xl:text-[20px] lg:text-[16px]'>
            Email: {selectedUser.email || 'N/A'}
          </p> 
          <div className="text-white 2xl:mt-2 2xl:text-[20px] xl:text-[20px] lg:text-[16px]">
    <span>Teams:</span>
    <ul className="list-disc list-inside ml-8 2xl:mt-2"> 
      <li>Kipaji</li>
      <li>Mphavu</li>
      <li>NextGen</li>
    </ul>
  </div>


        </div>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default AgentsPage;
