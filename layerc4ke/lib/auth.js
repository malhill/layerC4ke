const jwt = require('jsonwebtoken');

const secret = 'itsasecret';
const expiration = '2h';

module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
    authMiddleware: function({ req }) {
        let token = req.headers.authorization;
        console.log('token1:',token)
      
        // separate "Bearer" from "<tokenvalue>"
        if (req.headers.authorization) {
          token = token
            .split(' ')
            .pop()
            .trim();
        }
        console.log('token2:',token)
      
        // if no token, return request object as is
        if (!token) {
          return req;
        }
      
        try {
          // decode and attach user data to request object
          const { data } = jwt.verify(token, secret, { maxAge: expiration });
          req.user = data;
        } catch {
          console.log('Invalid token');
        }
      
        // return updated request object
        return req;
    }

};