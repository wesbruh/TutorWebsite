const mongoose = require('mongoose');

const payrollSchema = new mongoose.Schema({
  tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor', required: true },
  date: { type: Date, default: Date.now },
  hoursWorked: { type: Number, required: true },
  amountPaid: { type: Number, required: true },
});

module.exports = mongoose.model('Payroll', payrollSchema);