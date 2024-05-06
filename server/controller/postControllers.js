const bcrypt = require("bcrypt");
const { pool } = require("../utils/dbConnection.js");

// REGISTER OWNER

const registerOwner = async (req, res) => {
  const { fullname, contact_no, lab_name, lab_license, email, password } =
    req.body;
    console.log(req.body);

  try {
    // Check if all fields are provided
    if (
      !fullname ||
      !contact_no ||
      !lab_name ||
      !lab_license ||
      !email ||
      !password
    ) {
      return res.json({ error: "All fields are required" });
    }

    // Query to check if email exists
    const [emailRows] = await pool.query(
      "SELECT COUNT(*) AS count FROM lab_registration WHERE email = ?",
      [email]
    );

    // If email count is greater than 0, email exists; otherwise, it's available
    if (emailRows[0].count > 0) {
      return res.json({ error: "Email is already registered!" });
    }

    // Validate phone number format
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    if (!phoneRegex.test(contact_no)) {
      return res.json({ error: "Invalid phone number" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.json({ error: "Invalid email address" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert data into lab_registration table
    await pool.query(
      "INSERT INTO lab_registration (fullname, contact_no, lab_name, lab_license, email, password) VALUES (?, ?, ?, ?, ?, ?)",
      [fullname, contact_no, lab_name, lab_license, email, hashedPassword]
    );

    console.log("User registered successfully");
    return res.status(201).json({ message: "Owner registered successfully" });
  } catch (error) {
    console.error("Error registering user: ", error);
    return res.status(500).json({ error: "Failed to register owner" });
  }
};

// REGISTER LAB PROFILE

// const labProfile = async (req, res) => {
//   const { lab_id, address, landmark, city, district, state, country, pincode } =
//     req.body;

//   // Assuming you have obtained the email address of the logged-in user from the session
//   const email = req.session.email;

//   try {
//     // Retrieve owner_id based on the email address
//     const [rows, fields] = await pool.query(
//       "SELECT owner_id FROM lab_registration WHERE email = ?",
//       [email]
//     );

//     if (rows.length === 0) {
//       res.json({ error: "User not found" });
//       return;
//     }

//     const owner_id = rows[0].owner_id;

//     // Insert data into lab_profiles table with the obtained owner_id
//     const [insertRows, insertFields] = await pool.query(
//       "INSERT INTO lab_profiles (lab_id, address, landmark, city, district, state, country, pincode, registration_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
//       [
//         lab_id,
//         address,
//         landmark,
//         city,
//         district,
//         state,
//         country,
//         pincode,
//         owner_id,
//       ]
//     );

//     console.log("Lab profile created successfully");
//     return res
//       .status(200)
//       .json({ message: "Lab profile created successfully" });
//   } catch (error) {
//     console.error("Error creating lab profile: ", error);
//     return res.status(500).json({ error: "Failed to create lab profile" });
//   }
// };

// OWNER LOGIN

const loginOwner = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    console.log("reached server");
    // Check if user exists
    const [rows, fields] = await pool.query(
      "SELECT * FROM lab_registration WHERE email = ?",
      [email]
    );
    console.log("Found email");
    if (rows.length === 0) {
      console.log("not found email");
      return res.json({ error: "Invalid email" });
    }
    console.log("Email found");
    const user = rows[0];

    // Check password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.json({ error: "Invalid password" });
    }

    // Set the email address in the session
    // req.session.email = email;
    console.log("Here in server");
    res.cookie("kyaLoggedInhai", true, { maxAge: 3600000, httpOnly: true });
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error logging in: ", error);
    return res.status(500).json({ error: "Failed to login" });
  }
  // res.send("dashbord");
};


const addPateint =  async (req, res) => {
     // Route to add a new patient
  const {
    p_fullname,
    p_contact_no,
    p_email,
    p_age,
    p_gender,
    test_name,
    test_category,
    doctor_name,
    amount,
    pay_mode,
    owner_id
  } = req.body

  try {
    // Insert into test_name table
    const [testNameResult] = await pool.query(
      'INSERT INTO test_name (patient_id, test_name, test_category) VALUES (?, ?, ?)',
      [null, test_name, test_category]
    )
    const testId = testNameResult.insertId

    // Insert into doctors table
    const [doctorResult] = await pool.query(
      'INSERT INTO doctors (doctor_name) VALUES (?)',
      [doctor_name]
    )
    const doctorId = doctorResult.insertId

    // Insert into payment table
    const [paymentResult] = await pool.query(
      'INSERT INTO payment (amount, status, pay_mode, patient_id, test_id) VALUES (?, ?, ?, ?, ?)',
      [amount, status, pay_mode, null, testId]
    )
    const paymentId = paymentResult.insertId

    // Insert into add_Patient table
    await pool.query(
      'INSERT INTO add_Patient (p_fullname, p_contact_no, p_email, P_age, p_gender, test_id, doctor_id, Payment_id, owner_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        p_fullname,
        p_contact_no,
        p_email,
        p_age,
        p_gender,
        testId,
        doctorId,
        paymentId,
        owner_id
      ]
    )

    console.log('Patient added successfully')
    res.status(200).send('Patient added successfully')
  } catch (error) {
    console.error('Error adding patient: ', error)
    res.status(500).send('Error adding patient')
  }
}






// 


// Route for lab profile creation
const labProfile = async (req, res) => {
  const { email, address, landmark, city, district, state, country, pincode } = req.body

  // Assuming you have obtained the email address of the logged-in user from the session
  //  email = req.session.email

  try {
    if (
      !email ||
      !address ||
      !landmark ||
      !city ||
      !district ||
      !state ||
      !country ||
      !pincode
    ) {
      return res.json({ error: "All fields are required" });
    }

    // Retrieve owner_id based on the email address
    const [rows, fields] = await pool.query(
      'SELECT * FROM lab_registration WHERE email = ?',
      [email]
    );

    if (rows.length === 0) {
      return res.json({ error: 'First register your lab' });
    }

    const [existingRows, existingFields] = await pool.query(
      'SELECT * FROM lab_profiles WHERE email = ?',
      [email]
    );

    if (existingRows.length > 0) {
      return res.json({ error: 'Email address already has a lab profile' });
    }

    // const owner_id = rows[0].owner_id

    // Insert data into lab_profiles table with the obtained owner_id
    const [insertRows, insertFields] = await pool.query(
      'INSERT INTO lab_profiles (email, address, landmark, city, district, state, country, pincode) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [
        email,
        address,
        landmark,
        city,
        district,
        state,
        country,
        pincode,
      ]
    )

    console.log('Lab profile created successfully')
    res.status(200).json({ message: 'Lab profile created successfully' })
  } catch (error) {
    console.error('Error creating lab profile: ', error)
    res.status(500).json({ error: 'Failed to create lab profile' })
  }
}





module.exports = { registerOwner, labProfile, loginOwner, addPateint };



