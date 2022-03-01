import who from './who.js'
import WhoToFollowListItem from './WhoToFollowListItem.js'

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item fw-bold">Who to follow</li>
                ${who.map(user => WhoToFollowListItem(user)).join("")}
            </ul>
    `)
}

export default WhoToFollowList
