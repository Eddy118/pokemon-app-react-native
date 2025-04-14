import { isIOS } from "../../utils/helper";

export default {
  Lato: {
    bold: isIOS() ? "Lato-Bold" : "LatoBold",
    medium: isIOS() ? "Lato-Medium" : "LatoMedium",
    regular: isIOS() ? "lato-Regular" : "latoRegular",
    semiBold: isIOS() ? "Lato-SemiBold" : "LatoSemiBold",
  },
  Robto: {
    bold: isIOS() ? "Roboto-Bold" : "RobotoBold",
    medium: isIOS() ? "Roboto-Medium" : "RobotoMedium",
    regular: isIOS() ? "Roboto-Regular" : "RobotoRegular",
    semiBold: isIOS() ? "Roboto-SemiBold" : "RobotoSemiBold",
  },
};
