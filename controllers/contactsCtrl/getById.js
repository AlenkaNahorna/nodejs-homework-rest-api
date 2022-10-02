const contactsOperations = require("../../models/contacts");

const { NotFound } = require("http-errors");

const getById = async (req, res) => {
  const { id } = req.params;
  const contacts = await contactsOperations.getContactById(id);
  if (!contacts) {
    throw new NotFound(`Product with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = getById;
