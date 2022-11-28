const messageDb = require("../model/message");

const createMessage = async (req, res) => {
  const conversation_id = req.body.conversation_id;
  const message = req.body.message;
  let response = "";

  if (message.includes("Hello") == true || message.includes("Hi"))
    response = "Welcome to StationFive";

  if (message.includes("Goodbye") == true || message.includes("bye"))
    response = "Thank  you, see you around";

  response = "Sorry, I don't understand";

  const result = new messageDb({
    response_id: conversation_id,
    response: response,
  });

  await result
    .save(result)
    .then((data) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      });
    });
};

module.exports = {
  createMessage,
};
