import { useEffect, useState } from "react";
const contentful = require("contentful");
const useLogoSliderQuery = (ref) => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const client = contentful.createClient({
      space: "s1sz6aratr2c",
      environment: "master",
      accessToken: "HvLYzkcU-68nLJPCWug6U29j7ey4M4PyjCPHYIdi6Bo",
    });

    client
      .getEntry("5zSRdrKU9rKu3HFcw4ONYS")
      .then((entry) => {
        const logosUpdate = [];
        entry.fields.footerItems.map((item) => {
          const updateItem = {
            url: item.fields.url,
            image: {
              imageTitle: item.fields.icon.fields.title,
              imageSource: item.fields.icon.fields.file.url,
              imageHeight: item.fields.icon.fields.file.details.image.height,
              imageWidth: item.fields.icon.fields.file.details.image.width,
              aspectRatio:
                item.fields.icon.fields.file.details.image.height /
                item.fields.icon.fields.file.details.image.width,
            },
          };
          logosUpdate.push(updateItem);
        });

        setLogos(logosUpdate);
      })
      .catch(console.error);
  }, []);

  return { logos };
};

export default useLogoSliderQuery;
