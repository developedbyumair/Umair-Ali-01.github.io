import { boston } from "@/src/utils";
import React from "react";

export const useBostonEffects = () => {
  React.useEffect(() => {
    boston.scrollToActiveNav();
    boston.imgToSvg();
  }, [boston]);
};
