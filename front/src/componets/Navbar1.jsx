
// import NavbarB from '../componets/NavbarB';
// import React, { useState ,useEffect} from "react";
// import "./Nabvar1.css";
// import Football from './Football';  // Import Football component
// import HorseRacing from './HorseRacing';
// import EGames from './EGames';
// import BasketBall from './BasketBall';
// import "./Rules.css";
// import axios from 'axios'
// import MainCom from '../MainSection/MainCom'
// const Navbar1 = () => {
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//     const [selectedSport, setSelectedSport] = useState(null);
//     const [clickedSport, setClickedSport] = useState(null);
//    const [balance, setBalance] = useState(0);
//     useEffect(() => {
//       const fetchBalance = async () => {
//         try {
//           const res = await axios.get('http://localhost:5000/api/balance');
//           setBalance(res.data.balance);
//         } catch (err) {
//           console.error('Error fetching balance:', err);
//         }
//       };
  
//       fetchBalance();
//     }, []);
  
//     const toggleModal = () => {
//       setIsOpen(!isOpen);
//     };
  
//     const handleSportClick = (sport) => {
//       setSelectedSport(sport);
//       setClickedSport(sport);
//     };
  
//     const getButtonStyle = (sport) => {
//       return sport === clickedSport
//         ? { backgroundColor: 'rgb(37, 46, 82)', color: 'white' }
//         : {};
//     };

//   const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);


//   return(
//     <div>
//     <nav id="navbar">
//       <div id="navbar-container">
//         <h1 id="logo">
//            Bunnybet9
//         </h1>
//         <ul id="nav-menu">
//           <li>
//             <button id="search-button" className="nav-button">
//               <i className="fas fa-search"></i>
//             </button>
//           </li>
//           <li>
//             <button id="rules-button" className="nav-button" onClick={toggleModal}>
//               Rules
//             </button>
//           </li>
//           <li>
//             <button id="balance-button" className="nav-button">
//                Balance:{balance}
//             </button>
//           </li>
//           <li>
//             <button id="exp-button" className="nav-button">
//               Exp: 0
//             </button>
//           </li>
//           <li>
//             <button
//               id="demo-button"
//               className="nav-button"
//               onClick={toggleDropdown}
//             >
//               Demo <i className={`fas fa-caret-down ${isDropdownVisible ? "rotate" : ""}`}></i>
//             </button>
//             {isDropdownVisible && (
//               <div className="dropdown-menu">
//                 <button className="dropdown-item"> <a href="/account">Account Statements</a></button>
//                 <button className="dropdown-item"> <a href="/currbet">Current Bet</a></button>
//                 <button className="dropdown-item"> <a href="/cas">Casino Result</a></button>
//                 <button className="dropdown-item">Set Button Values</button>
//                 <button className="dropdown-item">
//                   <a href="/login">Login</a>
//                 </button>
//                 <button className="dropdown-item">
//                   <a href="/signup">SignOut</a>
//                 </button>
                
//               </div>
//             )}
//           </li>
//         </ul>
//       </div>

//       <div id="scrolling-line">
//         Big Bash League 2024-25 is Live! Scratch to Unlock Incredible Rewards!
//       </div>

//       {/* Popup Modal */}
//       {isOpen && (
//         <div
//         className="modal fade show"
//         tabIndex="-1"
//         style={{
//           display: 'block',
//           height: '100%',
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//         }}
//         aria-labelledby="exampleModalLabel"
//         aria-hidden="true"
//       >
//         <div
//           className="modal-dialog"
//           style={{
//             height: '100%',
//             width: '90%', // Adjusted width for better responsiveness
//             maxWidth: 'none',
//             margin: 'auto',
//           }}
//         >
//           <div className="modal-content" style={{ height: '100%' }}>
//             <div className="modal-header">
//               <h5 className="modal-title" id="exampleModalLabel">
//                 Rules
//               </h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 onClick={toggleModal}
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="modal-body" style={{ overflowY: 'auto' }}>
//               <div className="rules-sidebar">
//                 <button
//                   className="rules-button"
//                   onClick={() => handleSportClick('Football')}
//                   style={getButtonStyle('Football')}
//                 >
//                   Football
//                 </button>
//                 <button
//                   className="rules-button"
//                   onClick={() => handleSportClick('Horse Racing')}
//                   style={getButtonStyle('Horse Racing')}
//                 >
//                   Horse Racing
//                 </button>
//                 <button
//                   className="rules-button"
//                   onClick={() => handleSportClick('E Gaming')}
//                   style={getButtonStyle('E Gaming')}
//                 >
//                   E Gaming
//                 </button>
//                 <button
//                   className="rules-button"
//                   onClick={() => handleSportClick('Basketball')}
//                   style={getButtonStyle('Basketball')}
//                 >
//                   Basketball
//                 </button>
//               </div>
//               <div className="rule-book">
//                 {selectedSport === 'Football' && <Football />}
//                 {selectedSport === 'Horse Racing' && <HorseRacing />}
//                 {selectedSport === 'E Gaming' && <EGames />}
//                 {selectedSport === 'Basketball' && <BasketBall />}
//               </div>
//             </div>
//             <div className="modal-footer">
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={toggleModal}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       )}
//     </nav>
//    <div>
//    <NavbarB/>
//    </div>
//    <div>
//    <MainCom/>
//    </div>
//    </div>
//   );
// };

// export default Navbar1;

















//for multiser changes 

import NavbarB from '../componets/NavbarB';
import React, { useState ,useEffect} from "react";
import "./Nabvar1.css";
import Football from './Football';  // Import Football component
import HorseRacing from './HorseRacing';
import EGames from './EGames';
import BasketBall from './BasketBall';
import "./Rules.css";
import axios from 'axios'
import MainCom from '../MainSection/MainCom'
const Navbar1 = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
    const [selectedSport, setSelectedSport] = useState(null);
    const [clickedSport, setClickedSport] = useState(null);
 
  const [profile, setProfile] = useState({ username: 'Demo', walletBalance: 850});
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchNameWallet = async () => {
      const userData = localStorage.getItem('user');
      if (!userData) {
        console.error('User data not found in localStorage');
        return;
      }
  
      const objectId = JSON.parse(userData);
      const id = objectId.id; // Extract the user id
  
      try {
        const res = await axios.get(`http://localhost:5000/api/name/${id}`);
        setProfile({
          username: res.data.username,
          walletBalance:res.data.walletBalance
        });
      } catch (err) {
        console.error('Error fetching profile:', err);
      }
    };
  
    fetchNameWallet();
  }, []);
    const toggleModal = () => {
      setIsOpen(!isOpen);
    };
  
    const handleSportClick = (sport) => {
      setSelectedSport(sport);
      setClickedSport(sport);
    };
  
    const getButtonStyle = (sport) => {
      return sport === clickedSport
        ? { backgroundColor: 'rgb(37, 46, 82)', color: 'white' }
        : {};
    };

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);


  return(
    <div>
    <nav id="navbar">
      <div id="navbar-container">
        <h1 id="logo">
           Bunnybet9
        </h1>
        <ul id="nav-menu">
          <li>
            <button id="search-button" className="nav-button">
              <i className="fas fa-search"></i>
            </button>
          </li>
          <li>
            <button id="rules-button" className="nav-button" onClick={toggleModal}>
              Rules
            </button>
          </li>
          <li>
            <button id="balance-button" className="nav-button">
               Balance:{profile.walletBalance}
            </button>
          </li>
          <li>
            <button id="exp-button" className="nav-button">
              Exp: 0
            </button>
          </li>
          <li>
            <button
              id="demo-button"
              className="nav-button"
              onClick={toggleDropdown}
            >
              {profile.username} <i className={`fas fa-caret-down ${isDropdownVisible ? "rotate" : ""}`}></i>
            </button>
            {isDropdownVisible && (
              <div className="dropdown-menu">
                <button className="dropdown-item"> <a href="/account">Account Statements</a></button>
                <button className="dropdown-item"> <a href="/currbet">Current Bet</a></button>
                <button className="dropdown-item"> <a href="/cas">Casino Result</a></button>
                <button className="dropdown-item">Set Button Values</button>
                <button className="dropdown-item">
                  <a href="/login">Login</a>
                </button>
                {/* <button className="dropdown-item">
                  <a href="/signup">SignOut</a>
                </button> */}
                <button
  className="dropdown-item"
  onClick={() => {
    localStorage.removeItem('token'); // Remove specific key
    localStorage.removeItem('user'); // Remove specific key
    // Or use localStorage.clear() to remove all stored keys
    window.location.href = '/signup'; // Redirect to the signup page
  }}
>
  SignOut
</button>

              </div>
            )}
          </li>
        </ul>
      </div>

      <div id="scrolling-line">
        Big Bash League 2024-25 is Live! Scratch to Unlock Incredible Rewards!
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div
        className="modal fade show"
        tabIndex="-1"
        style={{
          display: 'block',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{
            height: '100%',
            width: '90%', // Adjusted width for better responsiveness
            maxWidth: 'none',
            margin: 'auto',
          }}
        >
          <div className="modal-content" style={{ height: '100%' }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Rules
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={toggleModal}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ overflowY: 'auto' }}>
              <div className="rules-sidebar">
                <button
                  className="rules-button"
                  onClick={() => handleSportClick('Football')}
                  style={getButtonStyle('Football')}
                >
                  Football
                </button>
                <button
                  className="rules-button"
                  onClick={() => handleSportClick('Horse Racing')}
                  style={getButtonStyle('Horse Racing')}
                >
                  Horse Racing
                </button>
                <button
                  className="rules-button"
                  onClick={() => handleSportClick('E Gaming')}
                  style={getButtonStyle('E Gaming')}
                >
                  E Gaming
                </button>
                <button
                  className="rules-button"
                  onClick={() => handleSportClick('Basketball')}
                  style={getButtonStyle('Basketball')}
                >
                  Basketball
                </button>
              </div>
              <div className="rule-book">
                {selectedSport === 'Football' && <Football />}
                {selectedSport === 'Horse Racing' && <HorseRacing />}
                {selectedSport === 'E Gaming' && <EGames />}
                {selectedSport === 'Basketball' && <BasketBall />}
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      )}
    </nav>
   <div>
   <NavbarB/>
   </div>
   <div>
   <MainCom/>
   </div>
   </div>
  );
};

export default Navbar1;
