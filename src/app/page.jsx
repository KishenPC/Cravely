import FoodListItem from "./Components/FoodListItem";
import MenuPage from "./Components/MenuPage";
import PlateButton from "./Components/PlateButton";

export default function Home() {
  return (
    <main className="flex-1 flex-col content-around justify-items-center border-2 h-screen bg-[url(Assets/WebpageBackground.png)] bg-size-[100vw_100vh]">
      <MenuPage >
        <FoodListItem />
        <PlateButton />
      </MenuPage>
    </main>
  );
}
