const { Router } = require('express');
const router = Router();


const {brandFilter, colourFilter, typeFilter, genreFilter}=require('../controllers/filtroAnidado')


    
router.get('/', async ( req,res)=>{

    try{
        
        const {brand,colour,type,genre}= req.query;
        console.log(brand)

        if(brand){
            const brandFil = await brandFilter(brand);

            if(colour){
                const colourFil=brandFil.filter(e=> (e.colour===colour || e.colour===colour[0]||e.colour===colour[1]||e.colour===colour[2]||e.colour===colour[3]||e.colour===colour[4]||e.colour===colour[5]||e.colour===colour[6]||e.colour===colour[7]||e.colour===colour[8]||e.colour===colour[9]||e.colour===colour[11]))
                
                if(type){
                    const typeFil=colourFil.filter(e=>(e.type===type||e.type===type[0]||e.type===type[1]||e.type===type[2]||e.type===type[3]||e.type===type[4]||e.type===type[5]));
                    
                    if(genre){
                        const genreFil=typeFil.filter(e=>(e.genre===genre||e.genre===genre[0]||e.genre===genre[1]||e.genre===genre[2]))
                        return res.status(200).json(genreFil);}

                    return res.status(200).json(typeFil);}
                
                if(genre){
                    const genreFil=colourFil.filter(e=>(e.genre===genre||e.genre===genre[0]||e.genre===genre[1]||e.genre===genre[2]))
                    return res.status(200).json(genreFil);}
                    

                return res.status(200).json(colourFil);}

            if(type){
                const typeFil=brandFil.filter(e=>(e.type===type||e.type===type[0]||e.type===type[1]||e.type===type[2]||e.type===type[3]||e.type===type[4]||e.type===type[5]));
                
                if(genre){
                    const genreFil=typeFil.filter(e=>(e.genre===genre||e.genre===genre[0]||e.genre===genre[1]||e.genre===genre[2]))
                    return res.status(200).json(genreFil);}
                    

                return res.status(200).json(typeFil);}
                
            
            if(genre){
                const genreFil=brandFil.filter(e=>(e.genre===genre||e.genre===genre[0]||e.genre===genre[1]||e.genre===genre[2]))
                return res.status(200).json(genreFil);}

            
            return res.status(200).json(brandFil);
            }

            
            
            
            
            
            
            
            
            if(colour){
                const colourFil = await colourFilter(colour)
                
                
                if(genre){
                    const genreFil=colourFil.filter(e=>(e.genre===genre||e.genre===genre[0]||e.genre===genre[1]||e.genre===genre[2]))
                    
                    if(type){
                        const typeFil=genreFil.filter(e=>(e.type===type||e.type===type[0]||e.type===type[1]||e.type===type[2]||e.type===type[3]||e.type===type[4]));
                        return res.status(200).json(typeFil);}
                        
                    return res.status(200).json(genreFil);}
                        
                    
                if(type){
                    const typeFil=colourFil.filter(e=>(e.type===type||e.type===type[0]||e.type===type[1]||e.type===type[2]||e.type===type[3]||e.type===type[4]));
                    return res.status(200).json(typeFil);}
                            
                return res.status(200).json(colourFil);
                }
                        
                        
                        
                        
                        
                        
                if(type){
                    const typeFil = await typeFilter(type);
                            
                    if(genre){
                        const genreFil=typeFil.filter(e=>(e.genre===genre||e.genre===genre[0]||e.genre===genre[1]||e.genre===genre[2]))
                        return res.status(200).json(genreFil);}
                return res.status(200).json(typeFil);
                }
                            
                            
                            
                if(genre){
                    const genreFil = await genreFilter(genre)
                    return res.status(200).json(genreFil);
                }
                            
                            
                            
                            
                            
                        }
                            
                        catch(error){
                            return res.status(404).json(error);
    }
})

        module.exports=router;
