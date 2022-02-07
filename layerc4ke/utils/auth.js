const jwt = require('jsonwebtoken');
import 'dotenv/config';

const secret = 'cannolisareincredible';
const expiration = '2h';

module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };
        
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
}

export function authMiddleware({ req }) {
  // allows token to be sent via req.body, req.query, or headers
  console.log('something is happening')
  let token = req.body.token || req.query.token || req.headers.authorization;

  // separate "Bearer" from "<tokenvalue>"
  if (req.headers.authorization) {
    token = token
      .split(' ')
      .pop()
      .trim();
  }

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