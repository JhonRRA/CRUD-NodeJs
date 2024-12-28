const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
}, {
    timestaps: true,
    versionKey: false,
});

module.exports = mongoose.model('User', UserSchema);
