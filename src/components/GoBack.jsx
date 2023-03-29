import { Link } from "react-router-dom";

export const GoBack = ({ to, children }) => {
	return (
	  <Link to={to}>
		 {/* <HiArrowLeft size="24" /> */}
		 {children}
	  </Link>
	);
 };