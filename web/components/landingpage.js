import Head from "next/head";
import Hero from "./hero";
import Navbar from "./navbar";
import SectionTitle from "./sectionTitle";

import { benefitOne, benefitTwo } from "./data";
import Video from "./video";
import Benefits from "./benefits";
import Footer from "./footer";
import Testimonials from "./testimonials";
import Cta from "./cta";
import Faq from "./faq";
import PopupWidget from "./popupWidget";

function LandingPage(props) {
    console.log(props)
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero content={props.data.Hero} />
      <SectionTitle
        pretitle= {props.data.Section1.Header}
        title={props.data.Section1.Title}>
        {props.data.Section1.Subtitle}
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default LandingPage