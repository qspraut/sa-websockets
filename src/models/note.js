import mongoose, { Schema } from 'mongoose';

const NoteSchema = new Schema({
  title: String,
  text: String,
  prevText: String,
  color: String,
  x: Number,
  y: Number,
  zIndex: Number,
  important: Boolean,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});

// create model class
const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
