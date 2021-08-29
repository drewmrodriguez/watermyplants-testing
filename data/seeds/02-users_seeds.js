exports.seed = async function (knex) {
  await knex("Users").insert([
    {
      User_name: "Chris",
      password: "1234",
      phoneNumber: "251 - 706 - 7845",
    },
    {
      User_name: "Stephanie",
      password: "1234",
      phoneNumber: "897 - 454 - 5364",
    },
    {
      User_name: "Stephen",
      password: "1234",
      phoneNumber: "645 - 374 - 9070",
    },
  ]);

  await knex("Plants").insert([
    {
      nickname: "Blue Sage",
      species: "Salvia farinacea",
      h2oFrequency: "1 week",
    },
    {
      nickname: "Garden Lily",
      species: "Lilium",
      h2oFrequency: "1 week",
    },
    {
      nickname: "Lavender",
      species: "Lavendula angustifolia",
      h2oFrequency: "3 days",
    },
    {
      nickname: "Petunia",
      species: "Petunia x hybrida",
      h2oFrequency: "1 week",
    },
    {
      nickname: "Sunflower",
      species: "Helianthus annuus",
      h2oFrequency: "1 week",
    },
    {
      nickname: "Daylily",
      species: "Hemerocallis hybrids",
      h2oFrequency: "4 days",
    },
    {
      nickname: "Lilac",
      species: "Syringa vulgaris",
      h2oFrequency: "4 days",
    },
    {
      nickname: "French Marigold",
      species: "Tagetes patula",
      h2oFrequency: "1 week",
    },
    {
      nickname: "Peony",
      species: "Paeonia Iactiflora",
      h2oFrequency: "2 weeks",
    },
    {
      nickname: "Siberian Iris",
      species: "Iris sibirica",
      h2oFrequency: "1 week",
    },
  ]);
};
