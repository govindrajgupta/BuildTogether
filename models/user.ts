
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['DEVELOPER', 'FOUNDER'],
    default: 'DEVELOPER',
  },
  whatsappNumber: {
    type: String,
    required: false,
  },
  whatsappVisible: {
    type: Boolean,
    default: false,
  },
  bio: String,
  skills: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

// models/application.ts
const applicationSchema = new mongoose.Schema({
  startupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Startup',
    required: true,
  },
  developerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: String,
    enum: ['PENDING', 'ACCEPTED', 'REJECTED'],
    default: 'PENDING',
  },
  contactShared: {
    type: Boolean,
    default: false,
  },
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

export const User = mongoose.models.User || mongoose.model('User', userSchema)
export const Application = mongoose.models.Application || mongoose.model('Application', applicationSchema)