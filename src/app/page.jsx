import MenuPage from "./Components/MenuPage";

export default function Home() {
  return (
    <main className="flex-1 flex-col content-around justify-items-center border-2 h-screen bg-[url(Assets/WebpageBackground.png)] bg-size-[100vw_100vh]">
      <MenuPage />
    </main>
  )
}
