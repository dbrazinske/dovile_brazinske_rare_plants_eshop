const createRarePlantViewModel = (rarePlantDoc) => ({
  id: rarePlantDoc._id.toString(),
  title: rarePlantDoc.title,
  description: rarePlantDoc.description,
  categoryId: rarePlantDoc.categoryId.toString(),
  images: rarePlantDoc.images,
  price: rarePlantDoc.price,
  createdAt: rarePlantDoc.createdAt,
  updatedAt: rarePlantDoc.updatedAt,
});

module.exports = createRarePlantViewModel;
