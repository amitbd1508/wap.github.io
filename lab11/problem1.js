const dns=require('dns')


function dnsResolver(url, callback) {
    dns.resolve(url, callback);
}

const cb = (err,address)=>{
    if(address){
        console.log(address);
    }
    if(err){
        console.log('address not found',  err);
    }
};

dnsResolver('www.miu.edu', cb)
dnsResolver('www.miu.edux', cb)