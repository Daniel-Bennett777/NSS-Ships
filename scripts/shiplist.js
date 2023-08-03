import { getShips } from "./database.js"

const ships = getShips()

export const shipList = () => {

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