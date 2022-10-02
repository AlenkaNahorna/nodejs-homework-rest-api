const contactsOperations = require("../../models/contacts");

const add = async (req, res) => {
  const contacts = await contactsOperations.addContact(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: contacts,
    },
  });
};

module.exports = add;
