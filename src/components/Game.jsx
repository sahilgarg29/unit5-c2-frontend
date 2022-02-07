const Game = ({ game }) => {
  return (
    <tr className="gamerow">
      <td className="gamename">{game.gamename}</td>
      <td className="gameauthor">{game.gameauthor}</td>
      <td className="gametags">{game.gametags}</td>
      <td className="gameprice">{game.gameprice}</td>
      <td className="forkids">{game.forkids ? "true" : "false"}</td>
      <td className="gamerating">{game.gamerating}</td>
    </tr>
  );
};

export default Game;
