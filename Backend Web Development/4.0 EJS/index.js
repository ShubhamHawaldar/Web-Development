import express from 'express';


const app = express();
const port = 3000;

app.get("/", (req, res) => {

    const date = new Date();
    const today = date.getDay();
    //Test code
  // weekend:
  // new Date("June 24, 2023 11:13:00");
  // weekday:
  // new Date("June 20, 2023 11:13:00");

    let type = "a weekday";
    let advice = "It's time to work hard.";

    if (today === 0 || today === 6) {
        type = "the weekend";
        advice = "It's time to have some fun.";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: advice
    })

});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});