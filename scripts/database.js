const database = {
    docks: [
        { id: 1, 
          location: "Shanghai, China", 
          volume: "43.5" },
        { id: 2, 
          location: "Busan, South Korea", 
          volume: "21.6" },
        { id: 3, 
          location: "Rotterdam, The Netherlands",
          volume: "14.35" },
        { id: 4, 
          location: "Antwerp, Belgium",
          volume: "12.04" }
],
    haulers: [
        { id: 1,
          name: "Biggy",
          dockId: 2 },
        { id: 2,
          name: "Smally",
          dockId: 4 },
        { id: 3,
          name: "WonkaTub",
          dockId: 3 },
        { id: 4,
          name: "Flap",
          dockId: 3 },
],
    ships: [
        {id: 1,
         name: "Backlava",
         haulerId: 3},
        {id: 2,
         name: "Shoemaker",
         haulerId: 3},
        {id: 3,
         name: "Shambala",
         haulerId: 1},
        {id: 4,
         name: "Monster",
         haulerId: 2},
        {id: 5,
         name: "Pascal",
         haulerId: 3},
        {id: 6,
         name: "Thadeous",
         haulerId: 4},




    ]
}

export const getDocks = () => {
    return database.docks.map(dock => ({...dock}))
}// You write the code for copying the array and returning it

export const getHaulingShips = () => {
    return database.haulers.map(hauler => ({...hauler}))// You write the code for copying the array and returning it
}

export const getShips = () => {
    return database.ships.map(ship => ({...ship}))
}