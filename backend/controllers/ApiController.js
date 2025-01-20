const axios = require("axios");
      exports.getAllData = async (req, res) => {
        try {
          // const url = `https://api.cricapi.com/v1/currentMatches?apikey=538b1cae-32e4-44c7-89be-ed9b67bf6546&offset=0`;
          // const url2 = `https://api.cricapi.com/v1/currentMatches?apikey=1820f0cd-e271-4df5-86bd-ee8b96af4b1b&offset=0`;
          const url3=`https://api.cricapi.com/v1/currentMatches?apikey=caf4e347-fcfd-41fa-83ca-67e5c81dbf3e&offset=0`
          const response = await axios.get(url3);
          
          res.json(response.data);
        } catch (error) {
          console.error("Error fetching data:", error.message);
          res.status(500).json({ error: "Failed to fetch sports data" });
        }
      };