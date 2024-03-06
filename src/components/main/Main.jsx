import ProductCard from "../cards/ProductCard";
import FeedbackCard from "../cards/FeedbackCard";

function Main(){
    return (
        <>
        <section className="MainContent">
            <div className="container w-max mx-auto">
                <h1 className=" lg:text-4xl md:text-4xl text-xl font-bold text-center uppercase py-5">
                    <span className=" border-b-4 border-cyan-600 hover:border-red-800 hover:cursor-pointer">
                        Products
                    </span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 lg:px-0 md:px-2 px-1">
                    <div className="flex justify-center">
                        <ProductCard/>
                    </div>
                    <div className="flex justify-center">
                        <ProductCard/>
                    </div>
                    <div className="flex justify-center">
                        <ProductCard/>
                    </div>
                    <div className="flex justify-center">
                        <ProductCard/>
                    </div>
                </div>
                <h2 className=" lg:text-4xl md:text-4xl text-xl font-bold text-center uppercase py-5">
                    <span className=" border-b-4 border-cyan-600 hover:border-red-800 hover:cursor-pointer">
                        What do our users say?
                    </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 lg:px-0 md:px-11 px-1">
                    <div className="flex justify-center">
                        <FeedbackCard/>
                    </div>
                    <div className="flex justify-center">
                        <FeedbackCard/>
                    </div>
                    <div className="flex justify-center">
                        <FeedbackCard/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Main;