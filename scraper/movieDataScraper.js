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
        
    }
}