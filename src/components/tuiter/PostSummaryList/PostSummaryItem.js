const PostSummaryItem = ({
    post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "../../../images/react-blue.png"
        }
    }) => {
        return (
                <a href="" className="list-group-item list-group-item-action">
                    <div className="row">
                        <div className="col-10 pe-0">
                            <h6 className="wd-fs-14 text-secondary">{post.topic}</h6>
                            <h6 className="wd-fs-14 fw-bold">{post.userName} <i className="fa fa-check-circle"></i><span className=" fw-normal text-secondary"> - {post.time}</span></h6>
                            <p className="wd-fs-14 fw-bold mb-0">{post.title}</p>
                        </div>
                        <div className="d-flex align-items-center col-2">
                            <img className="w-100 rounded" src={post.image}/>
                        </div>
                    </div>
                </a>
        )

}

export default PostSummaryItem