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


import React, { useState, useEffect } from "react";
import "./TenisApi.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GameList = () => {
  const [data, setData] = useState([
    { 
      sport_title: "Bal By Ball", 
      
      commence_time: new Date().toISOString(), 
      bookmakers: [
        {
          markets: [
            {
              key: "h2h", 
              outcomes: [
                { price: 1.5 }, 
                { price: 2.5 },
                { price: 3.0 }
              ]
            }
          ]
        }
      ]
    },
  ]);
  const navigate = useNavigate();
  
  useEffect(() => {
    async function fetchSportsData() {
      try {
        const response = await axios.get("http://localhost:5000/api/sports-data");
        const combinedData = [...data, ...response.data];
        setData(combinedData); // Update the state with fetched data
        console.log("Combined Sports Data:", combinedData);
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
            data.map((game, gameIndex) =>
              game.bookmakers?.map((bookmaker, bookmakerIndex) => (
                bookmaker.markets?.map((market, marketIndex) =>
                  market.key === "h2h" ? (
                    <tr
                      key={`${gameIndex}-${bookmakerIndex}-${marketIndex}`}
                      onClick={() =>
                        handleClick(gameIndex, game.id, game.home_team, game.away_team)
                      }
                      className="clickable-row"
                    >
                      <td>
                        {game.sport_title} `{game.home_team} Vs {game.away_team}`{" "}
                        {new Date(game.commence_time).toLocaleString()}
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="colspan1">{market.outcomes[0]?.price || "-"}</td>
                      <td className="colspan2">{market.outcomes[1]?.price || "-"}</td>
                      <td className="colspan1">{market.outcomes[2]?.price || "-"}</td>
                      <td className="colspan2">{market.outcomes[2]?.price || "-"}</td>
                      <td className="colspan1">{market.outcomes[1]?.price || "-"}</td>
                      <td className="colspan2">{market.outcomes[0]?.price || "-"}</td>
                    </tr>
                  ) : null
                )
              ))
            )
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
