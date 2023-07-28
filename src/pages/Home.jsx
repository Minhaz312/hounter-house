import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/common/Layout'
import FeaturedHouse from '../components/FeaturedHouse'
import Contact from '../components/Contact'
import ReviewSlider from '../components/ReviewSlider'
import Articles from '../components/Articles'
import Subscribe from '../components/Subscribe'

export default function Home() {
  return (
    <>
      <Hero />
      <Layout>
        <FeaturedHouse />
        <Contact />
        <ReviewSlider />
        <Articles />
        <Subscribe />
      </Layout>
    </>
  )
}
