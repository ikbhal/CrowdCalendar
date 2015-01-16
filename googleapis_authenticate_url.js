var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
// Crowd Calendar app
var CLIENT_ID = '203753656872-lduoue0thaf6heedf6uj4ndme7qf8d2g.apps.googleusercontent.com';
var CLIENT_SECRET = 'nVRQIK1K2kl37yw2rV9iwZ_7';
var REDIRECT_URL = 'http://wiseland.cloudapp.net/oauth/auth/callback';
var oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/calendar'
];

var url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
  scope: scopes // If you only need one scope you can pass it as string
});

console.log("Authentication url:"+url);
