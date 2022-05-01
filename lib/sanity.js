import { SanityClient } from "@sanity/client";

export const client = sanityClient({
  projectId: "21cve7ll",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skGk2B2DsedXRlbdoWvaOfo2oQaGqYJpacc8AWG6K6hDpxQJftE0tC95hhUOL8zxJneJ5vDhWRtLNHctOs0OkPPaKLuIYOcRICOZ8ihRvNFecPei9Wbd5u7LlCS4LLKYhwqtflrL4JR37xhlWcsWWWMRANgkbOsvHsnb7xojSCibedEjYyVn",
  useCdn: false,
});
