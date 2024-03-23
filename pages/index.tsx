import type { NextPage } from "next";
import Header from "../components/layout/header";
import MainLayout from "../components/layout";
import LandingPage from "../components/home";
const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <LandingPage />
      </MainLayout>
    </>
  );
};

export default Home;
