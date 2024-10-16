
import Head from 'next/head'
import Link from 'next/link'
import { IoSearchSharp } from "react-icons/io5";

export default function Teams() {
  const TeamList = () => {
    const players = [
      { name: 'Kelly', position: 'Striker', team: 'Kikwetu' },
      { name: 'John', position: 'Midfielder', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
      { name: 'Chris', position: 'Defender', team: 'Kikwetu' },
    
    ]

    return (
      <div className=''>
        <h2 className="text-[40px] font-bold mb-4 text-[#177BBD] text-center">Kikwetu</h2>
        <table className="w-full">
        <thead>
  <tr className="text-black">
    <th className="p-2 text-left text-[24px] border-b-8 border-blue-600">Profile</th> 
    <th className="p-5 text-left text-[24px] border-b-8 border-blue-600">Name</th>
    <th className="p-5 text-left text-[24px] border-b-8 border-blue-600">Position</th>
    <th className="p-5 text-left text-[24px] border-b-8 border-blue-600">Team</th>
    <th className="p-5 text-left text-[24px] border-b-8 border-blue-600"></th>

    <th className="p-2"></th>
  </tr>
</thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
                <td className="p-2 ml-[8%]">
                  
                  <div className="w-12 h-12 bg-gray-300 rounded-full ml-[5%]">
                    <img src="images/player.png" alt="profile" className='' />
                  </div>
                </td>
                <td className="p-3 font-medium text-[22px]">{player.name}</td>
                <td className="p-3 font-medium text-[22px] ml-[4%]">{player.position}</td>
                <td className="p-3 font-medium text-[22px]">{player.team}</td>
                <td className="p-2 ml-[5%]">
                <button className="bg-[#46BC14] text-white px-8 py-1 rounded-[15px] h-[45px] 2xl:w-[32%] font-medium text-[22px] ml-[10%]">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

 
  return (
    <div className="flex h-screen bg-gray-100">
      <Head>
        <title>Spot Us - Teams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 p-10">

      <div className='mb-[35px] ml-[-1.5%]'>
  <div className="flex items-center w-[40%] ml-[25px] border border-black rounded-[30px] p-4 mt-[1%] bg-[#E3E3E3]">
    <IoSearchSharp className="text-xl mr-3 ml-[2%] h-[25%] w-[5%] mb-[-1%]" />
    <input 
      type="text" 
      placeholder="search" 
      className="w-full outline-none text-[21px] bg-[#E3E3E3]"
     />
  </div>
</div>
        <TeamList />
      </main>
    </div>
  )
}












