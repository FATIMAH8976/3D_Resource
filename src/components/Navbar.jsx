import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const DiscordIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3671C18.7873 3.5483 17.147 2.9155 15.4319 2.481C15.4007 2.4746 15.3695 2.4913 15.3534 2.5156C15.1424 2.9069 14.9087 3.418 14.7451 3.8378C12.9004 3.5846 11.0652 3.5846 9.25832 3.8378C9.09465 3.4095 8.85636 2.9069 8.64347 2.5156C8.62743 2.4916 8.5962 2.4758 8.56493 2.481C6.84965 2.9149 5.20772 3.5477 3.67795 4.3671C3.66331 4.3735 3.65055 4.3827 3.64055 4.3943C0.533635 9.0582 -0.31928 13.5991 0.0991801 18.0874C0.101072 18.1126 0.113142 18.1361 0.130628 18.1543C1.93779 19.6018 3.71216 20.3236 5.45564 20.8076C5.48691 20.8153 5.52057 20.8038 5.53425 20.7756C5.95345 20.0077 6.31216 19.2042 6.61057 18.3722C6.63185 18.3176 6.60082 18.2629 6.54511 18.2429C5.78879 17.9883 5.07477 17.6772 4.37972 17.3139C4.32404 17.2822 4.32139 17.1967 4.37415 17.1623C4.47819 17.0902 4.5822 17.0167 4.68564 16.9429C4.70633 16.9274 4.73267 16.9257 4.75363 16.9384C8.05667 18.7641 11.7779 19.713 15.4327 18.7641C15.4564 18.7573 15.4816 18.7603 15.4965 18.7729C15.5999 18.8467 15.7039 18.9203 15.8079 18.9924C15.8314 19.009 15.8591 19.0107 15.8791 18.999C16.5832 18.3655 17.2968 17.6772 17.6552 16.8453C17.6765 16.7907 17.645 16.7306 17.5893 16.7106C16.8829 16.4561 16.1689 16.1449 15.4725 15.7817C15.4166 15.7493 15.414 15.6639 15.4687 15.6296C15.5727 15.5574 15.6767 15.4841 15.7799 15.4102C15.8009 15.3947 15.8282 15.3931 15.8483 15.4058C19.0899 17.0652 22.8383 17.0652 25.9566 15.4058C25.9767 15.3922 26.004 15.3938 26.025 15.4093C26.1282 15.4832 26.2322 15.5574 26.3362 15.6296C26.3918 15.6639 26.3893 15.7502 26.3334 15.7817C25.637 16.1515 24.923 16.4627 24.2166 16.7172C24.1609 16.7372 24.1294 16.7973 24.1507 16.852C24.5082 17.6839 25.2218 18.3722 25.9259 19.0057C25.9459 19.0183 25.9732 19.0166 25.9942 19.001C26.0982 18.9272 26.2022 18.8536 26.3062 18.7814C26.3313 18.7641 26.3547 18.7656 26.3725 18.7809C26.7935 20.3236 27.5675 21.863 28.8575 23.1575C28.8758 23.1768 28.9047 23.1909 28.9341 23.1852C30.6888 22.8765 32.3659 22.1565 33.9272 20.8077C33.9424 20.7897 33.9516 20.7674 33.9533 20.7442C34.4556 15.8618 33.7428 11.3452 30.4273 4.3943C30.4176 4.3827 30.405 4.3735 30.3903 4.3671ZM10.8933 14.6788C9.50547 14.6788 8.3544 13.4569 8.3544 11.9480C8.3544 10.4391 9.48794 9.21727 10.8933 9.21727C12.3018 9.21727 13.4528 10.4391 13.4528 11.9480C13.4528 13.4569 12.2983 14.6788 10.8933 14.6788ZM17.8789 14.6788C16.4911 14.6788 15.3400 13.4569 15.3400 11.9480C15.3400 10.4391 16.4735 9.21727 17.8789 9.21727C19.2874 9.21727 20.4384 10.4391 20.4384 11.9480C20.4384 13.4569 19.2874 14.6788 17.8789 14.6788Z"/>
  </svg>
);

const styles_animation = `
  @keyframes discordButtonShine {
    0% {
      box-shadow: 0 0 10px rgba(30, 41, 82, 0.6), 0 0 20px rgba(59, 130, 246, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(30, 41, 82, 1), 0 0 40px rgba(59, 130, 246, 0.7), 0 0 60px rgba(30, 41, 82, 0.5);
    }
    100% {
      box-shadow: 0 0 10px rgba(30, 41, 82, 0.6), 0 0 20px rgba(59, 130, 246, 0.3);
    }
  }
  
  .discord-button-glow {
    animation: discordButtonShine 2.5s ease-in-out infinite;
  }
`;

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{styles_animation}</style>
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Clypso &nbsp;
            <span className='sm:block hidden'> | Resources</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <a
          href='https://discord.gg/YOUR-SERVER-INVITE'
          target='_blank'
          rel='noopener noreferrer'
          className='hidden sm:flex items-center gap-2 px-6 py-2 bg-white text-primary rounded-md font-medium hover:bg-opacity-90 transition duration-300 discord-button-glow'
        >
          <span className='text-indigo-600'>
            <DiscordIcon />
          </span>
          Discord
        </a>

        <div className='sm:hidden flex flex-1 justify-end items-center gap-4'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === link.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <li>
                <a
                  href='https://discord.gg/YOUR-SERVER-INVITE'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-secondary hover:text-white transition duration-300 flex items-center gap-2'
                >
                  <span className='discord-shine text-indigo-600'>
                    <DiscordIcon />
                  </span>
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;