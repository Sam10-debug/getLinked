import Introduction from "../(introduction)/Introduction"
import Judging from "../(judging)/Judging"
import Partners from "../(partners)/Partners"
import Prize from "../(prizes)/Prize"
import Rules from "../(rules)/Rules"
import Privacy from "../(privacy)/Privacy"
import Frequently from "../frequently/Frequently"
import Hero from "../hero/Hero"
import Footer from "../(footer)/Footer"


const Container = () => {
  return (
    <>
      <Hero />  
      <Introduction />
      <Rules />
      <Judging />
      <Frequently />
      <Prize />
      <Partners />
      <Privacy />
      <Footer />
    </>
  )
}

export default Container
