declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";

  // Allows the SVG to be used as a component directly OR via .default
  const content: React.FC<SvgProps> & { default: React.FC<SvgProps> };
  export default content;
}
