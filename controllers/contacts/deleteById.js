const contactsOperation = require("../../models/contacts");

const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contactsOperation.removeContact(contactId);

  if (!result) {
    res.json({
      status: "error",
      code: 404,
      message: `Contact with id=${contactId} not found`,
    });
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
    message: `${result.name} was deleted successfully`,
  });
};

module.exports = deleteById;