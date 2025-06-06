import RenderHtml from "react-native-render-html";
import { prepareHtmlToFormat, wp } from "../../../utils/helper";

type DetailsCardProps = {
 description : string
}
const DetailsCard = ({description} : DetailsCardProps) => {
  return (
    <RenderHtml contentWidth={wp(100)} source={prepareHtmlToFormat(description)} />
  );
};
export default DetailsCard;
