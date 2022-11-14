import { graphql, useStaticQuery } from "gatsby";

const useMenudata = () => {
    const data = useStaticQuery(graphql`
    query menuItemsQuery {
      allContentfulEventsPageDynamic {
        edges {
          node {
            pageName
            showInMenu
          }
        }
      }
    }
  `)

  return data.allContentfulEventsPageDynamic.edges;
};

export default useMenudata;