/* eslint-disable max-len */
const { Schema, Types, model } = require('mongoose');
const yup = require('yup');

const rarePlantSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  images: {
    type: [String],
    default: [],
  },
  price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

const rarePlantValidationSchema = yup.object().shape({
  title: yup
    .string().typeError('RarePlant.title must be a string')
    .required('RarePlant.title is required'),
  description: yup
    .string().typeError('RarePlant.description must be a string')
    .required('RarePlant.description is required'),
  categoryId: yup
    .string().typeError('RarePlant.categoryId must be a string')
    .test(
      'is-mongo-object-id',
      'RarePlant.categoryId must be valid MongoDB object Id',
      Types.ObjectId.isValid,
    )
    .required('RarePlant.categoryId is required'),
  images: yup.array(yup.string().typeError('RarePlant.img must be a string')),
  price: yup
    .number().typeError('RarePlant.price must be a number')
    .required('RarePlant.price is required')
    .positive('RarePlant.price must be positive'),
});

const rarePlantUpdateValidationSchema = yup.object().shape({
  title: yup.string().typeError('RarePlant.title must be a string'),
  description: yup.string().typeError('RarePlant.description must be a string'),
  categoryId: yup.string().typeError('RarePlant.categoryId must be a string')
    .test(
      'is-mongo-object-id',
      'RarePlant.categoryId must be valid MongoDB object Id',
      Types.ObjectId.isValid,
    ),
  images: yup.array(yup.string().typeError('RarePlant.img must be a string')),
  price: yup.number()
    .typeError('RarePlant.price must be a number')
    .positive('RarePlant.price must be positive'),
});

rarePlantSchema.statics.validateData = (rarePlantData) => rarePlantValidationSchema.validate(rarePlantData);
rarePlantSchema.statics.validateUpdateData = (rarePlantData) => rarePlantUpdateValidationSchema.validate(rarePlantData);

const RarePlantModel = model('RarePlant', rarePlantSchema);

module.exports = RarePlantModel;
