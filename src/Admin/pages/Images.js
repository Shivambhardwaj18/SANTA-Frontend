import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { EffectFade, Thumbs } from "swiper";
import AnotherLightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Swiper, { SwiperSlide } from "../../components/swiper";

function Images(props) {
  console.log(props);
  const product = props.image;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [index, setIndex] = useState(-1);
  const slides = product.map((img, i) => ({
    src: process.env.PUBLIC_URL + img,
    key: i,
  }));

  // swiper slider settings
  const gallerySwiperParams = {
    spaceBetween: 10,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    thumbs: { swiper: thumbsSwiper },
    modules: [EffectFade, Thumbs],
  };

  const thumbnailSwiperParams = {
    onSwiper: setThumbsSwiper,
    spaceBetween: 10,
    slidesPerView: 4,
    touchRatio: 0.2,
    freeMode: true,
    loop: true,
    slideToClickedSlide: true,
    navigation: true,
  };

  return (
    <Fragment>
      <div className="product-large-image-wrapper">
        {product?.length ? (
          <Swiper options={gallerySwiperParams}>
            {product.map((single, key) => (
              <SwiperSlide key={key}>
                <button
                  className="lightgallery-button"
                  onClick={() => setIndex(key)}
                >
                  <i className="pe-7s-expand1"></i>
                </button>
                <div className="single-image">
                  <img
                    src={process.env.PUBLIC_URL + single}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
            <AnotherLightbox
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              slides={slides}
              plugins={[Thumbnails, Zoom, Fullscreen]}
            />
          </Swiper>
        ) : null}
      </div>
      <div className="product-small-image-wrapper mt-15">
        {product?.length ? (
          <Swiper options={thumbnailSwiperParams}>
            {product.map((single, key) => (
              <SwiperSlide key={key}>
                <div className="single-image">
                  <img
                    src={process.env.PUBLIC_URL + single}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </Fragment>
  );
}

export default Images;
