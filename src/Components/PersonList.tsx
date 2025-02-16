import { Name } from "./Person.types";
type listProps = {
names: Name[];
};

const PersonList = (props: listProps) => {
	return (
		<div>
			{props.names.map((name,id) => (
				<h2 key={id}>{name.first} {name.last}</h2>
			))}
		</div>
	);
};

export default PersonList;
