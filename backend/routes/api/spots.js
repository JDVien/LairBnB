const express = require('express');
const asyncHandler = require('express-async-handler');
const { handleValidationErrors } = require('../../utils/validation');
const { check, validationResult } = require('express-validator');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const db = require('../../db/models');
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true })
const { Spot } = db;

const router = express.Router();

const spotNotFoundError = (id) => {
  const err = Error('Spot not found');
  err.errors = [`Spot with id of ${id} could not be found.`];
  err.title = 'Spot not found.';
  err.status = 404;
  return err;
};

// const handleValidationErrors = (req, res, next) => {
//   const validationErrors = validationResult(req);
//   if (!validationErrors.isEmpty()) {
//     const errors = validationErrors.array().map((error) => error.msg);

//     const err = Error('Bad request.');
//     err.errors = errors;
//     err.status = 400;
//     err.title = 'Bad request.';
//     return next(err);
//   }
//   next();
// };

const validateSpot = [
  // check('image')
  //   .notEmpty()
  //   .isURL({ require_protocol: false, require_host: false }),
  check('name').not().isEmpty(),
  check('address').not().isEmpty(),
  check('city').not().isEmpty(),
  check('state').not().isEmpty(),
  check('country').not().isEmpty(),
  handleValidationErrors
];

router.get(
  '/',
  async (req, res) => {
    const spots = await Spot.findAll();
    return res.json( spots );
  })


router.get(
  '/:id(\\d+)',
  asyncHandler(async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.id);
    if (spot) {
      return res.json({ spot });
    } else {
      next(spotNotFoundError(req.params.id));
    }
  })
);

router.post(
  '/create',
  validateSpot,
  requireAuth,
  asyncHandler(async (req, res) => {
    // const { image, name, price } = req.body;
    const userId = req.user.id;
    const spot = await db.Spot.build(req.body);
    await spot.save();
    // const image = await db.Image.create({
    //   image: req.body.image,
    //   spotId: spot.id,
    // });
    console.log(spot)
    return res.json({ spot });
  })
);

// router.put(
//   '/:id(\\d+)',
//   validateSpot,
//   asyncHandler(async (req, res, next) => {
//     const spot = await Spot.findByPk(req.params.id);

//     if (spot) {
//       // spot.image = req.body.image || spot.image;
//       spot.name = req.body.name || spot.name;
//       spot.address = req.body.address || spot.address;
//       spot.city = req.body.city || spot.city;
//       spot.state = req.body.state || spot.state;
//       spot.country = req.body.country || spot.country;
//       spot.price = req.body.price || spot.price;

//       await spot.save();
//       res.json({ spot });
//     } else {
//       next(spotNotFoundError(req.params.id));
//     }
//   })
// );

// router.delete('/:id(\\d+)', async (req, res, next) => {
//   const spot = await Spot.findByPk(req.params.id);
//   if (spot) {
//     await spot.destroy();
//     res.status(204).end();
//   } else {
//     next(spotNotFoundError(req.params.id));
//   }
// });
module.exports = router;
