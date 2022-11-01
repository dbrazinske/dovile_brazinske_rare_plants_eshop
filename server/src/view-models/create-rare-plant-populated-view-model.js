const createCategoryViewModel = require('./create-category-view-model');

const createRarePlantPopulatedViewModel = (rarePlantPopulatedDoc) => ({
  id: rarePlantPopulatedDoc._id.toString(),
  title: rarePlantPopulatedDoc.title,
  description: rarePlantPopulatedDoc.description,
  category: createCategoryViewModel(rarePlantPopulatedDoc.categoryId),
  images: rarePlantPopulatedDoc.images,
  price: rarePlantPopulatedDoc.price,
  createdAt: rarePlantPopulatedDoc.createdAt,
  updatedAt: rarePlantPopulatedDoc.updatedAt,
});

module.exports = createRarePlantPopulatedViewModel;
