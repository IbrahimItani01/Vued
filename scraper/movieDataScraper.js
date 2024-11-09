import puppeteer from "puppeteer";
import filmsUrls from "./filmsUrls.js";
import fs from "fs/promises";
import { release } from "os";

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
            // select the div that contains the image
            const movieBody = document.querySelector(".hero-film_body");
            if(!movieBody){
                throw new Error("Movie body not found");
            }
            // selected the necessary data
            const imageUrl = movieBody.querySelector("img")?.src;
            const title = movieContent.querySelector("h1").innerText;
            const duration = durationAndGenre[0].innerText;
            const genre = durationAndGenre[1].innerText;
            const releaseDate = movieBody.querySelector("p")?.innerText;
            const description = movieBody.querySelector(".hero-film_desc")?.innerText;
            // return the scraped data
            return {title,duration,genre,imageUrl,releaseDate,description};
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