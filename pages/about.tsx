import Head from "next/head";
import Image from "next/image";
import AboutHome from "../components/AboutHome";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Iskulbukul | About</title>
      </Head>
      <AboutHome />
    </div>
  );
}
