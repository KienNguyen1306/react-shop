import { useEffect, useState } from "react";
import "./Banner.css";
import { GrNext, GrPrevious } from "react-icons/gr";
function Banner() {
  const [currenImage, setCurrenimage] = useState(0);
  let images = [
    "https://cf.shopee.vn/file/vn-50009109-6004d033a99874ada3b73ea949276c25_xxhdpi",
    "https://cf.shopee.vn/file/vn-50009109-c2690a959234c5e200471788fc96580c_xxhdpi",
    "https://cf.shopee.vn/file/vn-50009109-49c78dafdda4bcddffb40b2bb256e0b0_xxhdpi",
  ];

  function handelNext() {
    if (currenImage >= images.length - 1) {
      setCurrenimage(0);
    } else {
      setCurrenimage(currenImage + 1);
    }
  }

  function handelPrev() {
    if (currenImage === 0) {
      setCurrenimage(images.length - 1);
    } else {
      setCurrenimage(currenImage - 1);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setCurrenimage(Math.floor(Math.random() * 3));
    }, 5000);
  });
  return (
    <div className="banner">
      <div className="body">
        <div className="image">
          <img src={images[currenImage]} alt="loi" />
        </div>
        <button className="btn-prev" onClick={handelPrev}>
          <GrPrevious className="icon-prev" />
        </button>
        <button className="btn-next" onClick={handelNext}>
          <GrNext className="icon-next" />
        </button>
      </div>
    </div>
  );
}

export default Banner;
