const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js')
const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/spots', spotsRouter);
router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

/*
// test routes -- can be remove all code after testing

// GET /api/set-token-cookie
// test by going to http://localhost:5000/api/set-token-cookie.
router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    }
  });
  setTokenCookie(res, user);
  return res.json({ user });
}));

// GET /api/restore-user
// test route for restoreUser, checks whether req.user key has been populated properly by middleware
const { restoreUser } = require('../../utils/auth.js');
router.get('/restore-user', restoreUser, (req, res) => {
  return res.json(req.user);
}
);
// test by going to http://localhost:5000/api/restore-user


// test route for requireAuth.
// If there is no session user, the route will return an error. else, returns session user's info
// GET /api/require-auth
const { requireAuth } = require('../../utils/auth.js');
router.get('/require-auth', requireAuth, (req, res) => {
  return res.json(req.user);
});
// restore a cookie by going to http://localhost:5000/api/set-token-cookie.
// then go to http://localhost:5000/api/require-auth
// confirm demo user's info returned as JSON. remove token cookie, refresh to see "Unauthorized" user error
*/
module.exports = router;

// fetch('/test', {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "XSRF-TOKEN": "RBSHE12c-IDs-VdrAHbixHkjm9MBmTqGsClU",
//     'Accept': 'application/json'
//   },
//   body: JSON.stringify({ hello: 'world' })
// }).then(res => res.json()).then(data => console.log(data));
