const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const SCOPES = ['https://www.googleapis.com/auth/calendar'];
// Load client secrets from a local file.

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 * @return {function} if error in reading credentials.json asks for a new one.
 */
function authorize(callback) {
  let token = null;
  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    "urn:ietf:wg:oauth:2.0:oob"
  );

  // Check if we have previously stored a token.
  if (!process.env.TOKEN) {
    return getAccessToken(oAuth2Client, callback);
  } else {
    token = process.env.TOKEN;
  }
  
  oAuth2Client.setCredentials(token);
  callback(oAuth2Client);
}
/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', code => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return callback(err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      console.log(token);
      callback(oAuth2Client);
    });
  });
}

function create(event) {
    try {
        authorize(insertEvents);
      } catch (err) {
        return console.log('Error loading client secret file:', err);
    }
    function insertEvents(auth) {
      const calendar = google.calendar({ version: 'v3', auth });

      calendar.events.insert(
        {
          auth: auth,
          calendarId: 'primary',
          resource: event
        },
        function(err, event) {
          if (err) {
            console.log(
              'There was an error contacting the Calendar service: ' + err
            );
            return;
          }
          console.log(event)
          console.log('Event created: %s', event.data.htmlLink);
        }
      );
    }
}
function generateToken() {
    try {
        authorize(listEvents);
      } catch (err) {
        return console.log('Error loading client secret file:', err);
    }
    function listEvents(auth) {
        const calendar = google.calendar({version: 'v3', auth});
        calendar.events.list({
          calendarId: 'primary',
        }, (err, res) => {
          // console.log(res);
          
        });
    }
}

module.exports = {
    create,
    generateToken
} 