import React, { Fragment } from "react"
import { graphql } from "gatsby"

const Project = ({ data: { prismicProject } }) => {
  const { data } = prismicProject

  return (
    <Fragment>
      <div
        dangerouslySetInnerHTML={{ __html: data.project_description.html }}
      />
    </Fragment>
  )
}

export default Project

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        project_title {
          text
        }
        project_description {
          html
        }
      }
    }
  }
`
