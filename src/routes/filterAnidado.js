const { Router } = require('express');
const router = Router();
const {brandFilter, colourFilter, typeFilter, genreFilter} = require('../controllers/filtroAnidado')

router.get('/', async ( req,res)=>{
    const {brand,colour,type,genre}= req.query;
    console.log('brand:',brand,'colour:',colour,'type:',type,'genre:',genre)
    try{
        if(brand){
            const brandFil = await brandFilter(brand);
            if(colour){
                const colourFil = brandFil.filter((e)=>{                
                    if(typeof colour === 'string') e.colour === colour;
                    for(i=0;i<colour.length;i++) 
                        {e.colour === colour[i]}})

                if(type){
                    const typeFil = colourFil.filter(e=>{                
                        if(typeof type === 'string') e.type ===type;
                        for(i=0;i<type.length;i++) 
                            {e.type === type[i]}})
                    
                    if(genre){
                        const genreFil=typeFil.filter(e=>{                
                        if(typeof genre === 'string') e.genre ===genre;
                        for(i=0;i<genre.length;i++) 
                            {e.genre === genre[i]}})
                        return res.status(200).send(genreFil)
                    }
                    return res.status(200).send(typeFil)
                }
                
                if(genre){
                    const genreFil=colourFil.filter(e=>{                
                        if(typeof genre === 'string') e.genre ===genre;
                        for(i=0;i<genre.length;i++) 
                            {e.genre === genre[i]}})
                        return res.status(200).send(genreFil)
                    }
                return res.status(200).send(colourFil)
            };
  
            if(type){
                const typeFil=brandFil.filter(e=>{                
                    if(typeof type === 'string') e.type ===type;
                        for(i=0;i<type.length;i++) 
                            {e.type === type[i]}})
                
                if(genre){
                    const genreFil=typeFil.filter(e=>{                
                        if(typeof genre === 'string') e.genre ===genre;
                        for(i=0;i<genre.length;i++) 
                            {e.genre === genre[i]}})
                    return res.status(200).send(genreFil)
                }
                return res.status(200).send(typeFil);}
                
            
            if(genre){
                const genreFil=brandFil.filter(e=>{                
                    if(typeof genre === 'string') e.genre ===genre;
                        for(i=0;i<genre.length;i++) 
                            {e.genre === genre[i]}})
                return res.status(200).send(genreFil)
            }
            return res.status(200).send(brandFil);
        }

     
            if(colour){
                const colourFil = await colourFilter(colour)
                
                if(genre){
                    const genreFil=colourFil.filter(e=>{                
                        if(typeof genre === 'string') e.genre ===genre;
                        for(i=0;i<genre.length;i++) 
                            {e.genre === genre[i]}})
                    
                    if(type){
                        const typeFil=genreFil.filter(e=>{                
                            if(typeof type === 'string') e.type ===type;
                            for(i=0;i<type.length;i++) 
                                {e.type === type[i]}})
                        return res.status(200).send(typeFil)
                    }
                    return res.status(200).send(genreFil);}
                        
                    
                if(type){
                    const typeFil=colourFil.filter(e=>{                
                        if(typeof type === 'string') e.type ===type;
                        for(i=0;i<type.length;i++) 
                            {e.type === type[i]}})
                    return res.status(200).send(typeFil)
                }           
                return res.status(200).send(colourFil);
                }
                        
                  
                if(type){
                    const typeFil = await typeFilter(type);
                            
                    if(genre){
                        const genreFil=typeFil.filter(e=>{                
                            if(typeof genre === 'string') e.genre ===genre;
                        for(i=0;i<genre.length;i++) 
                            {e.genre === genre[i]}})
                        return res.status(200).send(genreFil)
                    }
                return res.status(200).send(typeFil);
                }
                   
                if(genre){
                    const genreFil = await genreFilter(genre)
                    return res.status(200).send(genreFil)
                };
  
    }catch(error){
        return res.status(404).send(error);
    }
})

module.exports = router;