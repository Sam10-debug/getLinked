import Container from "./(main)/container/Container";

//CHECK FOR SCREENS EXACTLY 768PX AND SLIGHTLKY ABOVE THAT, BETWEEN 768 TO 1024
//FOR SCREENS EXACTLLY 1024PX

export default function Home() {
  return (
    <main className=" mt-24 space-y-12 md:mt-48">
      <Container />
    </main>
  )
}
