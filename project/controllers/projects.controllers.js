// IMPORT QUERIES
const { getProjects } = require('../queries/projects.queries');

exports.getProjects = async (req, res, next) => {
    try {
        const projects = await getProjects();
        if(projects.length > 0) {
            res.status(200).json({
                message: "Successfully got projects",
                projects: projects
            });
        } else {
            res.status(404).json({
                message: "An error occured. Please retry.",
                projects: []
            });
        }
    } catch (error) {
        res.json({ error: [error.message] });
    }
}