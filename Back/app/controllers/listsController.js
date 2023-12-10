const { SantaClausList } = require("../models")


const listsController = {
   
    async findAll(request, response){

        try {
            const chrismasLists = await SantaClausList.findAll({
                include: {
                    association: 'childrens',
                    order: [['id', 'ASC']]
                },
                order: [['id', 'ASC']]
            });
            // On renvoie les listes
            return response.json(chrismasLists);
        }catch (err){
            console.log(err);
             // Si une erreur est survenue, on renvoie une erreur 500
            return response.status(500).json({ error: "Internal server error" });
        }
    },

    
}

module.exports = listsController;