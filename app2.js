const endpoint = 'https://strange-competitition.azurewebsites.net/?fbclid=IwAR2-lxQUMFXTapmoiqH6-tmBhBJg5RRro-cxFZng8xyBASrCRPOQoYU2p8E';
const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

fetch(endpoint, options)
    .then((response) => response.json())
    .then((response) => {
        console.log(response);
        console.log(Buffer.from(response.message.data))
    }).catch((err) => console.log(err));
