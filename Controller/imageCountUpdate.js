


exports.handleImageCountUpdate = (req, res, knex) => {
  const { id } = req.body;
  knex("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entries) => res.json(entries.at(0)))
    .catch((err) => {
      res.status(400).json("Unable to get entries");
      console.log(err);
    });
};
