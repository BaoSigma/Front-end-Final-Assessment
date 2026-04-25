import SalesChart from "../components/organisms/SalesChart";

export default function Home() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">
        Sales Dashboard
      </h1>

      <SalesChart />
    </div>
  );
}