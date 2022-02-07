import Game from "./Game";

const GameList = ({
  games,
  sort,
  handleSort,
  handleSortByPrice,
  search,
  handleSearch,
}) => {
  return (
    <div>
      <input
        type="text"
        id="searchbox"
        onChange={(e) => handleSearch(e)}
        value={search}
        placeholder="search..."
      />
      <table id="table">
        <thead>
          <tr>
            <th>
              Game Name{" "}
              <button
                id="sortbyname"
                name="gamename"
                onClick={(e) => {
                  handleSort(e);
                }}
              >
                Sort
              </button>
            </th>
            <th>Game Author</th>
            <th>Game Tags</th>
            <th>
              Game Price
              <button
                id="sortbyprice"
                name="gameprice"
                onClick={handleSortByPrice}
              >
                Sort
              </button>
            </th>
            <th>Is For Kids</th>
            <th>
              Ratings
              <button
                id="sortbyrating"
                name="gamerating"
                onClick={(e) => {
                  handleSort(e);
                }}
              >
                Sort
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {games.map((game) => {
            return <Game game={game} key={game.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GameList;
