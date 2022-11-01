const createCartItemViewModel = (cartItemDoc) => ({
  rarePlantId: cartItemDoc.rarePlantId.toString(),
  amount: cartItemDoc.amount,
});

module.exports = createCartItemViewModel;
