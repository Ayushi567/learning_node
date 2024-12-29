const shortid = require("shortid");
const URL = require('../models/url');




async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'url is required'})
    

    const shortID = shortid();
    await URL.create({
        shortID: shortID,
        redirectURL: body.url,
        visitHistory:[],
    });
    return res.render('home', {
        id: shortID
    }
    );
    // return res.json({ id: shortID});
}

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    try {
        const result = await URL.findOne({ shortID: shortId });
        if (!result) {
            return res.status(404).json({ error: "Short URL not found" });
        }
        return res.json({
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory,
        });
    } catch (error) {
        console.error("Error in handleGetAnalytics:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,

}