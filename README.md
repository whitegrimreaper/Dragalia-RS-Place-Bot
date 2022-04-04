# Dragalia & RS Place Bot

Bot that automates r/place for the Northern Alliance (Runescape, Dragalia, Eve, and others). Coordinate within the [Northern Alliance Discord](https://discord.gg/AaKgEYQp).
For access to updating the maps, please propose pull requests. I will get back to you as soon as possible. You can contact me via Discord, whitegrimreaper#1078.

## User script bot

### Installation

Before you start, make sure your pixel cooldown has expired.

1. Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension..
2. Download link: [https://github.com/whitegrimreaper/Dragalia-RS-Place-Bot/raw/master/dragaliaplacebot.user.js](https://github.com/whitegrimreaper/Dragalia-RS-Place-Bot/raw/master/dragaliaplacebot.user.js). If all goes well, Tampermonkey should offer you to install a userscript. Click on **Install**.
3. Reload your **r/place** tab. If everything went well, you'll see "Get access token..." at the top right of your screen. The bot is now active, and will keep you informed of what it is doing via these notifications at the top right of your screen.

### Disadvantages of this bot

- When the bot places a pixel, it looks to yourself as if you can still place a pixel, when the bot has already done this for you (so you are in the 5 minute cooldown). The cooldown is therefore displayed at the top right of your screen.
