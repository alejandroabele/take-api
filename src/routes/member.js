const express = require("express");
const router = express.Router();
const { handleSuccessResponse, handleErrorResponse } = require("../utils");
const { isAuthenticated } = require("../middleware/auth");
const {
  create,
  update,
  destroy,
  find,
} = require("../controllers/memberController");

router.post("/member", isAuthenticated, (req, res) => {
  create(req)
    .then((data) => {
      res.json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.json(handleErrorResponse(error.message));
    });
});

router.put("/member/:id", isAuthenticated, (req, res) => {
  update(req)
    .then((data) => {
      res.json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.json(handleErrorResponse(error.message));
    });
});

router.delete("/member/:id", isAuthenticated, (req, res) => {
  destroy(req)
    .then((data) => {
      res.json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.json(handleErrorResponse(error.message));
    });
});
router.get("/member", isAuthenticated, (req, res) => {
  find()
    .then((data) => {
      res.json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.json(handleErrorResponse(error.message));
    });
});
module.exports = router;
