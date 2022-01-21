import React from "react";
import "../styles/SidebarOption.css";

function SidebarOption({ title, Icon, uri, handleClick }) {
	return (
		<div className="sidebarOption">
			{Icon && <Icon className="sidebarOption__icon" />}
			{Icon ? (
				<h4 onClick={() => handleClick({ uri })}>{title}</h4>
			) : (
				<p onClick={() => handleClick({ uri })}>{title}</p>
			)}
		</div>
	);
}

export default SidebarOption;
