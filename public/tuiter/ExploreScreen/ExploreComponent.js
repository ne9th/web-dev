import PostSummaryList from '../PostSummaryList/index.js'

const ExploreComponent = () => {
    return (`
            <div class="row mb-2">
                <div class="col-11 search-bar pe-0">
                    <i class="fa fa-search"></i>
                    <input type="text" class="form-control rounded-pill ps-5" placeholder="Search Tuiter"/>
                </div>
                <div class="col-1 d-flex align-items-center justify-content-end p-0 text-primary">
                    <a href=""><i class="fa fa-cog"></i></a>
                </div>
            </div>

            <ul class="nav nav-tabs mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="d-none d-md-block nav-item">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            <div class="card">
                <a href="">
                    <img class="card-img" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1">
                </a>
                <div class="card-img-overlay d-flex flex-column">
                    <h3 class="mt-auto mb-0 text-white">SpaceX's Starship</h3>
                </div>
            </div>
            ${PostSummaryList()}
    `)
}

export default ExploreComponent
