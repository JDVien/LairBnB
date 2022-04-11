const express = require('express');
const asyncHandler = require('express-async-handler');
const { handleValidationErrors } = require('../../utils/validation');
const { check, validationResult } = require('express-validator');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const db = require('../../db/models');
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true })
const { Booking } = db;

const router = express.Router();

const bookingNotFoundError = (id) => {
  const err = Error('Booking not found');
  err.errors = [`Booking with id of ${id} could not be found.`];
  err.title = 'Booking not found.';
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

const validateBooking = [
  check('image')
    .notEmpty()
    .isURL({ require_protocol: false, require_host: false }),
  check('startDate').not().isEmpty(),
  check('endDate').not().isEmpty(),
  check('totalCost').not().isEmpty(),
  handleValidationErrors
];

router.get(
  '/',
  async (req, res) => {
    const bookings = await db.Booking.findAll();
    return res.json( {bookings} );
  })

  // router.get(`/`, async(req, res) => {

  //   const reviews = await db.Booking.findAll({
  //       order: [[ 'createdAt', 'DESC' ]]
  //   });
  //   return res.json( {bookings} );
  // })


router.get(
  '/:id(\\d+)',
  asyncHandler(async (req, res, next) => {
    const booking = await db.Booking.findByPk(req.params.id);
    if (booking) {
      return res.json( { booking } );
    } else {
      next(bookingNotFoundError(req.params.id));
    }
  })
);

router.post(
  '/create',
  validateBooking,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { startDate, endDate, totalCost, spotId } = req.body;
    const userId = req.user.id;
    const booking = await db.Booking.build(req.body);
    await booking.save();
    const image = await db.Image.create({
      image: req.body.image,
      bookingId: booking.id,
    });
    console.log(booking)
    return res.json( {booking} );
  })
);

router.put(
  '/:id/edit',
  validateBooking,
  asyncHandler(async (req, res) => {
    const booking = await Booking.findByPk(req.params.id);

    if (booking) {
      booking.image = req.body.image || booking.image;
      booking.name = req.body.name || booking.name;
      booking.description = req.body.description || booking.description;
      booking.city = req.body.city || booking.city;
      booking.state = req.body.state || booking.state;
      booking.country = req.body.country || booking.country;
      booking.price = req.body.price || booking.price;

      await booking.save();
      res.json({ booking });
    } else {
      next(bookingNotFoundError(req.params.id));
    }
  })
);

router.delete('/:id(\\d+)', async (req, res, next) => {
  const booking = await Booking.findByPk(req.params.id);
  if (booking) {
    await booking.destroy();
    res.status(204).end();
    res.json(booking)
  } else {
    next(bookingNotFoundError(req.params.id));
  }
});
module.exports = router;
