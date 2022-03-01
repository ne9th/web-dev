const WhoToFollowListItem = (who) => {
    return (`
            <li class="list-group-item">
                <div class="row">
                    <div class="col-10 d-flex align-items-center">
                        <img class="d-inline-block wd-profile-img rounded-circle me-3" 
                        src="${who.avatarIcon}">
                        <div class="d-inline-block">
                            <h6 class="wd-fs-16 m-0">${who.userName} <i class="fa fa-check-circle"></i></h6>
                            <p class="wd-username m-0 text-secondary">@${who.handle}</p>
                        </div>
                    </div>
                    <div class="col-2 d-flex justify-content-end align-items-center">
                        <button type="button" class="btn btn-sm btn-primary rounded-pill">Follow</button>
                    </div>
                </div>
            </li>`)
}

export default WhoToFollowListItem;