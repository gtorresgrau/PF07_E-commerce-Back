const e = require('express');
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
                const colourFil=brandFil.filter((e)=>{                
                    if(typeof colour === 'string') e.colour ===colour;
                    for(i=0;i<colour.length;i++) e.colour === colour[i]})

                if(type){
                    const typeFil=colourFil.filter(e=>{                
                        if(typeof type === 'string') e.type ===type;
                        for(i=0;i<type.length;i++) e.type === type[i]})
                    
                    if(genre){
                        const genreFil=typeFil.filter(e=>{                
                        if(typeof genre === 'string') e.genre ===genre;
                        for(i=0;i<genre.length;i++) e.genre === genre[i]})

                        return res.status(200).json(genreFil);}

                    return res.status(200).json(typeFil);}
                
                if(genre){
                    const genreFil=colourFil.filter(e=>{                
                        if(typeof genre === 'string') e.genre ===genre;
                        for(i=0;i<genre.length;i++) e.genre === genre[i]})
                    return res.status(200).json(genreFil);}
                    

                return res.status(200).json(colourFil);}
  
            
            if(type){
                const typeFil=brandFil.filter(e=>{                
                    if(typeof type === 'string') e.type ===type;
                    for(i=0;i<type.length;i++) e.type === type[i]})
                
                if(genre){
                    const genreFil=typeFil.filter(e=>{                
                        if(typeof genre === 'string') e.genre ===genre;
                        for(i=0;i<genre.length;i++) e.genre === genre[i]})
                    return res.status(200).json(genreFil);}
                    

                return res.status(200).json(typeFil);}
                
            
            if(genre){
                const genreFil=brandFil.filter(e=>{                
                    if(typeof genre === 'string') e.genre ===genre;
                    for(i=0;i<genre.length;i++) e.genre === genre[i]})
                return res.status(200).json(genreFil);}

            
            return res.status(200).json(brandFil);
            }

     
            if(colour){
                const colourFil = await colourFilter(colour)
                
                
                if(genre){
                    const genreFil=colourFil.filter(e=>{                
                        if(typeof genre === 'string') e.genre ===genre;
                        for(i=0;i<genre.length;i++) e.genre === genre[i]})
                    
                    if(type){
                        const typeFil=genreFil.filter(e=>{                
                            if(typeof type === 'string') e.type ===type;
                            for(i=0;i<type.length;i++) e.type === type[i]})
                        return res.status(200).json(typeFil);}
                        
                    return res.status(200).json(genreFil);}
                        
                    
                if(type){
                    const typeFil=colourFil.filter(e=>{                
                        if(typeof type === 'string') e.type ===type;
                        for(i=0;i<type.length;i++) e.type === type[i]})
                    return res.status(200).json(typeFil);}
                            
                return res.status(200).json(colourFil);
                }
                        
                  
                if(type){
                    const typeFil = await typeFilter(type);
                            
                    if(genre){
                        const genreFil=typeFil.filter(e=>{                
                            if(typeof genre === 'string') e.genre ===genre;
                            for(i=0;i<genre.length;i++) e.genre === genre[i]})
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