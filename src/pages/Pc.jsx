import { NavLink } from "react-router-dom";
import MyInput from "../UI/input/MyInput";
import ProductList from "../components/ProductList";
import ProcCheckbox from "../UI/checkbox/ProcCheckbox";
import GraphicsCheckbox from "../UI/checkbox/GraphicsCheckbox";
import RamCheckbox from "../UI/checkbox/RamCheckbox";
import SsdCheckbox from "../UI/checkbox/SsdCheckbox";

const Pc = () => {

    return (
        <div className="container mx-auto">
            <div className="flex flex-row p-10 gap-6">
                <div className="basis-1/4 h-[850px] border border-gray-400 rounded-lg">
                    <div className="flex flex-col mx-6 mt-5">
                        <MyInput className="p-2 text-violet-500 rounded-lg border-gray-400"
                            placeholder="Search..." />
                    </div>
                    <div className="mt-8 mx-6">
                        <div className="mb-2 text-xl">Processor:</div>
                        <ProcCheckbox className="ml-2" />
                    </div>
                    <div className="mt-8 mx-6">
                        <div className="mb-2 text-xl">Graphics Card:</div>
                        <GraphicsCheckbox className="ml-2" />
                    </div>
                    <div className="mt-8 mx-6">
                        <div className="mb-2 text-xl">Ram:</div>
                        <RamCheckbox className="ml-2" />
                    </div>
                    <div className="mt-8 mx-6">
                        <div className="mb-2 text-xl">SSD:</div>
                        <SsdCheckbox className="ml-2" />
                    </div>
                </div>
                <div className="basis-3/4">
                    <ProductList className="flex flex-wrap gap-4" />
                </div>
            </div>
        </div>
    )
}

export default Pc;