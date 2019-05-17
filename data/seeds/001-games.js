exports.seed = function(knex, Promise) {
  return knex("games")
    .truncate()
    .then(function() {
      return knex("games").insert([
        { title: "Overwatch", genre: "Arcade", releaseYear: 2016 },
        { title: "Fortnite", genre: "Online Game", releaseYear: 2017 },
        {
          title: "Stardew Valley",
          genre: "Simulation Game",
          releaseYear: 2016
        },
        {
          title: "Players Unknown Battlegrounds",
          genre: "First-Person Shooter",
          releaseYear: 2017
        }
      ]);
    });
};
