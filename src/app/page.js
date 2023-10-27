import HomePage from "@/Template/HomePage";
import { callOverviewData } from "@/api/apiHandler";
import { Fragment } from "react";

export default async function Home() {
  const OverviewData = await callOverviewData();

  return (
    <Fragment>
      <HomePage data={OverviewData} />
    </Fragment>
  );
}
