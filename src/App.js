import React from "react"
import Header from "./component/Header"
import Footer from "./component/Footer"
import "./Style.css"

export default function App() {

    let countDown = new Date("Sat May 28 2022 22:46:48")

      let counter = setInterval(() => {
      let dateNow = new Date().getTime();
      let dateDiff = countDown - dateNow

      var days = Math.floor( dateDiff  / (1000 * 60 * 60 * 24))
      
    }, 1000)

    console.log(counter.dateNow)

  return (
    <div>
          <Header  
            day={counter.days}
          />
          <Footer />
    </div>
  )
}


