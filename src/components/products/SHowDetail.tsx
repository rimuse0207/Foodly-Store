import React, { useState } from "react";
import "../../Css/ShowDetail.css";

type ImgProps = {
  images: any;
};

const ShowDetail: React.FC<ImgProps> = ({ images }) => {
  const [ClickOn, setClickOn] = useState<string>("image1");

  const tomato = require(`../../asset/Products/${images[0]}`);
  const paper = require(`../../asset/Products/${images[1]}`);
  const apple = require(`../../asset/Products/${images[2]}`);

  const Tomato = () => {};

  const handleClick = (text: string) => {
    setClickOn(text);
  };
  return (
    <div className="boXX">
      <div className="Slider_container">
        <div className="Slider_menu">
          {images.map((list, i) => {
            return (
              <>
                <label htmlFor={`sllide-dot-${i + 1}`}></label>
              </>
            );
          })}
          {images.map((list, i) => {
            return (
              <>
                <input
                  style={{
                    backgroundImage: `url(${require(`../../asset/Products/${list}`)})`,
                  }}
                  id={`slide-dot-${i + 1}`}
                  type="radio"
                  name="slide"
                  checked={true}
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
