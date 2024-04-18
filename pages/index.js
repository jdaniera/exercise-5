import BarChart from "@/components/BarChart";
import HorizontalChart from "@/components/HorizontalChart";
import PieChart from "@/components/PieChart";
import styles from "@/styles/Home.module.css";


export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <BarChart/>
        <HorizontalChart/>
        <PieChart/>
       </main>
    </>
  );
}
