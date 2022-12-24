import express from "express"

let router = express.Router()

//localhots:3000/Alquiler

router.get("/Alquiler",(req,res) => {
    res.send("Alquiler")
})

router.get("/Alquiler", (req, res)=> {
    res.json(Alquiler)
})


export default router;