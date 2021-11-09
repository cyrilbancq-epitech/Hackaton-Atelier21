// IMPORT MYSQL CONNECTION
const connection = require('../database/index');
const bcrypt = require('bcrypt');

// HASH PASSWORD STATIC
const hashPassword = async (password) => {
    let hashed = await bcrypt.hash(password, 12).then(function(hash){
        return hash;
    });
    return hashed;
};

// Create user
exports.createUser = async (body) => {
    const hashedPassword = await hashPassword(body.password);
    const newUser = await connection.query(`INSERT INTO \`people\` (\`ID\`, \`name\`, \`first_name\`, \`password\`, \`email\`, \`adress\`, \`postal_code\`, \`city\`, \`phone\`, \`birth_date\`, \`cv\`, \`website\`, \`picture\`, \`gender\`, \`isAuthenticated\`, \`isAdmin\`) VALUES (NULL, '${body.name}', '${body.first_name}', '${hashedPassword}', '${body.email}', '${body.adress}', ${body.postal_code}, '${body.city}', '${body.phone}', '${body.birth_date}', '${body.cv}', '${body.website}', '${body.picture}', '${body.gender}', ${false}, ${false});`);
    return newUser[0][0];
};


// Get user by Email
exports.getUserByEmail = async (email) => {
    const user = await connection.query(`SELECT * FROM \`people\` WHERE email = ?`, [email]);
    return user[0][0];
};