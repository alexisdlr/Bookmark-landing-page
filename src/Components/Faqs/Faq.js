import { useId } from "react";
import arrow from "../../images/icon-arrow.svg";
const Faq = ({ question, answer }) => {
	const key = useId();
	return (
		<details className="singleFaq" key={key}>
			<summary className="singleFaq__question">
				{question}
				<img src={arrow} alt="expand" />
			</summary>
			<p className="singleFaq__answer">{answer}</p>
		</details>
	);
};

export default Faq;