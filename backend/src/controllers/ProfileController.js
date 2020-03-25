const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const ong_id = req.headers.authorization;

        if (!ong_id){
            return res.status(401).json({ error: 'Operation not permitted' });
        }

        const incidents = await connection('incidents')
            .where('ond_id', ong_id)
            .select('*');

        return res.json(incidents);
    }
}