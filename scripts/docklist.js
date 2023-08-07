import { getDocks,getHaulingShips } from "./database.js"

const originalDocks = getDocks().sort((a, b) => a.location.localeCompare(b.location));//.sort() method is used to sort an array in place. It takes a comparison function as an argument, 
const originalHaulers = getHaulingShips()

const docks = structuredClone(originalDocks);
const haulers = structuredClone(originalHaulers);
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        let haulerNameArray = []
        
        if (itemClicked.dataset.type === "dock"){
            const dockId = parseInt(itemClicked.dataset.id);

            // Iterate through the haulers to find those unloading at the clicked dock
            for (let i = 0; i < haulers.length; i++) {
                const hauler = haulers[i];
                if (hauler.dockId === dockId) {
                    haulerNameArray.push(hauler.name);
                }
            }

            const dockLocation = itemClicked.dataset.location;

            if (haulerNameArray.length > 0) {
                const haulerNames = haulerNameArray.join(", ");
                window.alert(`${dockLocation} is currently unloading ${haulerNames}`);
            } else {
                window.alert(`${dockLocation} is currently not being unloaded by any haulers.`);
            }
        }
    }
);

export const dockList = () => {

    let docksHTML = "<ul>"

    for (const dock of docks) {
        docksHTML += `<li 
        
                        data-id="${dock.id}"
                        data-location = "${dock.location}"  
                        data-volume= "${dock.volume}"
                        data-type= "dock">
                        ${dock.location} can hold up to ${dock.volume} tons of cargo
                        </li>`// Convert each dock object to an <li> and append to the docksHTML string
    }

    docksHTML += "</ul>"

    return docksHTML
}