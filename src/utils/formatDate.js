import { formatDistanceToNow } from "date-fns";

export const formatDate = (dateString) => {
	const parsedDate = new Date(dateString ?? null);
	const timeAgo = formatDistanceToNow(parsedDate, {
		addSuffix: true,
		comparisonBase: new Date(),
	});

	if (timeAgo.startsWith("in ")) {
		const removeWord = timeAgo?.replace("in ", "");

		return removeWord + " ago";
	}

	return timeAgo;
};
