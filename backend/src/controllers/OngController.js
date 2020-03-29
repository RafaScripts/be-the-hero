const generateUniqueId = require('../utils/generateUniqueId');
const generateUniqueKey = require('../utils/generateUniqueKey');
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs =  await connection('ongs').select('*');
      
        return response.json(ongs);
      },


    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;


    const id = generateUniqueId();
    const key = generateUniqueKey();

    await connection('ongs').insert({
      id,
      key,
      name,
      email,
      whatsapp,
      city,
      uf,
    })
  
    return response.json({ id, key });
    }
};