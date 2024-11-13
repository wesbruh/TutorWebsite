import mongoose from 'mongoose'

const userSchema = new mongoose. Schema ({
    firstName: {
        type:String,
        required: true,
        trim: true
    } ,
    lastName: {
        type:String,
        required: true,
        trim: true
    } ,
    email: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'tutor'],
        required: true
    },
    bio: {
        type:String,
        trim: true,
        default: ''
    },
    profilePicture: {
        type: String, // Store the URL or path
        default: '' // Optional: Provide a default value if needed
    },
    ratings: {
        type: [Number],
        default: []
    },
    reviews: [{
        studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
        reviewText: String,
        date: { type: Date, default: Date.now }
    }],
    payroll: {
        type: Number,
        default: 0,
        required: function () { return this.role === 'tutor'; }
    },
    payment: {
        type: Number,
        default: 0,
        required: function () { return this.role === 'student'; }
    }

},{timestamps:true})
export default mongoose.model ('users', userSchema)