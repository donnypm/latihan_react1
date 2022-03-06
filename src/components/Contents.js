import "./Contents.scss";
import Data from "../data/content.json";

const Contents = () => {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center", marginTop: "0px" }}>Information</h1>
        <div>
          {Data.data.map((content) => {
            return (
              <div key={content.id} style={{ marginBottom: "20px" }}>
                <img src={content.image} className="content-image" alt="" />
                <h3>{content.title}</h3>
                <p className="content-paragraf">{content.content}</p>
                <a href={content.link} className="content-link">
                  More Info
                </a>
                <hr style={{ border: "1px dashed white" }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contents;
