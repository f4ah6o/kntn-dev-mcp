export type ErrorResult = {
	isError: true;
	content: Array<{ type: "text"; text: string }>;
};

export function handleError(error: Error): ErrorResult {
	console.error("MCP Server Error:", error);

	return {
		isError: true,
		content: [
			{
				type: "text",
				text: `Error: ${error.message}`,
			},
		],
	};
}

export function handleValidationError(message: string): ErrorResult {
	return {
		isError: true,
		content: [
			{
				type: "text",
				text: `Validation Error: ${message}`,
			},
		],
	};
}

export function handleNotFound(resource: string): ErrorResult {
	return {
		isError: true,
		content: [
			{
				type: "text",
				text: `Resource not found: ${resource}`,
			},
		],
	};
}
