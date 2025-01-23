// const express = require('express');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const axios = require("axios");
// const User=require('./models/UserSignUp');
// const User_Wallet=require('./models/Wallet');
// const betRoutes = require('./Routes/betRoutes');
// const ApiRoutes = require('./Routes/ApiRoutes');
// const app = express();
// const PORT = 5000;
// app.use(bodyParser.json());
// app.use(cors());

// mongoose.connect('mongodb://localhost:27017/vijetha_exchange')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.log('Error connecting to MongoDB: ', err));


// app.post('/api/signup', async (req, res) => {
//   const { username, email, password } = req.body;

//   // Check if the user already exists
//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return res.status(400).json({ message: 'User already exists' });
//   }

//   // Hash password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create new user
//   const newUser = new User({
//     username,
//     email,
//     password: hashedPassword
//   });

//   try {
//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });


// app.post('/api/login', async (req, res) => {
//         const { username, password } = req.body;
      
//         try {
//           // Check if the user exists
//           const user = await User.findOne({ username });
//           if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//           }
      
//           // Compare the password
//           const isPasswordValid = await bcrypt.compare(password, user.password);
//           if (!isPasswordValid) {
//             return res.status(401).json({ message: 'Invalid password' });
//           }
      
//           // If password matches, send success response
//           res.status(200).json({ message: 'Login successful', user: { username: user.username, email: user.email } });
//         } catch (err) {
//           console.error(err);
//           res.status(500).json({ message: 'Server error' });
//         }
//       });


//       const API_KEY = "00ab9edf2816c39de6acd27a23b6ce11";
//       const BASE_URL = "https://api.the-odds-api.com/v4/sports/cricket/odds/";
      
//       app.get("/api/sports-data", async (req, res) => {
//         try {
//           const url = `${BASE_URL}?apiKey=${API_KEY}&regions=uk&markets=h2h&oddsFormat=decimal`;
//           const response = await axios.get(url);
//           res.json(response.data);
//         } catch (error) {
//           console.error("Error fetching data:", error.message);
//           res.status(500).json({ error: "Failed to fetch sports data" });
//         }
//       });


//       app.get('/api/balance', async (req, res) => {
//         try {
//           let wallet = await User_Wallet.findOne(); // Retrieve wallet document
//           if (!wallet) {
//             wallet = new User_Wallet({ balance: 15000 }); // Use default balance from schema
//             await wallet.save();
//           }
      
          
//           res.json({ balance: wallet.balance });

//         } catch (err) {
//           console.error(err);
//           res.status(500).json({ message: 'Server error' });
//         }
//       });
 
//       app.use(betRoutes);
//       app.use(ApiRoutes);
















//       // const http = require("http");
//       // const { Server } = require("socket.io");




//       // const server = http.createServer(app);
//       // const io = new Server(server, { cors: { origin: "*" } });
      
//       // // Game State
//       // let multiplier = 1.0;
//       // let flying = true;
      
//       // io.on("connection", (socket) => {
//       //     console.log("User connected");
      
//       //     const startGame = () => {
//       //         multiplier = 1.0;
//       //         flying = true;
      
//       //         const gameInterval = setInterval(() => {
//       //             multiplier += 0.01;
      
//       //             io.emit("updateMultiplier", multiplier);
      
//       //             if (Math.random() < 0.01 || multiplier > 1) {
//       //                 flying = false;
//       //                 clearInterval(gameInterval);
//       //                 io.emit("gameOver", multiplier);
//       //             }
//       //         }, 100);
//       //     };
      
//       //     socket.on("placeBet", (bet) => {
//       //         console.log(`Bet Placed: ${bet.amount}`);
//       //         io.emit("betPlaced", { user: bet.user, amount: bet.amount });
//       //     });
      
//       //     startGame();
//       // });












// // Start server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



































//for multuser changes 


const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require("axios");
const jwt = require('jsonwebtoken');
const User = require('./models/UserSignUp');
const User_Wallet = require('./models/Wallet');
const betRoutes = require('./Routes/betRoutes');
const ApiRoutes = require('./Routes/ApiRoutes');

// Load environment variables from .env file
// require('dotenv').config(); // Using CommonJS style for dotenv

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: "https://www.bunnybet9.in", // Replace '*' with the specific origin(s) you want to allow, e.g., 'https://yourdomain.com'
    methods: ['POST', 'GET'], // Define allowed HTTP methods
    credentials: true, // Allow credentials like cookies to be sent
  })
);

// Access environment variables
const PORT =5000;
const MONGO_URI ='mongodb+srv://infusionwebsitescoin:FG6zMJvr2BKJ9Vph@cluster0.rnz0y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB: ', err));

const JWT_SECRET = 'bunneybet'
app.get('/api/name/:id', async (req, res) => {
  const { id } = req.params; // Access the 'id' from the URL parameter

  try {
    // Find the user by the provided ID from MongoDB
    const user = await User.findById(id);
    const Wallet = await User_Wallet.findOne({ user: id });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Respond with the username
    res.json({ username: user.username ,walletBalance: Wallet.balance});
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Routes

// Signup Route

app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Ensure all fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    // Create a wallet for the new user
    const wallet = new User_Wallet({
      user: savedUser._id,
      balance: 15000, // Set an initial wallet balance if desired
    });
    await wallet.save();

    // Link the wallet to the user
    savedUser.wallet = wallet._id;
    await savedUser.save();
    // Respond with success
    res.status(201).json({
      message: 'User registered successfully',
      user: { id: savedUser._id, username: savedUser.username, email: savedUser.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


// Login Route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  try {
    const user = await User.findOne({ username }).populate('wallet');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        walletBalance: user.wallet?.balance || 0,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});


      const API_KEY = "48fd6c53ac5aebb752ef248b659f5992";
      const BASE_URL = "https://api.the-odds-api.com/v4/sports/cricket/odds/";
      
      app.get("/api/sports-data", async (req, res) => {
        try {
          const url = `${BASE_URL}?apiKey=${API_KEY}&regions=uk&markets=h2h&oddsFormat=decimal`;
          const response = await axios.get(url);
          res.json(response.data);
        } catch (error) {
          console.error("Error fetching data:", error.message);
          res.status(500).json({ error: "Failed to fetch sports data" });
        }
      });




      
      app.get('/api/balance', async (req, res) => {
        try {
          let wallet = await User_Wallet.findOne(); // Retrieve wallet document
          if (!wallet) {
            wallet = new User_Wallet({ balance: 15000 }); // Use default balance from schema
            await wallet.save();
          }
      
          
          res.json({ balance: wallet.balance });

        } catch (err) {
          console.error(err);
          res.status(500).json({ message: 'Server error' });
        }
      });
 
      app.use(betRoutes);
      app.use(ApiRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
