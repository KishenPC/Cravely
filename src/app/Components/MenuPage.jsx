export default function MenuPage({children}){
    return (
        <div className="flex-1 h-[95vh] w-[40vw] bg-linear-to-b from-gray-600 to-gray-800 flex justify-center shadow-[0px_15px_25px_0px_rgba(0,0,0,0.5)]">
            <div className="flex h-[92%] w-[92%] border-10 border-amber-300 shadow-[0px_0px_25px_0px_rgba(255,210,64,0.5)] self-center justify-center">
                {children}
            </div>
        </div>
    )
}