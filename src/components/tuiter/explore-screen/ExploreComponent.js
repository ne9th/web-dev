import react from 'react'
import PostSummaryList from '../PostSummaryList'

const ExploreComponent = () => {
    return (
        <>
            <div className="row mb-2">
                <div className="col-11 search-bar pe-0">
                    <i className="fa fa-search"></i>
                    <input type="text" className="form-control rounded-pill ps-5" placeholder="Search Tuiter"/>
                </div>
                <div className="col-1 d-flex align-items-center justify-content-end p-0 text-primary">
                    <a href=""><i className="fa fa-cog"></i></a>
                </div>
            </div>

            <ul className="nav nav-tabs mb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="d-none d-md-block nav-item">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            <div className="card">
                <a href="">
                    <img className="card-img" src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=1390&crop=1"/>
                </a>
                <div className="card-img-overlay d-flex flex-column">
                    <h3 className="mt-auto mb-0 text-white">SpaceX's Starship</h3>
                </div>
            </div>
            {PostSummaryList()}
        </>
    )
}

export default ExploreComponent
