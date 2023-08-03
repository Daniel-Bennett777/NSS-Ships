import { getShips } from "./database.js"


export const shipList = () => {
    const ships = getShips()

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li data-id="${ship.id}"
                        data-name = "${ship.name}"  
                        data-haulerId= "${ship.haulerId}">
                        </li>`// Convert each dock object to an <li> and append to the docksHTML string
    }

    shipsHTML += "</ul>"

    return shipsHTML
}