const express = require("express");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require("../../utils/validation");
const { check } = require("express-validator");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { requireAuth } = require("../../utils/auth");
const csrf = require("csurf");
const csrfProtection = csrf({ cookie: true });

const db = require("../../db/models");

const router = express.Router();

router.get(`/spots/:id(\\d+)/reviews`, async(req, res) => {

  const reviews = await db.Review.findAll({
      order: [[ 'createdAt', 'DESC' ]]
  });
  return res.json( reviews );
})

router.post(
  "/create",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const review = await db.Review.create(req.body);
    res.json(review);
  })
);

// router.post(
//   '/create',
//   requireAuth,
//   asyncHandler(async (req, res) => {
//     // const { image, updatedReview, price } = req.body;
//     const userId = req.user.id;
//     const updatedReview = await db.Review.build(req.body);
//     await updatedReview.save();
//     // const image = await db.Image.create({
//     //   image: req.body.image,
//     //   spotId: updatedReview.id,
//     // });
//     console.log(updatedReview)
//     return res.json({ updatedReview });
//   })
// );

// router.patch(
//   "/:id/edit",
//   requireAuth,
//   csrfProtection,
//   asyncHandler(async (req, res) => {
//     const { updatedReview, rating } = req.body;
//     const newReview = await db.Review.findByPk(+req.body.id);
//     console.log(updatedReview, "BEFORE");
//     await newReview.update({
//       rating,
//       updatedReview,
//     });
//     console.log(newReview, "AFTER");
//     res.json(newReview);
//   })
// );
router.put(
  '/:id/edit',
  // validateSpot,
  asyncHandler(async (req, res) => {
    const updatedReview = await db.Review.findByPk(req.params.id);

    if (updatedReview) {
      // updatedReview.image = req.body.image || updatedReview.image;
      updatedReview.review = req.body.review || updatedReview.revieww;
      updatedReview.rating = req.body.rating || updatedReview.rating;

      await updatedReview.save();
      res.json({ updatedReview });
    // } else {
    //   next(spotNotFoundError(req.params.id));
    }
  })
);

router.delete(
  "/:id",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const updatedReview = await db.Review.findByPk(req.params.id);
    await updatedReview.destroy();
    res.json(updatedReview);
  })
);

module.exports = router;
