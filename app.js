const express = require("express");
const request = require("request");
const app = express();

app.set("view engine", "ejs");

/*
Routing
*/

app.get("/", (req, res) => {
	//res.send('Home Page')
	res.render("home");
});

// app.get('/student',(req,res)=>{
//     res.send('Student Portal')
// })

// app.get('/student/:rollno',(req,res)=>{
//     console.log(req.params)
//     //Template string in js
//     res.send(`You are viewing profile of student with roll no ${req.params.rollno}`)
// })

app.get("/result", (req, res) => {
	console.log(req.query);
	//res.send(`You searched for ${req.query.movieName}`)
	const url = `http://www.omdbapi.com/?apikey=cf98d6a6&s=${req.query.movieName}`;
	request(url, function (error, response, body) {
		if (!error && response.statusCode === 200) {
			const data = JSON.parse(body);
			//res.send(data);
			res.render("result", { moviesDump: data });
		} else {
			res.send("Something went wrong");
		}
	});
});

app.listen(3000, () => {
	console.log("Server has started");
});

// cf98d6a6 api key
