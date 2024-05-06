//   GET ALL LAB OWNERS

const allLabOwners = async (req, res) => {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM lab_registration");
    return res.status(200).json({ rows });
  } catch (error) {
    console.error("Error fetching user data: ", error);
    res.status(500).send("Internal Server Error");
  }
};



module.exports = allLabOwners;