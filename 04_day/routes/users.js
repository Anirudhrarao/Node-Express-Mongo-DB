import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json([{ id: 1, name: 'Aniruddh' }, { id: 2, name: 'Jane' }]);
});

export default router;