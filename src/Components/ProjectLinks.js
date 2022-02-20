import fb from "./images/fb.png";
import spaceInvaders from "./images/spaceInvaders.png";
import wapp from "./images/wapp.png";
import mapp from "./images/mapp.png";
import covid from "./images/covid.png";
const data = [
  {
    title: "Facebook Clone",
    href: "https://facebook-clone-react-dp.netlify.app/",
    img: fb,
    description:
      "Using HTML , CSS , Javascript , ReactJS and Firebase I have created this clone.This clone performs user authentication before signing in an user.We can also post pictures and messages in this app.",
    stack: ["HTML", "CSS", "Javascrript", "ReactJS", "Firebase"],
  },
  {
    title: "Weather App",
    href: "https://weather-react-app-dp.netlify.app",
    img: wapp,
    description:
      "This weather app fetches the current weather data from a real world api Open Weather.Weather of a particular city can be searched in this app.",
    gitlink: "https://github.com/dharapoptani/Weather-App-React",
    stack: ["HTML", "CSS", "ReactJs"],
  },
  {
    title: "Covid-19 Tracker",
    href: "https://covid-tracker-react-dp.netlify.app/",
    img: covid,
    description:
      "Covid-19 Tracker app gives the information about the covid cases WorldWide.In this app,we can visualize the data on the world map as well and also search for specific country by filter and map.",
    gitlink: "https://github.com/dharapoptani/Covid-19-Tracker",
    stack: ["HTML", "CSS", "ReactJS", "ReactLeafLet"],
  },
  {
    title: "Movie App",
    href: "https://movie-app-dp-eab974.netlify.app/",
    img: mapp,
    description:
      "This is an movie overview application which gives the overview of any movie.It also  has the functionality of searching movies.It basically provides the jist of movies in a nutshell.",
    gitlink: "https://github.com/dharapoptani/Movie-App",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    title: "Space Invaders",
    href: "https://github.com/dharapoptani/Space-Invaders",
    description:
      "Using Pygame within Python I have created a game.The goal of the game is to kill the enemies to increase the score.Once the enemy hits the player the game will end.",
    img: spaceInvaders,
    gitlink: "https://github.com/dharapoptani/Space-Invaders",
    stack: ["Python(Pygame)"],
  },
];
export default data;
