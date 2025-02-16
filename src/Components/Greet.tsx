type GreetProps = {
	name: string;
	messageCount?: number;
	isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
	return (
		<div>
      {props.isLoggedIn ? `Hello i am ${props.name}. You have 
      ${props.messageCount} message.`: "Welcome Indra"}
		</div>
	);
};

export default Greet;
