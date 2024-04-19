const express = require("express");
const redis = require("redis");
const mysqlConnection = require("./helper/mysql");

const app = express();

const redisClient= redis.createClient({
    host: "localhost",
    port: 6379,
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));
redisClient.connect();

app.get("/blog/:id", async (req, res) => {
    blogData = await redisClient.get("blog:id:1");

    if(blogData){
        console.log("Data from Redis");
        res.send(blogData);
    }
    console.log("Data from Database");
    redisClient.set("blog:id:1", "Data from Database");
});

app.get("/blog/title", async (req, res) => {
    blogData = await redisClient.get("blog:title:books");

    if(blogData){
        console.log("Data from Redis");
        res.send(blogData);
    }
    console.log("Data from Database");
    redisClient.set("blog:title:books", "Data from Database");
});

app.get("/blog/content", async (req, res) => {
    blogData = await redisClient.get("blog:content:story");

    if(blogData){
        console.log("Data from Redis");
        res.send(blogData);
    }
    console.log("Data from Database");
    redisClient.set("blog:title:books", "Data from Database");
});

app.listen(3000, () => {
    console.log("Server is running");
});