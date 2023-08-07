import { getHaulingShips, getShips } from "./database.js"


const haulers = getHaulingShips().sort((a, b) => a.name.localeCompare(b.name));
const ships = getShips()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.dataset.type === "hauler") {
            const haulerId = (itemClicked.dataset.id);

            // Start a counter variable at 0
            let counter = 0

            // Iterate through all shipping ships
            for (const ship of ships) {
                
                // Does the haulerId foreign key match the id?
                if (ship.haulerId === parseInt(haulerId)) {
                    // Increase the counter by 1
                    counter++
                }
            }

            // Display the counter value
            window.alert(`This hauler is carrying ${counter} ships`);
        }
    }
);


export const haulerList = () => {      

    let haulersHTML = "<ul>"

    for (const hauler of haulers) {
        haulersHTML += `<li 
                        data-id="${hauler.id}"
                        data-name = "${hauler.name}"  
                        data-dockid= "${hauler.dockId}"
                        data-type = "hauler">
                        ${hauler.name}
                        </li>`// Convert each dock object to an <li> and append to the docksHTML string
    }

    haulersHTML += "</ul>"

    return haulersHTML
}


