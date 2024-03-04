import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

export const BarChart = (props: any) => {
  if (
    !props.xAxis ||
    !props.datasets ||
    props.xAxis.length === 0 ||
    props.datasets.length === 0
  ) {
    // Return some default content or a loading indicator
    return <div>Loading...</div>;
  }
  return (
    <>
      <Bar
        data={{
          labels: props.xAxis,
          datasets: props.datasets,
        }}
      />
    </>
  );
};
