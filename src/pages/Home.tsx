import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import {
  useGetPlayerRankingQuery,
  useGetRecentMatchesQuery,
} from "../store/api/generalInfoApiSlice";

import {
  setRankingInfo,
  setRecentMatches,
} from "../store/slices/generalInfoSlice";

import Help from "../components/home/Help";
import Highlighted from "../components/home/Highlighted";
import Ranking from "../components/home/Ranking";
import Recent from "../components/home/Recent";
import styles from "./styles/Home.module.scss";
import Layout from "../layouts/Layout";

function Home() {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { data: dataRanking } = useGetPlayerRankingQuery(5);
  const { data: dataMatches } = useGetRecentMatchesQuery(5);

  useEffect(() => {
    if (!dataRanking) {
      dispatch(setRankingInfo([]));
    } else {
      dispatch(setRankingInfo(dataRanking));
    }
  }, [dataRanking, dispatch]);

  useEffect(() => {
    if (!dataMatches) {
      dispatch(setRecentMatches([]));
    } else {
      dispatch(setRecentMatches(dataMatches));
    }
  }, [dataMatches, dispatch]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  let render = (
    <>
      <Recent />
      <Ranking />
      <Help />
    </>
  );

  if (windowWidth > 1024) {
    render = (
      <>
        <div className={styles.double}>
          <Recent />
          <Help />
        </div>
        <Ranking />
      </>
    );
  }

  return (
    <div className={styles.container}>
      <Layout>
        <div className={styles.containerCards}>
          <Highlighted />
          <div className={styles.infos}>{render}</div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
