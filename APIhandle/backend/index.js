import express from 'express';

const app = express();
 
app.get('/api/products',(req, res)=>{
    const products=[
{
            id:1,
            name: "Serene Deer",
            price: 200,
            image: "https://www.pexels.com/photo/serene-deer-in-the-historic-nara-park-35139483/"
        },
        {
            id:2,
            name: "Breakfast Table",
            price: 300,
            image: "https://www.pexels.com/photo/breakfast-and-a-cup-of-tea-14089174/"
        },
        {
            id:3,
            name: "Sunrise Boat Ride",
            price: 150,
            image: "https://www.pexels.com/video/tranquil-boat-ride-at-sunrise-on-the-ganges-36603819/"
        },
        {
            id:4,
            name: "Tranquil Waters",
            price: 250,
            image: "https://www.pexels.com/video/tranquil-boat-ride-at-sunrise-on-the-ganges-36603819/"
        },
        {
            id:5,
            name: "Nature Scene",
            price: 180,
            image: "https://www.pexels.com/photo/serene-deer-in-the-historic-nara-park-35139483/"
        }

    ]
    if(req.query.search){
        const filterProducts = products.filter((product)=> product.name.includes(req.query.search))
        res.send(filterProducts)
        return;
    }
    setTimeout(()=>{
        res.send(products)
    },3000)
});
const port = process.env.PORT||3000;
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
});
