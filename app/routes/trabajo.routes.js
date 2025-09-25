module.exports = app => {
    const trabajos = require("../controllers/trabajo.controller.js");
    var router = require("express").Router();

    router.post("/create/", trabajos.create);

    router.get("/", trabajos.findAll);
    
    router.get("/:id", trabajos.findOne);

    router.put("/update/:id", trabajos.update);

    router.delete("/delete/:id", trabajos.delete);

    app.use("/api/trabajos", router);
};