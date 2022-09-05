import LegendItem from "./LegendItem";

var legendItems = [
  new LegendItem(
    "10,000 +",
    "#741f1f",
    // "#8b0000",
    (areas) => areas >= 100000,
    "white"
  ),

  new LegendItem(
    "5,000 - 9,999",
    // "#741f1f",
    "#9c2929",
    (areas) => areas >= 500_000 && areas < 10000,
    "White"
  ),

  new LegendItem(
    "1,000 - 4,999",
    "#c57f7f",
    (areas) => areas >= 200_000 && areas < 5000
  ),

  new LegendItem(
    "200 - 999",
    "#d8aaaa",
    (areas) => areas >= 50_000 && areas < 1000
  ),

  new LegendItem(
    "0 - 199",
    "#ebd4d4",
    (areas) => areas > 0 && areas < 200
  ),

  new LegendItem("No Data", "#ffffff", (areas) => true),
];

export default legendItems;