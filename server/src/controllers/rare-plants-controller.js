/* eslint-disable camelcase */
const { createNotFoundError, sendErrorResponse } = require('../helpers/errors');
const RarePlantModel = require('../models/rare-plant-model');
const createRarePlantPopulatedViewModel = require('../view-models/create-rare-plant-populated-view-model');
const createRarePlantViewModel = require('../view-models/create-rare-plant-view-model');

const createRarePlantNotFoundError = (rarePlantId) => createNotFoundError(`RarePlant with id '${rarePlantId}' was not found`);

const fetchAll = async (req, res) => {
  const {
    joinBy, id, price_lte, price_gte, categoryId,
  } = req.query;
  const joinedDocuments = joinBy === 'categoryId';
  const filter = {};

  // Query by many rarePlant id's
  if (id) filter._id = id instanceof Array ? { $in: id } : id;
  if (categoryId) {
    filter.categoryId = categoryId instanceof Array
      ? { $in: categoryId }
      : categoryId;
  }
  // Query by price range
  if (price_lte || price_gte) {
    filter.price = {};
    if (price_lte) filter.price.$lte = price_lte;
    if (price_gte) filter.price.$gte = price_gte;
  }

  try {
    const rarePlantDocs = joinedDocuments
      ? await RarePlantModel.find(filter).populate('categoryId')
      : await RarePlantModel.find(filter);

    res.status(200).json(joinedDocuments
      ? rarePlantDocs.map(createRarePlantPopulatedViewModel)
      : rarePlantDocs.map(createRarePlantViewModel));
  } catch (err) { sendErrorResponse(err, res); }
};

const fetch = async (req, res) => {
  const rarePlantId = req.params.id;
  const { joinBy } = req.query;
  const joinedDocument = joinBy === 'categoryId';

  try {
    const foundRarePlantDoc = joinedDocument
      ? await RarePlantModel.findById(rarePlantId).populate('categoryId')
      : await RarePlantModel.findById(rarePlantId);
    if (foundRarePlantDoc === null) throw createRarePlantNotFoundError(rarePlantId);

    res.status(200).json(joinedDocument
      ? createRarePlantPopulatedViewModel(foundRarePlantDoc)
      : createRarePlantViewModel(foundRarePlantDoc));
  } catch (err) { sendErrorResponse(err, res); }
};

const create = async (req, res) => {
  const newRarePlantData = req.body;

  try {
    await RarePlantModel.validateData(newRarePlantData);

    const newRarePlantDoc = await RarePlantModel.create(newRarePlantData);

    res.status(201).json(createRarePlantViewModel(newRarePlantDoc));
  } catch (err) { sendErrorResponse(err, res); }
};

const replace = async (req, res) => {
  const rarePlantId = req.params.id;
  const {
    title, description, categoryId, images, price,
  } = req.body;
  const newRarePlantData = {
    title, description, categoryId, images, price,
  };

  try {
    await RarePlantModel.validateData(newRarePlantData);

    const updatedRarePlantDoc = await RarePlantModel.findByIdAndUpdate(
      rarePlantId,
      newRarePlantData,
      { new: true, runValidators: true },
    );

    if (updatedRarePlantDoc === null) throw createRarePlantNotFoundError(rarePlantId);

    res.status(200).json(createRarePlantViewModel(updatedRarePlantDoc));
  } catch (err) { sendErrorResponse(err, res); }
};

const update = async (req, res) => {
  const rarePlantId = req.params.id;
  const requestData = req.body;

  try {
    await RarePlantModel.validateUpdateData(requestData);
    const {
      title,
      description,
      categoryId,
      images,
      price,
    } = requestData;

    const updatedRarePlantDoc = await RarePlantModel.findByIdAndUpdate(
      rarePlantId,
      {
        title,
        description,
        categoryId,
        images,
        price,
      },
      { new: true },
    );

    if (updatedRarePlantDoc === null) throw createRarePlantNotFoundError(rarePlantId);

    res.status(200).json(createRarePlantViewModel(updatedRarePlantDoc));
  } catch (err) { sendErrorResponse(err, res); }
};

const remove = async (req, res) => {
  const rarePlantId = req.params.id;

  try {
    const deletedRarePlantDoc = await RarePlantModel.findByIdAndDelete(rarePlantId);
    if (deletedRarePlantDoc === null) createRarePlantNotFoundError(rarePlantId);

    res.status(200).json(createRarePlantViewModel(deletedRarePlantDoc));
  } catch (err) { sendErrorResponse(err, res); }
};

const getPriceRange = async (req, res) => {
  const [priceRange] = await RarePlantModel.aggregate(
    [
      {
        $group:
        {
          _id: {},
          min: { $min: '$price' },
          max: { $max: '$price' },
        },
      },
    ],
  );

  res.status(200).json([priceRange.min, priceRange.max]);
};

module.exports = {
  fetchAll,
  fetch,
  create,
  replace,
  update,
  remove,
  getPriceRange,
};
