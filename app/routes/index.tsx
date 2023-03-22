import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => ({
  title: "Enabling Futures Ltd - Ofsted Outstanding Residential Care Provider",
})

import Header from "./components/Header"
import Hero from "./components/Hero";
import { Footer } from "./components/Footer";

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
