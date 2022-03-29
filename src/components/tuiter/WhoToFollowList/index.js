import react from 'react'
import WhoToFollowListItem from '../WhoToFollowListItem'
import { useSelector } from 'react-redux'

const WhoToFollowList = () => {
    const who = useSelector((state) => state.who);
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
