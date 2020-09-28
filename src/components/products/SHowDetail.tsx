import React from "react";
import "../../Css/ShowDetail.css";

type ImgProps = {
  images: any;
  name: string;
  price: number;
  desc: string;
};

const ShowDetail: React.FC<ImgProps> = ({ images, name, price, desc }) => {
  console.log(name);
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
      <div className="Intro_price">
        <h2>{name}</h2>
        <span> Harvest 2015 | In stock | Bunch</span>
        <div className="Intro_float">
          <div className="Left">
            ${price} <span>perbunch</span>
          </div>
          <div className="Right">
            ${price}
            <button>ADD TO BAG</button>
          </div>
        </div>
      </div>
      <div className="Intro_Desc">
        <h2>Description</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ShowDetail;
