// import React, { useState } from 'react'
// import { FaBars, FaTimes } from "react-icons/fa";
// const Navbar = () => {
//   const [favbar,setFavbar]=useState(false);

//     const links = [
//         {
//           id: 1,
//           link: "home",
//         },
//         {
//           id: 2,
//           link: "about",
//         },
//         {
//           id: 3,
//           link: "projects",
//         },
//         {
//           id: 4,
//           link: "skills",
//         },
//         {
//           id: 5,
//           link: "contact",
//         },
//       ];
//   return (
//     <div className='flex justify-between items-center w-full h-20 fixed bg-black text-white'>
//       <div>
//         <h1 className='font-signature text-5xl ml-2 px-4'>Abdulla</h1>
//       </div>

//       <ul className="md:flex hidden">
//         {links.map(({ id, link }) => {
//           return <li
//             key={id}
//             className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110    duration-200"
//           >
//               {link}
            
//           </li>
//         })}
//       </ul>
//       <div
//         onClick={() => setFavbar(!favbar)}
//         className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
//       >
//         {favbar ? <FaTimes size={30} /> : <FaBars size={30} />}
//       </div>
//         {favbar&&
//           <ul className='absolute top-0 left-0 justify-center items-center w-full h-screen bg-gradient-to-b from-black to bg-gray-800 text-gray-500  flex flex-col'>
//           {links.map(({ id, link }) => {
//           return <li
//             key={id}
//             className="px-4 cursor-pointer capitalize font-medium text-center text-4xl text-gray-500 py-6 hover:bg-slate-300 align-middle  w-full "
//           >
//               {link}
            
//           </li>
//         })}
//           </ul>}

//     </div>
//   )
// }

// export default Navbar


import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Yash</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
