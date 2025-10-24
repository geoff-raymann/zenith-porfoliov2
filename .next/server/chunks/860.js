"use strict";exports.id=860,exports.ids=[860],exports.modules={7628:(e,t,r)=>{r.d(t,{L:()=>p,u:()=>urlFor});var d=r(3722),i=r(711),o=r.n(i);let p=(0,d.eI)({projectId:"c06s3q23",dataset:"production",apiVersion:"2023-10-01",useCdn:!0}),a=o()(p),urlFor=e=>a.image(e)},4238:(e,t,r)=>{r.d(t,{Np:()=>p,oI:()=>d,pz:()=>o,vd:()=>i});let d=`*[_type == "project" && featured == true] | order(publishedAt desc)[0...3] {
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
}`,i=`*[_type == "project"] | order(publishedAt desc) {
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
}`,o=`*[_type == "recommendation"] | order(_createdAt desc) {
  _id,
  _type,
  authorName,
  position,
  company,
  quote,
  avatar,
  featured
}`,p=`*[_type == "bio"][0] {
  _id,
  _type,
  name,
  tagline,
  description,
  profileImage,
  email,
  cvFile,
  socialLinks
}`}};