import React from "react";
import { useState } from "react";

export default function Image({ image = [{ url: "" }] }) {
  const [mainImage, setMainImage] = useState(0);
  return (
    <>
      <div className="main-image">
        <img src={image[mainImage].url} alt="" />
      </div>
      <ul className="img_ul">
        {image.map((img, i) => {
          return (
            <li className="img_Item" key={i} onClick={() => setMainImage(i)}>
              <img src={img.url} alt="" />
            </li>
          );
        })}
      </ul>
    </>
  );
}
