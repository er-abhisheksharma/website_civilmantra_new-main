import Panels from "../../../../components/AdminPanel/Panels";
import HeroAdmin from "../../../../components/AdminPanel/Hero";
import Register from "../../../../components/AdminPanel/Register";
import "../../styles/Panel/Panel.css";

export default function AdminPanel  () {
	return (
		<div className="h-auto flex flex-col justify-center items-center gap-28 py-10 pb-28 poppins">
			<div className="w-[85%] flex flex-col items-center gap-16 px-10 py-20 border-[2px] border-gray-600 rounded-xl mt-28">
				<HeroAdmin />
				<Panels />
				<Register />
			</div>
		</div>
	);
};

