import image from "./images.jpeg";
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      class="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "300px" }}
    >
      <img
        src={src ? src : image}
        style={{ height: "200px", width: "282px" }}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{title.slice(0, 50)}</h5>
        <p class="card-text">
          {description ? description.slice(0, 90) : "News have no description"}
        </p>
        <a href={url} class="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};
export default NewsItem;
