declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.scss' {
  interface IClassNames {
    [key: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}


declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
declare module '*.svg' {
  import React from "react";
  export const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}