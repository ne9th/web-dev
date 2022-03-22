import react from 'react'
import who from './who.json'
import WhoToFollowListItem from '../WhoToFollowListItem'

const WhoToFollowList = () => {
    return (
            <ul className="list-group">
                <li className="list-group-item fw-bold">Who to follow</li>
                {who.map(user => {
                    return (
                        <WhoToFollowListItem who={user}/>
                        );
                    })
                }
            </ul>
    )
}

export default WhoToFollowList
