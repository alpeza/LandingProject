
import { Common } from "../../components/common";
import { fetchAllAPI } from "../../lib/api";
//import { ShopElement } from "../../components/shopElement"

//https://www.tailwind-kit.com/components/blog
export default function eshop({ landingData }) {
    return (
        <>
      <Common landingData={landingData} ></Common>
      </>
    );
}



export async function getStaticProps({ params }) {
    const matchingCategories = await fetchAllAPI("/landing-page");
    console.log(matchingCategories.data.attributess)
    return {
      props: {
        landingData: matchingCategories.data.attributes
      },
      revalidate: 1,
    };
    
}