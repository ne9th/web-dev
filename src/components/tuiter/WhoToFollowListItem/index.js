import react from "react";
const WhoToFollowListItem = ({
    who = {
        avatarIcon: '../../../images/nasa.jpg',
        userName: 'NASA',
        handle: 'NASA',
    }
}) => {
    return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-10 d-flex align-items-center">
                        <img className="d-inline-block wd-profile-img rounded-circle me-3" 
                        src={who.avatarIcon}/>
                        <div className="d-inline-block">
                            <h6 className="wd-fs-16 m-0">{who.userName} <i className="fa fa-check-circle"></i></h6>
                            <p className="wd-username m-0 text-secondary">@{who.handle}</p>
                        </div>
                    </div>
                    <div className="col-2 d-flex justify-content-end align-items-center">
                        <button type="button" className="btn btn-sm btn-primary rounded-pill">Follow</button>
                    </div>
                </div>
            </li>)
}

export default WhoToFollowListItem;