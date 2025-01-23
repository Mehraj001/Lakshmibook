// import React, { useState, useEffect } from "react";
// import "./TenisApi.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// const GameList = () => {
//   const [data, setData] = useState([
//     { sport_title: "Bal By Ball", home_team: "Team A", away_team: "Team B", commence_time: new Date().toISOString(), bookmakers: [] },
//   ]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchSportsData() {
//       try {
//         const response = await axios.get("http://localhost:5000/api/sports-data");
//         const combinedData = [...data, ...response.data];
//         setData(combinedData); // Update the state with fetched data
//         console.log("Sports Data:", response.data);
//       } catch (error) {
//         console.error("Error fetching sports data:", error.message);
//       }
//     }

//     fetchSportsData();
//   }, []);


//   const handleClick = (index, gameId, homeTeam, awayTeam) => {
//     navigate(`/play${index}`, { 
//       state: { 
//         game_id: gameId,
//         home_team: homeTeam,
//         away_team: awayTeam 
//       } 
//     });
//   };

//   return (
//     <div className="game-list">
//       <table className="responsive-table">
//         <thead>
//           <tr>
//             <th>Game</th>
//             <th className="table-center"></th>
//             <th className="table-center"></th>
//             <th className="table-center"></th>
//             <th className="table-center"></th>
//             <th className="table-center"></th>
//             <th className="table-center" colSpan={2}>1</th>
//             <th className="table-center" colSpan={2}>+</th>
//             <th className="table-center" colSpan={2}>2</th>
//           </tr>
//         </thead>
//         <tbody>
//   {data.length > 0 ? (
//     data.map((game, gameIndex) =>
//       game.bookmakers?.map((bookmaker, bookmakerIndex) => (
//         bookmaker.markets?.map((market, marketIndex) =>
//           market.key === "h2h" ? (
//             <tr
//               key={`${gameIndex}-${bookmakerIndex}-${marketIndex}`}
//               onClick={() => handleClick(gameIndex,game.id,game.home_team, game.away_team)}
//               className="clickable-row"
//             >
//               <td>
//                 {game.sport_title} `{game.home_team} Vs {game.away_team}`{" "}
//                 {new Date(game.commence_time).toLocaleString()}
//               </td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td className="colspan1">{market.outcomes[0]?.price || "-"}</td>
//               <td className="colspan2">{market.outcomes[1]?.price || "-"}</td>
//               <td className="colspan1">{market.outcomes[2]?.price || "-"}</td>
//               <td className="colspan2">{market.outcomes[2]?.price || "-"}</td>
//               <td className="colspan1">{market.outcomes[1]?.price || "-"}</td>
//               <td className="colspan2">{market.outcomes[0]?.price || "-"}</td>
//             </tr>
//           ) : null
//         )
//       ))
//     )
//   ) : (
//     <tr>
//       <td colSpan="12" className="table-center">
//         No Data Available
//       </td>
//     </tr>
//   )}
// </tbody>
//       </table>
//     </div>
//   );
// };

// export default GameList;


// import React, { useState, useEffect } from "react";
// import "./TenisApi.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const GameList = () => {
//   const [data, setData] = useState([
//     { 
//       sport_title: "Bal By Ball", 

//       commence_time: new Date().toISOString(), 
//       bookmakers: [
//         {
//           markets: [
//             {
//               key: "h2h", 
//               outcomes: [
//                 { price: 1.5 }, 
//                 { price: 2.5 },
//                 { price: 3.0 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//   ]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function fetchSportsData() {
//       try {
//         // const response = await axios.get("http://localhost:5000/api/sports-data");
//         const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/sports-data`);
//         const combinedData = [...data, ...response.data];
//         setData(combinedData); // Update the state with fetched data
//         console.log("Combined Sports Data:", combinedData);
//       } catch (error) {
//         console.error("Error fetching sports data:", error.message);
//       }
//     }

//     fetchSportsData();
//   }, []); // Fetch data once on component mount

//   const handleClick = (index, gameId, homeTeam, awayTeam) => {
//     navigate(`/play${index}`, { 
//       state: { 
//         game_id: gameId,
//         home_team: homeTeam,
//         away_team: awayTeam 
//       } 
//     });
//   };

//   return (

//     <div className="game-list">
//       <table className="responsive-table">
//         <thead>
//           <tr>
//             <th>Game</th>
//             <th className="table-center"></th>
//             <th className="table-center"></th>
//             <th className="table-center"></th>
//             <th className="table-center"></th>
//             <th className="table-center"></th>
//             <th className="table-center" colSpan={2}>1</th>
//             <th className="table-center" colSpan={2}>+</th>
//             <th className="table-center" colSpan={2}>2</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.length > 0 ? (
//             data.map((game, gameIndex) =>
//               game.bookmakers?.map((bookmaker, bookmakerIndex) => (
//                 bookmaker.markets?.map((market, marketIndex) =>
//                   market.key === "h2h" ? (
//                     <tr
//                       key={`${gameIndex}-${bookmakerIndex}-${marketIndex}`}
//                       onClick={() =>
//                         handleClick(gameIndex, game.id, game.home_team, game.away_team)
//                       }
//                       className="clickable-row"
//                     >
//                       <td>
//                         {game.sport_title} `{game.home_team} Vs {game.away_team}`{" "}
//                         {new Date(game.commence_time).toLocaleString()}
//                       </td>
//                       <td></td>
//                       <td></td>
//                       <td></td>
//                       <td></td>
//                       <td></td>
//                       <td className="colspan1">{market.outcomes[0]?.price || "-"}</td>
//                       <td className="colspan2">{market.outcomes[1]?.price || "-"}</td>
//                       <td className="colspan1">{market.outcomes[2]?.price || "-"}</td>
//                       <td className="colspan2">{market.outcomes[2]?.price || "-"}</td>
//                       <td className="colspan1">{market.outcomes[1]?.price || "-"}</td>
//                       <td className="colspan2">{market.outcomes[0]?.price || "-"}</td>
//                     </tr>
//                   ) : null
//                 )
//               ))
//             )
//           ) : (
//             <tr>
//               <td colSpan="12" className="table-center">
//                 No Data Available
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default GameList;



import React, { useState, useEffect } from "react";
import "./TenisApi.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GameList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSportsData() {
      try {
        const response = await axios.get(`https://lakshmibook-api.vercel.app//api/sports-data`);

        // Combine existing data with newly fetched data to avoid duplication
        const combinedData = [...data, ...response.data];
        setData(combinedData); // Update the state with fetched data
        console.log("Fetched Sports Data:", combinedData);
      } catch (error) {
        console.error("Error fetching sports data:", error.message);
      }
    }

    fetchSportsData();
  }, []); // Fetch data once on component mount

  const handleClick = (index, gameId, homeTeam, awayTeam) => {
    navigate(`/play${index}`, {
      state: {
        game_id: gameId,
        home_team: homeTeam,
        away_team: awayTeam
      }
    });
  };

  return (
    <div className="game-list">
      <table className="responsive-table">
        <thead>
          <tr>
            <th>Game</th>
            <th className="table-center"></th>
            <th className="table-center"></th>
            <th className="table-center"></th>
            <th className="table-center"></th>
            <th className="table-center"></th>
            <th className="table-center" colSpan={2}>1</th>
            <th className="table-center" colSpan={2}>+</th>
            <th className="table-center" colSpan={2}>2</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((game, gameIndex) => {
              // Extract odds from the first 4 bookmakers for each outcome (Home, Draw, Away)
              const odds1 = game.bookmakers.slice(0, 2)
                .flatMap(bookmaker =>
                  bookmaker.markets
                    .filter(market => market.key === "h2h") // Filtering for head-to-head markets
                    .flatMap(market =>
                      market.outcomes.filter(outcome => outcome.name === game.home_team) // Matching outcome to home team
                    )
                )
                .map(outcome => outcome.price); // Store as an array (no .join)


              const oddsPlus = game.bookmakers.slice(0, 2)
                .flatMap(bookmaker =>
                  bookmaker.markets
                    .filter(market => market.key === "h2h")
                    .flatMap(market =>
                      market.outcomes.filter(outcome => outcome.name === "Draw") // Matching outcome to draw
                    )
                )
                .map(outcome => outcome.price);


              const odds2 = game.bookmakers.slice(0, 2)
                .flatMap(bookmaker =>
                  bookmaker.markets
                    .filter(market => market.key === "h2h")
                    .flatMap(market =>
                      market.outcomes.filter(outcome => outcome.name === game.away_team) // Matching outcome to away team
                    )
                )
                .map(outcome => outcome.price);

              return (
                <tr
                  key={gameIndex}
                  onClick={() => handleClick(gameIndex, game.id, game.home_team, game.away_team)}
                  className="clickable-row"
                >
                  <td>
                    {game.sport_title} `{game.home_team} Vs {game.away_team}`{" "}
                    {new Date(game.commence_time).toLocaleString()}
                  </td>
                  <td style={{ textAlign: "center", verticalAlign: "middle" }}>

                    <span
                      className="active-circle"
                      style={{
                        display: "inline-block",
                        width: "11px",
                        height: "11px",
                        backgroundColor: "green",
                        borderRadius: "50%",
                      }}
                    ></span></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  {/* <td className="colspan1">{odds1[0] || "-"}</td> */}
                  <td
                    className="colspan1"
                    style={odds2.length > 1 ? {} : {
                      backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
                      backgroundColor: 'black',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      filter: 'invert(1)' // This will invert the colors and turn the image white
                    }}
                  >
                    {odds1.length > 1 ? odds1[0] : "-"}
                  </td>
                  {/* <td className="colspan2">{odds1[1] || "-"}</td> */}
                  <td
                    className="colspan2"
                    style={odds2.length > 1 ? {} : {
                      backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
                
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      filter: 'invert(1)' // This will invert the colors and turn the image white
                    }}
                  >
                    {odds1.length > 1 ? odds1[1] : "-"}
                  </td>
                  {/* <td className="colspan1">{oddsPlus[0] || "-"}</td> */}
                  <td
                    className="colspan1"
                    style={odds2.length > 1 ? {} : {
                      backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
                      backgroundColor: 'black',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      filter: 'invert(1)' // This will invert the colors and turn the image white
                    }}
                  >
                    {oddsPlus.length > 1 ? oddsPlus[0] : "-"}
                  </td>
                  {/* <td className="colspan2">{oddsPlus[1] || "-"}</td> */}
                  <td
                    className="colspan2"
                    style={odds2.length > 1 ? {} : {
                      backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
                      backgroundColor: 'black',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      filter: 'invert(1)' // This will invert the colors and turn the image white
                    }}
                  >
                    {oddsPlus.length > 1 ? oddsPlus[1] : "-"}
                  </td>

                  {/* <td className="colspan1">{odds2[0] || "-"}</td> */}
                  <td
                    className="colspan1"
                    style={odds2.length > 1 ? {} : {
                      backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
                      backgroundColor: 'black',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      filter: 'invert(1)' // This will invert the colors and turn the image white
                    }}
                  >
                    {odds2.length > 1 ? odds2[0] : "-"}
                  </td>

                  {/* <td className="colspan2">{odds2[1] || "-"}</td> */}
                  <td
                    className="colspan2"
                    style={odds2.length > 1 ? {} : {
                      backgroundImage: 'url(https://g1ver.sprintstaticdata.com/v40/static/front/img/icons/lock.svg)',
                      backgroundColor: 'black',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      filter: 'invert(1)' // This will invert the colors and turn the image white
                    }}
                  >
                    {odds2.length > 1 ? odds2[1] : "-"}
                  </td>

                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="12" className="table-center">
                No Data Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GameList;
