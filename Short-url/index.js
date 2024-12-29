const express = require("express");
const path = require("path");
const {connectToMongoDB} = require("./connect");

const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const userRoute = require("./routes/user");
const URL = require('./models/url');


const app = express();
const PORT = 8001;
connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
.then(() => console.log('Mongodb connected'));

app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// app.get("/test", async(req,res) => {
//     const allUrls = await URL.find({});
//     return res.render("home", {
//         urls: allUrls
//     });
// });


app.use("/url", urlRoute);
app.use("/", staticRoute);
app.use("/user", userRoute);


app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;

    try {
        const entry = await URL.findOneAndUpdate(
            { shortID: shortId }, // Ensure the field name matches your schema
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    },
                },
            },
            { new: true } // Return the updated document
        );

        if (!entry) {
            return res.status(404).json({ error: 'Short URL not found' });
        }

        res.redirect(entry.redirectURL);
    } catch (error) {
        console.error('Error during redirection:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});





app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`))