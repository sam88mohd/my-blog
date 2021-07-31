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
        responsiveImage {
          src
        }
      }
    }
    blog {
      seo {
        description
        title
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
`