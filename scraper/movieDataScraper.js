import puppeteer from "puppeteer";
import filmsUrls from "./filmsUrls.js";
import fs from "fs/promises";

const getMovieData = async (url,retries = 3)=>{
    let browser;
    try{
        // create a browser and page instance
        browser = await puppeteer.launch({
            headless:false,
            defaultViewport:null,
        });
        const page =await browser.newPage();
        await page.goto(url,{
            waitUntil: 'domcontentloaded',
            timeout: 200000,
        })
        const moviePage = await page.evaluate(()=>{
            // select the div with all data to scrape
            const movieContent = document.querySelector(".hero-film_content");
            // handle error if no content found
            if (!movieContent){
                throw new Error("Movie Content Not Found");
            }
            // select the div that contains the duration and genre data
            const movieSubtitle = movieContent.querySelector(".hero-film_subtitle");
            const durationAndGenre = movieSubtitle.querySelectorAll("p");
            
        })

    }catch(error){
        if (retries>0){
            console.log(`Retrying ${url} (${3-retries+1}/3)`);
            await browser.close();
            return await getMovieData(url,retries-1);
        }else{
            console.error(`Failed to load ${url} after 3 retries. Skipped`);
            await browser.close();
            return null;
        }
    }
}