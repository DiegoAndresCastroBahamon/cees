import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Desde API/USUARIOS");
});

router.post('/', (req, res) => {
    res.send("Desde API/USUARIOS");
});

export default router;