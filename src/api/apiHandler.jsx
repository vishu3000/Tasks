import { OverviewDetail } from "./apiPaths";

export const callOverviewData = async () => {
  const url = OverviewDetail();
  const response = await fetch(
    url,
    { next: { revalidate: 300 } },
    { cache: "no-store" }
  );
  if (!response.ok) {
    throw new Error("Failed to Fetch data");
  }
  return response.json();
};
