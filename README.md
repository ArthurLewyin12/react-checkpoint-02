# React Checkpoint 02 - Player Cards

This is my React Checkpoint 02 (Front End Development - React JS Fundamentals). It shows football player cards with React, react-bootstrap and the Iconsax icons.

## Files

- `src/players.js`: an array of 6 players. Each one has a `name`, `team`, `nationality`, `jerseyNumber`, `age` and `imageUrl`. I also added the `position` of the player and a `teamColor` for the stripe under the photo.
- `src/Player.js`: the `Player` component. It renders a react-bootstrap `Card` with all the attributes of one player. The props are destructured in the function parameters, and the styling of the card is inline (style objects).
- `src/PlayersList.js`: imports `Player` and the players array, then uses `.map()` to display one card per player. The props are passed with the spread operator (`<Player {...player} />`).
- `src/App.js`: the root component, with the page header and `PlayersList`
- `src/App.css`: the page, the header and the hover effect of the cards (hover can't be done with inline styles)

## Default props

Each attribute has a default value, given directly in the destructuring of the props:

```js
function Player({
  name = "Unknown Player",
  position = "Unknown position",
  team = "Free Agent",
  teamColor = "#15171A",
  nationality = "Unknown",
  jerseyNumber = "--",
  age = "--",
  imageUrl = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
}) { ... }
```

I did it this way because the project uses React 19, and since React 19, `Player.defaultProps` doesn't work anymore on function components. Default values in the destructuring are what the React docs recommend now.

## Design

- **Fonts**: Barlow Condensed for the title, the names and the numbers, and Barlow for the rest (Google Fonts). They look like the lettering you see in stadiums and on match programs.
- **Colors**: an off-white background, black for the text and the numbers, and the color of each club on the stripe under the photo.
- **Cards**: the photo takes the top of the card with the number in a black block, then the name, the position and a list with the team, nationality, age and number.
- **Icons**: from Iconsax (`iconsax-reactjs`), in the "Linear" style.
- The grid shows 3 cards per row on a computer, 2 on a tablet and 1 on a phone.

## Photos

The photos come from Wikimedia Commons. They were taken by Bryan Berlin and are under the CC BY-SA 4.0 license:

- [Lionel Messi](https://commons.wikimedia.org/wiki/File:Leo_Messi_Argentina_v_Egypt_7_July_2026-1.jpg)
- [Kylian Mbappé](https://commons.wikimedia.org/wiki/File:Kylian_Mbappe_France_v_Senegal_16_June_2026-391_(cropped).jpg)
- [Mohamed Salah](https://commons.wikimedia.org/wiki/File:Mohamed_Salah_Argentina_v_Egypt_7_July_2026-163_(cropped).jpg)
- [Achraf Hakimi](https://commons.wikimedia.org/wiki/File:Achraf_Hakimi_Morocco_v_Norway_7_June_2026-32.jpg)
- [Sadio Mané](https://commons.wikimedia.org/wiki/File:Sadio_Mane_France_v_Senegal_16_June_2026-450.jpg)
- [Jude Bellingham](https://commons.wikimedia.org/wiki/File:Jude_Bellingham_England_v_Ghana_23_June_2026-061_(cropped).jpg)

The default image is [Portrait Placeholder](https://commons.wikimedia.org/wiki/File:Portrait_Placeholder.png) by Greasemann (CC BY-SA 4.0).

## How to run it

```bash
npm install
npm start
```

Then open http://localhost:3000 in the browser.
