const { Childrens } = require("../models")


const childsController = {
   
    async findAll(request, response){

        try {
            const childrensLists = await Childrens.findAll({
               
                order: [['id', 'ASC']]
            });
            // On renvoie les listes
            return response.json(childrensLists);
        }catch (err){
            console.log(err);
             // Si une erreur est survenue, on renvoie une erreur 500
            return response.status(500).json({ error: "Internal server error" });
        }
    },

    async addChild(request, response){

        try {
            const { name, age, description, santaClausListId} = request.body;

            const newChild = await Childrens.create({ name, age, description, santa_claus_list_id: santaClausListId});
             
            return response.status(201).json(newChild);
        } catch(err) {
            return response.status(500).json({error:"Internal server error"});
        }
    

    },

    async updateOne(request, response){

        try {
            const { name, age, description, santaClausListId} = request.body;
            //on récupére l'enfant à mettre à jour
            const selectedChild = await Childrens.findByPk(request.params.id);

            if (!selectedChild) {
                return response.status(404).json({error:'Child not found'});
                }
            // on met à jour la fiche de l'enfant
            const updateChild = await selectedChild.update({ name, age, description, santa_claus_list_id: santaClausListId});
            //on renvoie la fiche
            response.json(updateChild);
        } catch (err) {
            return response.status(500).json({error:"Internal server error"});
        }
    },

    async deleteOne(request, response){

        try {
            const selectedChild = await Childrens.findByPk(request.params.id);

            if (!selectedChild) {
                return response.status(404).json({error:'Child not found'});
                }

           await selectedChild.destroy();
           //on renvoie une reponse vide
           return response.status(204).end();     
        } catch (err) {
            return response.status(500).json({error:"Internal server error"});
        }
    }


    
}

module.exports = childsController;