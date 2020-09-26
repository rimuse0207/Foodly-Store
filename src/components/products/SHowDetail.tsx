import React from "react";
import "../../Css/ShowDetail.css";

type ImgProps = {
  images: any;
};

const ShowDetail: React.FC<ImgProps> = ({ images }) => {
  return (
    <div className="boXX">
      <div className="Slider_container">
        <div className="Slider_menu">
          {images.map((list, i) => {
            return (
              <>
                <label
                  style={{
                    backgroundImage: `url(${require(`../../asset/Products/${list}`)})`,
                    bottom: `${50 - 10 * i}%`,
                  }}
                  htmlFor={`sllide-dot-${i + 1}`}
                ></label>
              </>
            );
          })}
          {images.map((list, i) => {
            return (
              <>
                <input
                  id={`slide-dot-${i + 1}`}
                  type="radio"
                  name="slide"
                  checked={true}
                  style={{ bottom: `${50 - 9 * i}%` }}
                ></input>
                <div
                  className={`slide slide-${i + 1}`}
                  style={{
                    backgroundImage: `url(${require(`../../asset/Products/${list}`)})`,
                  }}
                ></div>
              </>
            );
          })}
        </div>
      </div>
      <div>asdjsdafhlkasdfhlkasdfhaksjfhkjasdhflk</div>
    </div>
  );
};

export default ShowDetail;
