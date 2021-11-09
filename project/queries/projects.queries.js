// IMPORT MYSQL CONNECTION
const connection = require('../database/index');

exports.getProjects = async () => {
    const projects = await connection.query(`SELECT * FROM \`projects\`;`);
    return projects[0];
};