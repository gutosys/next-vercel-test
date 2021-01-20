import Tempo from "../tempo"

async function tempo(request, response) {
    const apiSecret = process.env.CONVERTKIT_API_SECRET;
    const dynamicDate = new Date();

    const subscribersResponse =  await fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${apiSecret}&hash=d0e606883ae71daf6486f17cfcaaf4cf`);
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson;    

    //COMANDO PARA CAHCEAR NA VERCEL    
    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos
    })       
}

export default tempo;