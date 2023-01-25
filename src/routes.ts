import express from "express";
const routes = express();


routes.get('/', (req, res) => {
    console.log("get")
    return res.send({ message: `" body "` })
});

routes.post("/", (req, res) => {
    const { boody } = req.body;
    console.log(boody);
    res.send({ "message": req.body })
})
export default routes;

