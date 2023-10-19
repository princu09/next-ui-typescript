export const GET = async (req: Request) => {
  const users = [
    {
      id: 1,
      first_name: "Sylvester",
      last_name: "Barth",
      email: "sbarth0@gnu.org",
      gender: "Genderqueer",
      ip_address: "146.54.7.39",
    },
    {
      id: 2,
      first_name: "Tammie",
      last_name: "Triner",
      email: "ttriner1@aol.com",
      gender: "Male",
      ip_address: "103.221.192.235",
    },
    {
      id: 3,
      first_name: "Tally",
      last_name: "Venditti",
      email: "tvenditti2@quantcast.com",
      gender: "Male",
      ip_address: "4.61.123.184",
    },
    {
      id: 4,
      first_name: "Travers",
      last_name: "Lafuente",
      email: "tlafuente3@mail.ru",
      gender: "Agender",
      ip_address: "87.170.153.169",
    },
    {
      id: 5,
      first_name: "Samson",
      last_name: "Somerbell",
      email: "ssomerbell4@who.int",
      gender: "Male",
      ip_address: "148.129.155.232",
    },
    {
      id: 6,
      first_name: "Yolane",
      last_name: "Fennick",
      email: "yfennick5@latimes.com",
      gender: "Female",
      ip_address: "107.142.78.83",
    },
    {
      id: 7,
      first_name: "Rudie",
      last_name: "Lammertz",
      email: "rlammertz6@sphinn.com",
      gender: "Male",
      ip_address: "193.91.242.238",
    },
    {
      id: 8,
      first_name: "Fanya",
      last_name: "Chadderton",
      email: "fchadderton7@elegantthemes.com",
      gender: "Female",
      ip_address: "98.231.234.83",
    },
    {
      id: 9,
      first_name: "Morry",
      last_name: "Spelling",
      email: "mspelling8@globo.com",
      gender: "Male",
      ip_address: "169.219.186.79",
    },
    {
      id: 10,
      first_name: "Brita",
      last_name: "Laphorn",
      email: "blaphorn9@boston.com",
      gender: "Genderfluid",
      ip_address: "107.91.69.48",
    },
  ];

  let res = {
    error: false,
    message: "Users fetched successfully",
    data: users,
  };

  return Response.json(res, { status: 200 });
};
