import variable from "./../variables/platform";
import { Platform } from "react-native";

export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const tabContainerTheme = {
    elevation: 3,
    height: 50,
    flexDirection: "row",
    shadowColor: platformStyle === "material" ? undefined : undefined,
    shadowOffset: platformStyle === "material"
      ? undefined
      : undefined,
    shadowOpacity: platformStyle === "material" ? undefined : undefined,
    shadowRadius: platformStyle === "material" ? undefined : undefined,
    justifyContent: "space-around",
    borderBottomWidth: Platform.OS === "ios" ? variables.borderWidth : 0,
    borderColor: variables.topTabBarBorderColor
  };

  return tabContainerTheme;
};
