import React from "react";

const NavigationSidebar = ({
    active = 'explore'
}) => {
    return(
        <>
            <div className="list-group">
                <a className="list-group-item" href="/"><i className="fab fa-twitter"></i></a>
                <a href={"/tuiter"} className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home"></i>
                    <span className="wd-fs-16 d-none d-xl-inline">  Home</span>
                </a>

                <a href="" className={`list-group-item active list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag"></i>
                    <span className="wd-fs-16 d-none d-xl-inline">  Explore</span>
                </a>

                <a href="../notifications.html" className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
                    <i className="fa fa-bell"></i>
                    <span className="wd-fs-16 d-none d-xl-inline">  Notifications</span>
                </a>

                <a href="../messages.html" className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
                    <i className="fa fa-envelope"></i>
                    <span className="wd-fs-16 d-none d-xl-inline">  Messages</span>
                </a>

                <a href="../bookmarks.html" className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                    <i className="fa fa-bookmark"></i>
                    <span className="wd-fs-16 d-none d-xl-inline">  Bookmarks</span>
                </a>

                <a href="../list.html" className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                    <i className="fa fa-list"></i>
                    <span className="wd-fs-16 d-none d-xl-inline">  Lists</span>
                </a>

                <a href="../profile.html" className={`list-group-item list-group-item-action ${active === 'profiles' ? 'active' : ''}`}>
                    <i className="fa fa-user"></i>
                    <span className="wd-fs-16 d-none d-xl-inline">  Profiles</span>
                </a>

                <a href="../more.html" className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                    <i className="fa fa-circle"></i>
                    <span className="wd-fs-16 d-none d-xl-inline">  More</span>
                </a>
            </div>
            <button type="button" className="btn btn-primary btn-sm mt-2 w-100 rounded-pill">Tweet</button>
        </>
    );
}
export default NavigationSidebar;
