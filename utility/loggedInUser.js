const {randomUserName} = require("./randomUser.js");
const {app} = require("./random.js");

//get logged user
exports.users = () => {
    let randomName = randomUserName();
    let uid = app.generateRandomString();
    let email = randomName.toLowerCase().replace(" ", "")+"@gmail.com";
    return {
        "user": {
        "id": 1243, 
        "uid": uid, 
        "spotifyDisplayName": randomName, 
        "email": email, 
        "tastemakerContactEmail": email,
        "image": "", 
        "processingNewData": false, 
        "complete": true, 
        "dateJoined": (new Date).toISOString().replace(/T/gi, ' ').split(".")[0], 
        "userType": null, 
        "paypalId": null, 
        "totalEarnings": null, 
        "status": "handled", 
        "isOnCuratorPage": null, 
        "enabled": true, 
        "active": true, 
        "instagramProfile": null, 
        "twitterProfile": null, 
        "facebookProfile": null, 
        "tiktokProfile": null, 
        "soundcloudProfile": null, 
        "primarySocialLink": null, 
        "referralLink": null, 
        "approved": false, 
        "preferredMusicStyle": null, 
        "inviteCode": null, 
        "twitchProfile": null, 
        "youtubeProfile": null, 
        "referralThisMonth": null, 
        "streakThisMonth": true, 
        "streaksCount": 12, 
        "spotifyLoggedIn": true 
        }
    };
}