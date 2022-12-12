import maquinaModel from "../models/MaquinaModel.js"

//CRUD
//CREATE
export async function createMaquina(req, res){
    
    const maquina = req.body.maquina
        
    let documento

    if (maquina == null){
        res.status(400).json({
            "error": "Falta el objeto 'maquina'."
        })
        return
    }
    try {
        documento = await maquinaModel.create(maquina)
    } catch (error) {
        res.status(400).json(error.message)
        return;
    }
    
    res.status(201).json(documento)  
}


//READ
export async function readMaquina(req, res){
    const _id = req.params.id

    let documento

    try{
        documento = await maquinaModel.findOne({_id})

    } catch (error){
        res.status(400).json(error.message)
        return;

    }
    res.status(200).json(documento)  
}


//UPDATE
export async function updateMaquina(req, res){
    const id = req.params.id
    const updates = req.body.updates
    const {field, value} = updates

    let documento = null

    try{
        documento = await maquinaModel.findOne({"_id": id},updates, { runValidators: true})

    } catch (error){
        res.status(400).json(error.message)
        return;

    }
    documento[field] = value
    documento.save() 
    res.status(200).json(documento)   
}

export  async function deleteMaquina(req, res){
    const id = req.body.id
    
    let documento = null

    try{
        documento = await maquinaModel.deleteOne({"_id": id})

    } catch (error){
        res.status(400).json(error.message)
        return;
    }
     
    res.status(200).json(documento) 
}
