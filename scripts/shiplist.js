import { getShips, getHaulingShips } from "./database.js"

const ships = getShips().sort((a, b) => a.name.localeCompare(b.name));
const haulers = getHaulingShips()


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target;
        if (itemClicked.dataset.type === "ship") {
            // Get the haulerId value of the shipping ship clicked
            
            const haulerId = parseInt(itemClicked.dataset.haulerid);
            let haulingHaulerName = []
            
            
            // Find the hauler associated with the ship
            for (const hauler of haulers) {
                
                if (hauler.id === haulerId) {
                    
                    haulingHaulerName.push(hauler.name)
                    break;
                }
            
                
            }       
            
            window.alert(`${itemClicked.dataset.name} is being hauled by ${haulingHaulerName}`)
        }
    });

export const shipList = () => {

    let shipsHTML = "<ul>"

    for (const ship of ships) {
        shipsHTML += `<li data-id="${ship.id}"
                        data-name = "${ship.name}"  
                        data-haulerid= "${ship.haulerId}"
                        data-type = "ship">
                        ${ship.name}
                        </li>`// Convert each dock object to an <li> and append to the docksHTML string
    }

    shipsHTML += "</ul>"

    return shipsHTML
}