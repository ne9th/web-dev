const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>

                <a href="../home.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-home"></i>
                    <span class="wd-fs-16 d-none d-xl-inline">Home</span>
                </a>

                <a href="" class="list-group-item active list-group-item-action">
                    <i class="fa fa-hashtag"></i>
                    <span class="wd-fs-16 d-none d-xl-inline">Explore</span>
                </a>

                <a href="../notification.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-bell"></i>
                    <span class="wd-fs-16 d-none d-xl-inline">Notifications</span>
                </a>

                <a href="../messages.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-envelope"></i>
                    <span class="wd-fs-16 d-none d-xl-inline">Messages</span>
                </a>

                <a href="../bookmarks.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-bookmark"></i>
                    <span class="wd-fs-16 d-none d-xl-inline">Bookmarks</span>
                </a>

                <a href="../list.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-list"></i>
                    <span class="wd-fs-16 d-none d-xl-inline">Lists</span>
                </a>

                <a href="../profile.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-user"></i>
                    <span class="wd-fs-16 d-none d-xl-inline">Profiles</span>
                </a>

                <a href="../more.html" class="list-group-item list-group-item-action">
                    <i class="fa fa-circle"></i>
                    <span class="wd-fs-16 d-none d-xl-inline">More</span>
                </a>
            </div>
            <button type="button" class="btn btn-primary btn-sm mt-2 w-100 rounded-pill">Tweet</button>
    `);
}
export default NavigationSidebar;
