import { graphql, useStaticQuery } from "gatsby";

const useMenudata = () => {
    const data = useStaticQuery(graphql`
    query MyQuery {
      contentful1LandingPageDynamic(id: {eq: "dc275053-c87d-58e1-9a13-845a5accc174"}) {
        id
        pageElements {
          ... on ContentfulEventTypesSection {
            id
            eventTypes {
              pageName
            }
          }
        }
      }
    }
  `)

  return data.contentful1LandingPageDynamic.pageElements;
};

export default useMenudata;