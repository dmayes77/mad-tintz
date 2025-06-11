import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

/**
 * ComparisonSlider
 * Props:
 * - beforeImage: URL or import of the before image
 * - afterImage: URL or import of the after image
 * - width: width of the slider container (e.g. 'w-full', 'w-96')
 * - height: height of the slider container (e.g. 'h-64', 'h-auto')
 */
export default function ComparisonSlider({ beforeImage, afterImage, position }) {
  return (
    <ReactCompareSlider
      itemOne={
        <ReactCompareSliderImage
          src={beforeImage}
          alt="Before"
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
            justifyContent: "start",
          }}
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src={afterImage}
          alt="After"
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",
            justifyContent: "start",
          }}
        />
      }
      position={position}
    />
  );
}
