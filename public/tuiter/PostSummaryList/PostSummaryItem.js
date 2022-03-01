const PostSummaryItem = (post) => {
    return (`
            <a href="" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-10 pe-0">
                        <h6 class="wd-fs-14 text-secondary">${post.topic}</h6>
                        <h6 class="wd-fs-14 fw-bold">${post.userName} <i class="fa fa-check-circle"></i><span class=" fw-normal text-secondary"> - ${post.time}</span></h6>
                        <p class="wd-fs-14 fw-bold mb-0">${post.title}</p>
                    </div>
                    <div class="d-flex align-items-center col-2">
                        <img class="w-100 rounded" src="${post.image}">
                    </div>
                </div>
            </a>
    `)

}

export default PostSummaryItem