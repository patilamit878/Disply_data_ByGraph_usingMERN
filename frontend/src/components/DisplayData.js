import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartValueAxis,
  ChartValueAxisItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartTitle,
  ChartLegend,
} from "@progress/kendo-react-charts";
import { COLORS } from "../constants";
import { Typography } from "@mui/material";

const categories = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Jully",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DisplayData = () => {
  const [series, setSeries] = useState('');

  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:4000/data/${params.id}`;
      await fetch(url)
        .then((data) => {
          console.log("Api data", data);
          const res = data.json();
          return res;
        })
        .then((res) => {
          console.log("ressss", res);
          setSeries(res);
        })
        .catch((e) => {
          console.log("error", e);
        });
    };
    fetchData();
  }, []);

  return (
    <div>
        <Typography variant="h4">Profit Year {series.year}</Typography>
      <Chart pannable zoomable style={{ height: 350 }}>
        <ChartLegend position="top" orientation="horizontal" />
        <ChartValueAxis>
          <ChartValueAxisItem title={{ text: "Profit" }} min={0} max={200000} />
        </ChartValueAxis>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem categories={categories} />
        </ChartCategoryAxis>
        <ChartSeries>
          <ChartSeriesItem
            type="line"
            tooltip={{ visible: true }}
            data={series.profit}
          />
        </ChartSeries>
      </Chart>
    </div>
  );
};

export default DisplayData;
