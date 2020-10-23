import logo from "./logo.svg";
import "./App.css";
import { StoriesList } from "./StoriesList";

function App() {
  return (
    <div>
      <StoriesList stories={testStories} />
    </div>
  );
}

const testStories = [
  {
    id: 1,
    title: "Why I dont trust the us Govt",
    url: "me@example.com",
    author: "Sasha ",
    updated_at: "2020-07-11 21:24:00",
    comments: "23",
    points: "1360",
  },
  {
    id: 2,
    title: "Cards whip Cowboys",
    url: "me@example.com",
    author: "DjRhude ",
    updated_at: "2019-03-29 13:44:00",
    comments: "23",
    points: "1360",
  },
  {
    id: 3,
    title: "Test your skills",
    url: "me@example.com",
    author: "Shadowmunkey ",
    updated_at: "2016-07-18 21:24:00",
    comments: "23",
    points: "1360",
  },
  {
    id: 4,
    title: "React node tutorials",
    url: "me@example.com",
    author: "BigBums ",
    updated_at: "2020-07-11 21:24:00",
    comments: "23",
    points: "1360",
  },
  {
    id: 5,
    title: "Screm for fun",
    url: "me@example.com",
    author: "Windy ",
    updated_at: "2019-03-29 13:44:00",
    comments: "23",
    points: "1360",
  },
  {
    id: 6,
    title: "My mom is an alien",
    url: "me@example.com",
    author: "Fedz ",
    updated_at: "2016-07-18 21:24:00",
    comments: "23",
    points: "1360",
  },
  {
    id: 7,
    title: "Waiting to Exhale",
    url: "me@example.com",
    author: "Krulmicheal ",
    updated_at: "2020-07-11 21:24:00",
    comments: "23",
    points: "1360",
  },
  {
    id: 8,
    title: "Covid 19 testing is to much",
    url: "me@example.com",
    author: "Hinsanity ",
    updated_at: "2019-03-29 13:44:00",
    comments: "23",
    points: "1360",
  },
  {
    id: 9,
    title: "Bradly beal traded to Warriors",
    url: "me@example.com",
    author: "Virix ",
    updated_at: "2016-07-18 21:24:00",
    comments: "23",
    points: "1360",
  },
  {
    id: 10,
    title: "Is the king the true goat",
    url: "me@example.com",
    author: "Trundle ",
    updated_at: "2020-07-11 21:24:00",
    comments: "23",
    points: "1360",
  },
  {
    id: 11,
    title: "Trip to mars",
    url: "me@example.com",
    author: "Bcybmane ",
    updated_at: "2019-03-29 13:44:00",
    comments: "23",
    points: "1360",
  },
  {
    id: 12,
    title: "Son of Sam",
    url: "me@example.com",
    author: "Epidemik ",
    updated_at: "2016-07-18 21:24:00",
    comments: "23",
    points: "1360",
  },
];

export default App;
