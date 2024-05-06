// Import required modules
// const express = require('express')
// const mysql = require('mysql2/promise') // Using promise version for async/await
// const bodyParser = require('body-parser')
// const session = require('express-session') // Import session module
// const path = require('path')
// const bcrypt = require('bcrypt')
// const cookieParser = require('cookie-parser')
// const { route } = require('./routes/authRoute')

// // Create Express app
// const app = express()

// // Set the view engine to EJS
// app.set('view engine', 'ejs')

// // Set the directory for views
// app.set('views', path.join(__dirname, 'views'))

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
// app.use(cookieParser())
// app.use(
//   session({ secret: 'your-secret-key', resave: true, saveUninitialized: true })
// ) // Initialize session

// // MySQL Connection
// const pool = mysql.createPool({
//   host: '127.0.0.1',
//   user: 'root',
//   password: 'Odkanhe@2003',
//   database: 'lab'
// })

// // Connect to MySQL
// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error connecting to MySQL: ', err)
//     return
//   }
//   console.log('Connected to MySQL')
//   connection.release()
// })

// app.use("/", route);

// app.get('/', (req, res) => {
//   res.send('root')
// })


// // Route for registration (signup)
// app.post('/signup', async (req, res) => {
//   const {
//     fullname,
//     contact_no,
//     lab_name,
//     lab_license,
//     email,
//     password
//   } = req.body

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10)

//     // Insert data into registrations table
//     const [rows, fields] = await pool.query(
//       'INSERT INTO lab_registration ( fullname, contact_no, lab_name, lab_license, email, password) VALUES ( ?, ?, ?, ?, ?, ?)',
//       [
       
//         fullname,
//         contact_no,
//         lab_name,
//         lab_license,
//         email,
//         hashedPassword
//       ]
//     )

//     console.log('User registered successfully')
//     return res.status(201).json({  message:"User registered"});
//     res.cookie('registrationSuccess', true, { maxAge: 900000, httpOnly: true })
//   } catch (error) {
//     console.error('Error registering user: ', error)
//     res.status(500).json({ error: 'Failed to register user' })
//   }
//   // res.render('profile.ejs') // Render the register.ejs page after successful registration
// })

// // Route for profile page
// app.get('/profile', async (req, res) => {
//   try {
//     const [rows, fields] = await pool.query('SELECT * FROM lab_registration')
//     // res.render('profile', { labRegistrationData: rows }) // Pass lab_registration data to the profile.ejs file
//     return res.status(200).json({rows})
//   } catch (error) {
//     console.error('Error fetching user data: ', error)
//     res.status(500).send('Internal Server Error')
//   }
// })

// // Route for lab profile creation
// app.post('/lab_profile', async (req, res) => {
//   const { lab_id, address, landmark, city, district, state, country, pincode } =
//     req.body

//   // Assuming you have obtained the email address of the logged-in user from the session
//   const email = req.session.email

//   try {
//     // Retrieve owner_id based on the email address
//     const [rows, fields] = await pool.query(
//       'SELECT owner_id FROM lab_registration WHERE email = ?',
//       [email]
//     )

//     if (rows.length === 0) {
//       res.status(400).json({ error: 'User not found' })
//       return
//     }

//     const owner_id = rows[0].owner_id

//     // Insert data into lab_profiles table with the obtained owner_id
//     const [insertRows, insertFields] = await pool.query(
//       'INSERT INTO lab_profiles (lab_id, address, landmark, city, district, state, country, pincode, registration_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
//       [
//         lab_id,
//         address,
//         landmark,
//         city,
//         district,
//         state,
//         country,
//         pincode,
//         owner_id
//       ]
//     )

//     console.log('Lab profile created successfully')
//     return res.status(200).json({ message: 'Lab profile created successfully' })
//   } catch (error) {
//     console.error('Error creating lab profile: ', error)
//     return res.status(500).json({ error: 'Failed to create lab profile' })
//   }
// })


// // Route for login page
// // app.get('/login', (req, res) => {
// //   res.render('login') // Renders the login.ejs file
// // })

// // Route for login
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body

//   try {
//     // Check if user exists
//     const [rows, fields] = await pool.query(
//       'SELECT * FROM lab_registration WHERE email = ?',
//       [email]
//     )

//     if (rows.length === 0) {
//       res.status(401).json({ error: 'Invalid email or password' })
//       return
//     }

//     const user = rows[0]

//     // Check password
//     const passwordMatch = await bcrypt.compare(password, user.password)
//     if (!passwordMatch) {
//       res.status(401).json({ error: 'Invalid email or password' })
//       return
//     }

//     // Set the email address in the session
//     req.session.email = email

//     res.cookie('isLoggedIn', true, { maxAge: 3600000, httpOnly: true })
//     res.status(200).json({ message: 'Login successful' })
//   } catch (error) {
//     console.error('Error logging in: ', error)
//     res.status(500).json({ error: 'Failed to login' })
//   }
//   res.send('dashbord')
// })





// Start server
// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`)
// })


// module.exports = {pool}






const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const { route } = require('./routes/authRoute');
const { connect, pool } = require('./utils/dbConnection');

// Create Express app
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the directory for views
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Connect to MySQL (calling the connect method from databaseService)
try{
  connect()
  console.log(pool);
  console.log(connect);
} 
catch(err){
  console.log("Error while coneecting to db :", err);
}
// Routes
app.use("/", route);

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports = app;