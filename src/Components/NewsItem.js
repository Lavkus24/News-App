const NewsItem = (props) => {
  let { title, description, imgUrl, Newsurl, author, date, source } = props;
  return (
    <div className="container">
      <div
        className="card my-3"
        style={{ width: "22rem", overflow: "scroll", height: "25rem" }}
      >
        <div style={{ color: "white", backgroundColor: "red" }}>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>
          {source}
        </div>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <strong>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </strong>
          <a href={Newsurl} className="btn btn-sm btn-primary">
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
