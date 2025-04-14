import { LineChart } from "react-native-chart-kit";
import Styles from "./StatsChartStyle";
import colors from "../../../theme/colors";
import { wp } from "../../../utils/helper";

type StatsChartProps = {
  stats: number[];
};
const StatsChart = ({ stats }: StatsChartProps) => {
  return (
    <LineChart
      data={{
        labels: [""],
        datasets: [
          {
            data: stats,
          },
        ],
      }}
      width={wp(98)} // from react-native
      height={220}
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundColor: colors.orange,
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 1, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "6",
          strokeWidth: "2",
          stroke: "#ffa726",
        },
      }}
      bezier
      style={Styles.graphStyle}
    />
  );
};
export default StatsChart;
