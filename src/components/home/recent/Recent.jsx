import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Recent Property Listed' subtitle='Real relates to land property and is different from personal property while estate means the "interest" a person has in that land property.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
