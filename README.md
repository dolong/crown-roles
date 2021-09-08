


# Crown Roles
<h1 align="center">
  <br>
  <a href="#">♔</a>
  <a href="#">Crown Roles Discord Bot</a>
  <a href="#">♔</a>
  <br>
  <br>
</h1>

Discord dApp for Authenticating to the Crown Roles Discord

<b>Beta Version Features</b>
- Connect your wallet
- Checks to see if you own a crown


## Setup Discord Bot
```
1. Create a Bot here https://discord.com/developers/applications
2. Grab bot application ID
3. Set your Redirects callback to your app URL for our current setup: https://crown-roles-test.vercel.app/api/discord-callback
4. Add the bot to your server by entering the URL: https://discord.com/oauth2/authorize?client_id={ServerID}&scope=bot
	a. To Grab your server ID make sure you have Developer Access to discord
	b. Right click on the server name and click copy ID
5. Remember to put the bot above permissions of the roles you want to assign, be sure to note all the ids of the roles. Right click copy id the same way as getting the server id.
```

## Setup Database
```
Create a PSQL database and grab the URI
postgres://{user}:{password}@{IPAddress}/{databaseName}

```

## Setup Nextjs Application
```
5. Download the NextJS repo here, or use git clone https://github.com/dolong/crown-roles.git
6. Fill in the environment variables, you can use the sample.env and change the values to the ones you just copied above
```

## Build Steps
```
First compile libraries with `yarn install`
`npm run-script build`

For Local development
`npm run-script dev`
```

## Setup Vercel Application
```
Register for Vercel
Create a application
Set the git to the address
Set up the environment variables
Thats it!
```

## How it works

1. Users login to the application are directed to the index page
src/pages/index.tsx
From there we connect the user with web3 to the loot contract at infuraId
2. After authentication we direct the user to the api route `/api/verify?account=${account}&signature=${signature}`
	This is handled in `\src\pages\api\verify.ts`
3. Within Verify we check to see if the NFT user has a crown using the loot.sdk, we filter simply here by `bag.head.toLowerCase().includes('crown')`
4. Once the user is verified we direct the user to the /welcome page with the callback we entered in the discord bot setup page earlier
5. Once the user is authenticated they are added to the database however the database does not store any crowns yet, that happens when we hit the refresh api route `/api/refresh`
6. We added a quick refresh button on the page to be triggered manually with a user click, for assigning, removing, and updating roles, as well as other discord routes check out `\src\server\services\Discord.ts`





**TODO Refactor the migrations**
**TODO Refactor the Change Divine Roles**
```