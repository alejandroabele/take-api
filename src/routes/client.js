const express = require("express");
const router = express.Router();
const {
  create,
  update,
  destroy,
  findFuzzySearch,
  findByState,
  find,
} = require("../controllers/clientController");
const { handleSuccessResponse, handleErrorResponse } = require("../utils");
const { isAuthenticated } = require("../middleware");

router.get("/client-fuzzy-search/:name", isAuthenticated, (req, res) => {
  findFuzzySearch(req)
    .then((data) => {
      res.json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.json(handleErrorResponse(error.message));
    });
});
router.get("/client-by-state/:state", isAuthenticated, (req, res) => {
  findByState(req)
    .then((data) => {
      res.json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.json(handleErrorResponse(error.message));
    });
});
router.get("/client", isAuthenticated, (req, res) => {
  find()
    .then((data) => {
      res.json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.json(handleErrorResponse(error.message));
    });
});

router.post("/client", isAuthenticated, (req, res) => {
  create(req)
    .then((data) => {
      res.json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.json(handleErrorResponse(error.message));
    });
});

router.put("/client/:id", isAuthenticated, (req, res) => {
  update(req)
    .then((data) => {
      res.json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.json(handleErrorResponse(error.message));
    });
});

router.delete("/client/:id", isAuthenticated, (req, res) => {
  destroy(req)
    .then((data) => {
      res.json(handleSuccessResponse(data));
    })
    .catch((error) => {
      res.json(handleErrorResponse(error.message));
    });
});
module.exports = router;
