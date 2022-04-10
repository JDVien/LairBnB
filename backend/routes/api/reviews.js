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

router.patch(
  "/:id",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const { comment, rating } = req.body;
    const review = await db.Review.findByPk(+req.body.id);
    console.log(review, "BEFORE");
    await review.update({
      rating,
      comment,
    });
    console.log(review, "AFTER");
    res.json(review);
  })
);

router.delete(
  "/:id",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const review = await db.Review.findByPk(req.params.id);
    await review.destroy();
    res.json(review);
  })
);

module.exports = router;
