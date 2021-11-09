// IMPORT QUERIES
const { createUser } = require ('../queries/users.queries');

// SignIn
exports.signin = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        if(email) {
            const isUser = await getUserByEmail(email);
            if(isUser) {
                const isPassword = await comparePasswords(password, isUser.password);
                if(isPassword) {
                    await setIsAuthenticated(isUser.ID, true);
                    const authenticatedUser = await getUserByEmail(email);
                    const token = jwt.sign({ sub: authenticatedUser.ID, expiresIn: 86400}, "secret");
                    res.status(200).json({
                        user: authenticatedUser,
                        accessToken: token,
                        isUser: true,
                        message: "Congratulation, you are now logged in."
                    });
                } else {
                    res.status(403).json({
                        accessToken: null,
                        message: "Wrong email or password. Please retry."
                    });
                };
            } else {
                res.status(403).json({
                    message: "You don't seem to have an account. Please subscribe."
                });
            };
        } else {
            res.status(403).json({
                message: "Please, enter an email to signin."
            });
        };
    } catch (error) {
        res.json({ error: [error.message] });
    };
};