const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body;
        const { key } = request.body;

        const ong = await connection('ongs')
          .where('id', id)
          .select('name')
          .first();

          const ong2 = await connection('ongs')
          .where('key', key)
          .select('name')
          .first();

          if (!ong || !ong2){
              return response.status(400).json({ error: 'No ONG found whith this ID or key' })
          }

          return response.json(ong);
    }
}