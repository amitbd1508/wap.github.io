const http = require("http");
        const fs = require("fs");
        const util = require("util");
        const server = http
        .createServer((req, res) => {
            console.log(`${req.url} ${req.method}`);
            res.setHeader("Content-Type", "image/jpg");
            res.statusCode = 200;

            // fs.readFile('./img1.jpeg',(err,data)=>{
            //     res.end(data);
            // });

            fs.createReadStream('./img1.jpeg').pipe(res);


            res.end(fs.readFileSync("./img1.jpeg"));
            
            const promise = util.promisify(fs.readFile);
            promise("./img1.jpeg")
            .then((data) => {
                res.end(data);
            })
            .catch((err) => res.end(err));
            
        })
        .listen(3000);
        console.log("Listening...");