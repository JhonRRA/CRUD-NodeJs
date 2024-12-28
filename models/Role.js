const mongoose = require('mongoose');

new Schema({
    name: String
}, {
    versionKey: false,
})

export default model("Role", roleSchema)