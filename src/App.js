import GameInput from "./components/GameInput";
import GameList from "./components/GameList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [games, setgames] = useState([]);
  const [sort, setsort] = useState({
    by: "gamename",
    type: "asc",
  });
  const [search, setSearch] = useState("");

  const fetchdata = async () => {
    try {
      var res = await axios.get(
        `https://json-todo-api-server.herokuapp.com/games?_sort=${sort.by}&_order=${sort.type}`
      );
      console.log(res);
      setgames([...res.data]);
    } catch (error) {
      console.log(error);
    }
  }

  const submitForm = async (game, e) => {
    e.preventDefault();
    var res = await axios.post(
      "https://json-todo-api-server.herokuapp.com/games",
      game
    );
    console.log(res);
    fetchdata();
    // setgames([...games, res.data]);
  };

  const handleSort = (e) => {
    var newSort = { ...sort };

    newSort["by"] = e.target.name;
    console.log(newSort);
    setsort(newSort);
    // console.log(curr);
  };

  const handleSortByPrice = async () => {
    try {
      var res = await axios.get(
        `https://json-todo-api-server.herokuapp.com/games?_sort=gameprice&_order=asc`
      );
      console.log(res);
      setgames([...res.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    async function getsearchData() {
      try {
        var res = await axios.get(
          `https://json-todo-api-server.herokuapp.com/games?q=${search}`
        );
        console.log(res);
        setgames([...res.data]);
      } catch (error) {
        console.log(error);
      }
    }

    getsearchData();
  }, [search]);

  useEffect(() => {
    const fetchdata = async () => {
    try {
      var res = await axios.get(
        `https://json-todo-api-server.herokuapp.com/games?_sort=${sort.by}&_order=${sort.type}`
      );
      console.log(res);
      setgames([...res.data]);
    } catch (error) {
      console.log(error);
    }
  }
    
    fetchdata();
  }, [sort]);

  return (
    <div>
      <GameInput submitForm={submitForm} />
      <GameList
        games={games}
        sort={sort}
        handleSort={handleSort}
        handleSortByPrice={handleSortByPrice}
        search={search}
        handleSearch={handleSearch}
      />
    </div>
  );
}

export default App;
