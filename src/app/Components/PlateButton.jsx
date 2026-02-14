export default function PlateButton(){
    return (
        <div className="group flex h-[20%] w-[60%] border-2 border-white self-end justify-self-center items-center">
            <div className="flex w-screen h-[60%] transition duration-300 translate-x-15 group-hover:rotate-45 group-hover:translate-x-20 bg-[url(Assets/SpoonIcon.png)] bg-center bg-contain bg-no-repeat"></div>
            <div className="flex w-screen h-full bg-[url(Assets/PlateButtonIcon.png)] bg-center bg-contain bg-no-repeat justify-center">
                  <h1 className="self-center text-2xl text-center font-[Great_Vibes]" >
                    Lets 
                    <br />
                    Eat</h1>
            </div>
            <div className="flex w-screen h-[60%] transition duration-300  -translate-x-15 group-hover:-rotate-45 group-hover:-translate-x-20 bg-[url(Assets/ForkIcon.png)] bg-center bg-contain bg-no-repeat"></div>
        </div>
    )
}