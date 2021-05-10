import React from 'react'
  
  
  dayCards = () => {
    return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

  

    return (
      <div>
        {this.formatDayCards()}
      </div>
    )
  

  export default dayCards;