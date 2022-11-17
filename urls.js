const fs = require("fs");
const axios = require("axios")
const process = require("process")


async function getUrl(path){
    fs.readFile(path, "ascii", async function cb(err, data){
        if(err){
            console.error(`Cannot write file ${path}: ${err}`);
            process.exit(1)
        }
        else{
            const lines = data.split(/\r?\n/)
            for(let line of lines){
                try {
                    let url = new URL(line);
                    let result = await axios({method: 'get', responseType: 'text', responseEncoding: 'ascii', url});
                    await fs.writeFile(`${url.hostname}.txt`, result.data, (err) => console.log(err))
                }
                catch (e) {
                    console.log(`Error ${e} while downloading url ${line}`)
                    continue;
                }
            }
        }
    })
};

console.log(process.argv);
getUrl(process.argv[2]);