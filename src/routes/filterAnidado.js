const { Router } = require('express');
const router = Router();


const {brandFilter, colourFilter, typeFilter, genreFilter}=require('../controllers/filtroAnidado')


    
router.get('/', async ( req,res)=>{

    try{
        
        const {brand,colour,type,genre}= req.query;


        if(brand){
            const brandFil = await brandFilter(brand);

            if(colour){
                const colourFil=brandFil.filter(e=>e.colour===colour)
                
                if(type){
                    const typeFil=colourFil.filter(e=>e.type===type);
                    
                    if(genre){
                        const genreFil=typeFil.filter(e=>e.genre===genre)
                        return res.status(200).json(genreFil);}

                    return res.status(200).json(typeFil);}
                
                if(genre){
                    const genreFil=colourFil.filter(e=>e.genre===genre)
                    return res.status(200).json(genreFil);}
                    

                return res.status(200).json(colourFil);}

            
            
            
            if(type){
                const typeFil=brandFil.filter(e=>e.type===type)
                
                if(genre){
                    const genreFil=typeFil.filter(e=>e.genre===genre)
                    return res.status(200).json(genreFil);}
                    

                return res.status(200).json(typeFil);}
                
            
            if(genre){
                const genreFil=brandFil.filter(e=>e.genre===genre)
                return res.status(200).json(genreFil);}

            
            return res.status(200).json(brandFil);
            }

            
            
            
            
            
            
            
            
            if(colour){
                const colourFil = await colourFilter(colour)
                
                if(genre){
                    const genreFil=colourFil.filter(e=>e.genre===genre)
                    
                    if(type){
                        const typeFil=genreFil.filter(e=>e.type===type)
                        return res.status(200).json(typeFil);}
                        
                        return res.status(200).json(genreFil);}
                        
                        if(type){
                            const typeFil=colourFil.filter(e=>e.type===type)
                            return res.status(200).json(typeFil);}
                            
                            return res.status(200).json(colourFil);
                        }
                        
                        
                        
                        
                        
                        
                        if(type){
                            const typeFil = await typeFilter(type)
                            
                            if(genre){
                                const genreFil=typeFil.filter(e=>e.genre===genre)
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

      