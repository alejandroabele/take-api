const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../middleware/auth");

const {
  create,
  update,
  destroy,
  find,
} = require("../controllers/noteController");
const { handleSuccessResponse, handleErrorResponse } = require("../utils");

router.post("/note", isAuthenticated, (req, res) => {
  create(req)
    .then((data) => {
      res.json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.json(handleErrorResponse(error.message));
    });
});

router.put("/note/:id", isAuthenticated, (req, res) => {
  update(req)
    .then((data) => {
      res.json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.json(handleErrorResponse(error.message));
    });
});

router.delete("/note/:id", isAuthenticated, (req, res) => {
  destroy(req)
    .then((data) => {
      res.json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.json(handleErrorResponse(error.message));
    });
});
router.get("/note", isAuthenticated, (req, res) => {
  find()
    .then((data) => {
      res.json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.json(handleErrorResponse(error.message));
    });
});
module.exports = router;
