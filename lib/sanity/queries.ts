export const featuredProjectsQuery = `*[_type == "project" && featured == true] | order(publishedAt desc)[0...3] {
  _id,
  _type,
  title,
  slug,
  summary,
  description,
  mainImage,
  tech,
  demoUrl,
  repoUrl,
  featured,
  publishedAt
}`

export const allProjectsQuery = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  _type,
  title,
  slug,
  summary,
  description,
  mainImage,
  tech,
  demoUrl,
  repoUrl,
  featured,
  publishedAt
}`

export const recommendationsQuery = `*[_type == "recommendation"] | order(_createdAt desc) {
  _id,
  _type,
  authorName,
  position,
  company,
  quote,
  avatar,
  featured
}`

export const skillsQuery = `*[_type == "skill"] | order(proficiency desc) {
  _id,
  _type,
  name,
  icon,
  proficiency,
  category
}`

export const bioQuery = `*[_type == "bio"][0] {
  _id,
  _type,
  name,
  tagline,
  description,
  profileImage,
  email,
  cvFile,
  socialLinks
}`