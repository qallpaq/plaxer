import React from 'react'
import AboutPageTitle from '../AboutPageTitle'
import Features from '../Features'
import FooterSlider from '../FooterSlider'
import Page from '../Page'
import TabsComponent from '../Tabs'
import TabItem from '../AboutPageTabItem'
import { useSelectorContext } from '../SelectorContext'
import TeamSlider from '../TeamSlider'


const AboutPage = () => {
  const {aboutTabs} = useSelectorContext()

  return (
    <Page page='About'>
      <AboutPageTitle/>
      <Features/>
      <TeamSlider/>
      <TabsComponent
        Component={TabItem}
        data={aboutTabs}
        title='Best moments'
      />
      <FooterSlider/>
    </Page>
  )
}

export default AboutPage
