const contactsOperations = require("../../models/contacts");

const { NotFound } = require("http-errors");

const deleteById = async (req, res) => {
  const { id } = req.params;
  const contacts = await contactsOperations.removeContact(id);
  if (!contacts) {
    throw new NotFound(`Product with id=${id} not found`);
  }
  res.json({
    status: "success",
    message: "contact deleted",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = deleteById;
