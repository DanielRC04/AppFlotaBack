const statesServices = require('../services').statesServices;


statesControllers = {};

statesControllers.getStatesController = async (req, res) => {
   try{
       const data = await statesServices.getStatesService();
       res.status(200).send({ status: 'success', data});
   }
   catch(err){
       res.status(500).send({ status: 'error', data: err.message});
   }
}

statesControllers.getStateController = async (req, res) => {
    try{
        const data = await statesServices.getStateService(req.body.id);
        res.status(200).send({ status: 'success', data});
    }
    catch(err){
        res.status(500).send({ status: 'error', data: err.message});
    }
}

statesControllers.addStateController = async (req, res) => {
    try{
        const data = await statesServices.addStateService(req.body);
        res.status(200).send({ status: 'success', data});
    }
    catch(err){
        res.status(500).send({ status: 'error', data: err.message});
    }
}

statesControllers.updateStateController = async (req, res) => {
    try{
        const data = await statesServices.updateStateService(req.body);
        res.status(200).send({ status: 'success', data});
    }
    catch(err){
        res.status(500).send({ status: 'error', data: err.message});
    }
}

statesControllers.deleteStateController = async (req, res) => {
    try{
        const data = await statesServices.deleteStateService(req.body);
        res.status(200).send({ status: 'success', data});
    }
    catch(err){
        res.status(500).send({ status: 'error', data: err.message});
    }
}

module.exports = statesControllers;