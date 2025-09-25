module.exports = app => {
    const personas = require("../controllers/persona.controller.js");
    var router = require("express").Router();

    router.post("/create/", personas.create);

    router.get("/", personas.findAll);
    
    router.get("/:id", personas.findOne);

    router.put("/update/:id", personas.update);

    router.delete("/delete/:id", personas.delete);

    app.use("/api/personas", router);
};