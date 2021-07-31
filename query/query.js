export const HOMEPAGE_QUERY = `query HomePage ($limit: IntType) { 
    allPosts(first: $limit) {
      title
      slug
      id
      date
      category {
        name
      }
      author {
        name
      }
      content {
        value
      }
      coverImage {
        responsiveImage(imgixParams: { fit: crop, w: 600, h: 300, auto: format }) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
    }
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    blog {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  `;

export const SEO = `
  query SEO {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    blog {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
  }
  `;

export const POST = `query POST($slug: String) {
    post(filter: {slug: {eq: $slug}}) {
      content {
        value
        blocks {
          __typename
          ... on ImageBlockRecord {
            id
            image { url alt }
          }
        }
      }
      title
      slug
    }
  }
`;
