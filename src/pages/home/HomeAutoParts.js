import { Fragment } from "react";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTwentyOne from "../../wrappers/hero-slider/HeroSliderTwentyOne";
import TabProductThirteen from "../../wrappers/product/TabProductThirteen";
import BannerEighteen from "../../wrappers/banner/BannerEighteen";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import NewsletterThree from "../../wrappers/newsletter/NewsletterThree";

const HomeAutoParts = () => {
  return (
    <Fragment>
      <SEO titleTemplate="Santa International" description="." />
      <LayoutOne headerTop="visible">
        <HeroSliderTwentyOne />
        <TabProductThirteen
          spaceBottomClass="pb-60"
          spaceTopClass="pt-100"
          category=""
        />
        <BannerEighteen spaceBottomClass="pb-85" />
        <FeatureIconFour
          bgImg="/assets/img/bg/shape.png"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
          spaceTopClass="pt-50"
          spaceBottomClass="pb-40"
        />
        <NewsletterThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="dark-red-subscribe"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeAutoParts;
