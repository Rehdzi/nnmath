const boom = require('hoek')

const genericCrud = (model) => ({
    async get({ params: { id } }) {
        try {
            const item = await model.findById(id);
            return item;
        }
        catch(err){
            throw boom.boomify(err);
        }

    },
    async create({ body }) {
        try {
            const item = new model(body);
            const newItem = await item.save();
            return newItem;
        }
        catch(err){
            throw boom.boomify(err);
        }
    },
    async update({ params: { id }, body }) {
        try {
            const item = await model.findByIdAndUpdate(id, body, {new: true});
            return item;
        }
        catch(err){
            throw boom.boomify(err);
        }
    },
    async remove({params: { id } }) {
        try {
            await model.findByIdAndDelete(id);
            return { status: 'OK', message: 'Формула удалена.' }
        }
        catch(err){
            throw boom.boomify(err);
        }
    }
});

module.exports = genericCrud;