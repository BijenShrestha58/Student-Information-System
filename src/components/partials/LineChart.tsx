import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

export const LineChart = (props: any) => {
  const data = [
    {
      day: "Wednesday",
      class1: 30,
      class2: 25,
      class3: 28,
      class4: 22,
      class5: 18,
      class6: 20,
      class7: 26,
      class8: 23,
      class9: 27,
      class10: 24,
    },
    {
      day: "Thursday",
      class1: 32,
      class2: 26,
      class3: 29,
      class4: 21,
      class5: 19,
      class6: 18,
      class7: 25,
      class8: 22,
      class9: 28,
      class10: 26,
    },
    {
      day: "Friday",
      class1: 31,
      class2: 24,
      class3: 27,
      class4: 20,
      class5: 17,
      class6: 19,
      class7: 28,
      class8: 26,
      class9: 25,
      class10: 23,
    },
    {
      day: "Sunday",
      class1: 33,
      class2: 28,
      class3: 30,
      class4: 24,
      class5: 20,
      class6: 21,
      class7: 30,
      class8: 27,
      class9: 29,
      class10: 28,
    },
    {
      day: "Monday",
      class1: 30,
      class2: 23,
      class3: 26,
      class4: 19,
      class5: 16,
      class6: 18,
      class7: 24,
      class8: 21,
      class9: 25,
      class10: 22,
    },
  ];
  const classKeys = Object.keys(data[0]).filter((key) => key !== "day");

  const lineColors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF33A8",
    "#33A8FF",
    "#A8FF33",
    "#FFD133",
    "#D133FF",
    "#33FFD1",
    "#D1FF33",
  ];

  const datasets = classKeys.map((classKey, index) => ({
    label: `Class ${index + 1}`,
    data: data.map((item: any) => item[classKey]),
    borderColor: lineColors[index % lineColors.length],
    backgroundColor: lineColors[index % lineColors.length],
    borderWidth: 2,
    fill: false,
    hidden: ![1, 2, 3].includes(parseInt(classKey.slice(-1), 10)),
  }));

  return (
    <>
      <Line
        data={{
          labels: data.map((item) => item.day),
          datasets: datasets,
        }}
      />
    </>
  );
};
