const jwt = require('jsonwebtoken')

const secret = 'cannolisareincredible';
const expiration = '2h';

module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };
        
        console.log(secret)
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
}

// const signToken = ({ username, email, _id }) => {
//     const payload = { username, email, _id };

//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
// };

// export default signToken;