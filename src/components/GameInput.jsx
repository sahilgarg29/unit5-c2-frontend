import { useState } from "react";

const GameInput = ({ submitForm }) => {
  const [game, setGame] = useState({});

  const handleInputChange = (e) => {
    var name = e.target.name;
    var newGame = { ...game };
    if (name === "forkids") {
      if (e.target.checked) {
        newGame[name] = true;
      } else {
        newGame[name] = false;
      }
    } else {
      newGame[name] = e.target.value;
    }

    // console.log(game);
    setGame(newGame);
  };

  return (
    <div>
      <form
        id="addgame"
        onSubmit={(e) => {
          e.preventDefault();
          setGame({});
          submitForm(game, e);
          e.target.reset();
        }}
      >
        <input
          type="text"
          name="gamename"
          placeholder="Enter Game Name..."
          value={game.gamename}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="text"
          name="gameauthor"
          placeholder="Enter Game Author..."
          value={game.gameauthor}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="text"
          name="gametags"
          placeholder="Enter Game tags seperated by commas"
          value={game.gametags}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="number"
          name="gameprice"
          placeholder="Enter Game Price..."
          value={game.gameprice}
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="checkbox"
          name="forkids"
          id="forkids"
          value={game.forkids}
          onChange={(e) => handleInputChange(e)}
        />
        <textarea
          name="gamedesc"
          id="gamedesc"
          cols="30"
          rows="1"
          value={game.gamedesc}
          onChange={(e) => handleInputChange(e)}
        ></textarea>
        <select
          name="gamerating"
          id="gamerating"
          value={game.gamerating}
          onChange={(e) => handleInputChange(e)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default GameInput;
