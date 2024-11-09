import puppeteer from "puppeteer";
import filmsUrls from "./filmsUrls.js";
import fs from "fs/promises";

const getMovieData = async (url,retries = 3)=>{
    let browser;
    try{
        browser = await puppeteer.launch({
            headless:false,
            defaultViewport:null,
        });

    }catch(error){
        if (retries>0){
            console.log(`Retrying ${url} (${3-retries+1}/3)`);
            await browser.close();
            return await getMovieData(url,retries-1);
        }
    }
}