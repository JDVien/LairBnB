const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const db = require('../../db/models');
const { Spot } = db;
