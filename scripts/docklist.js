import { getDocks } from "./database.js"

const docks = getDocks()

export const dockList = () => {

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li data-id="${dock.id}"
                        data-location = "${dock.location}"  
                        data-volume= "${dock.volume}">
                        </li>`// Convert each dock object to an <li> and append to the docksHTML string
    }

    docksHTML += "</ul>"

    return docksHTML
}