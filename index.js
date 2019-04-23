const CheerIO = require('cheerio');
const request = require('request');
const dotenv = require('dotenv');
const Vendor = require("./libs/ictcvendor");

dotenv.config();
const username = process.env.username,
    password = process.env.password;

const ICTC_URL = 'http://ictc.hs/login';


request(ICTC_URL, function (error, response, body) {
    if(error)
        console.error('Unable to connect to ictc.hs:', error); // Print the error if one occurred

    const hMd5Pos = body.indexOf("hexMD5");
    const hMd5EndPost = body.indexOf("');", hMd5Pos);
    const passwordPadding = body.substring(hMd5Pos+7,hMd5EndPost+1);
    if (hMd5EndPost === -1 || hMd5Pos === -1){
        console.log("You are already connected to internet!");
        return;
    }

    const pads = passwordPadding.split(" + ");
    const hashedPassword = Vendor.hexMD5(eval(`unescape(${pads[0]})`) + password + eval(`unescape(${pads[2]})`));
    const postParams = {
        username,
        password: hashedPassword,
        dst:'',
        popup: true
    }


    request.post({url: ICTC_URL , form: postParams}, (err,httpResponse,body)=>{
        if(body.includes("خروج از شبکه")){
            console.log("Connected successfully :)")
        }else{
            console.log("Ooops :(");
            console.log(err);
        }
    })
});
