import { dockList } from "./docklist.js"
import { haulerList } from "./haulerList.js"
import { shipList } from "./shipList.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Shipping ships</h1>
<article class="details">
    <section class="detail--column list details__docks">
        <h2>Docks</h2>
        ${dockList()}
    </section>
    <section class="detail--column list details__haulers">
        <h2>haulers</h2>
        ${haulerList()}
    </section>
    <section class="detail--column list details__ships">
        <h2>ships</h2>
        ${shipList()}
    </section>
</article>

`

mainContainer.innerHTML = applicationHTML