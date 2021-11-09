// IMPORT MYSQL CONNECTION
const connection = require('../database/index');

exports.getProjects = async () => {
    const projects = await connection.query(`SELECT * FROM \`projects\` WHERE id`);
    return projects[0][0];
};