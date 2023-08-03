import { getHaulingShips } from "./database.js"


export const haulerList = () => {

    const haulers = getHaulingShips()
    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        docksHTML += `<li data-id="${hauler.id}"
                        data-name = "${hauler.name}"  
                        data-volume= "${hauler.dockId}">
                        </li>`// Convert each dock object to an <li> and append to the docksHTML string
    }

    haulersHTML += "</ul>"

    return docksHTML
}


