const axios = require('axios');
const v8 = require('node:v8');

const baseURL = 'https://strange-competitition.azurewebsites.net/'
const endpoint = 'https://strange-competitition.azurewebsites.net/?fbclid=IwAR2-lxQUMFXTapmoiqH6-tmBhBJg5RRro-cxFZng8xyBASrCRPOQoYU2p8E';
const endpoint2 = 'https://strange-competitition.azurewebsites.net/probe/path2';

permutations()

// axios.get(endpoint2).then(value => {
//     console.log(value.data);
// })


// axios.get(endpoint).then(value => {
//     console.log(value.data);
//     console.log(JSON.stringify(value.data));
//     // console.log(value.data.message);
//
//     let codedMessage = Buffer.from(value.data.message.data);
//     console.log(codedMessage)
//     var deserializedMessage = v8.deserialize(codedMessage);
//     console.log(deserializedMessage)
//     console.log(deserializeMessage(value.data.message.data))
//
//     var result = Buffer.from(deserializedMessage).toString('utf8');
//     console.log(result);//knock
// })

// axios.get(baseURL+'probe/path1').then(value => {
//     console.log(JSON.stringify(value.data));
//
//
//     console.log(deserializeMessage(JSON.stringify(value.data.data.example1.input)))
//
//
// })

// axios.get(baseURL+'').then(value => console.log(value.data));

function permutations () {
    var inputArray = ['c','e','k','s','e','r','a','d','h','e'];

    var result = inputArray.reduce(function permute(res, item, key, arr) {
        return res.concat(arr.length > 1 && arr.slice(0, key)
            .concat(arr.slice(key + 1))
            .reduce(permute, [])
            .map(function (perm) {
                return [item].concat(perm);
            }) || item);
    }, []);

    console.log(result[0].join(''))

    let filteredList = new Set();

    for (let i = 0; i < result.length; i++) {
        let somestr = result[i];
        if(somestr !== undefined) {
            console.log(i + ' ' + somestr.join(''))
            filteredList.add(somestr.join(''))
        }

    }
    // var resultStrings = result.map(function tranform(value) {return filteredList.add(value.join(''))});
    // console.log(resultStrings.length);



    // console.log(filteredList)
    // resultStrings.forEach(value => filteredList.add(value))
    console.log('original' + result.length)
    console.log('filtered' + filteredList.size
    );

    console.log(filteredList[0])

    console.log('Result:' + filteredList)


    // alert(JSON.stringify(result));
    // console.log(result)

    // result.map().forEach(value => { console.log()})
    // for (let i = 0; i < result.; i++) {
    //     if(i === 0){
    //         console.log(result[i])
    //     }
    //
    // }
}



function deserializeMessage (message){
    console.log(message)
    let codedMessage = Buffer.from(message);
    console.log(codedMessage);
    var deserializedMessage = v8.deserialize(codedMessage);
    console.log(deserializedMessage);
    return Buffer.from(deserializedMessage).toString('utf8');
}

