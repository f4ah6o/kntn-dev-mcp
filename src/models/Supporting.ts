export interface Constraint {
	type: string;
	value: unknown;
	message: string;
}

export interface Parameter {
	name: string;
	type: string;
	required: boolean;
	description: string;
	example?: unknown;
	constraints?: Constraint[];
}

export interface Response {
	statusCode: number;
	description: string;
	schema?: Record<string, unknown>;
	example?: unknown;
}

export interface Example {
	title: string;
	description: string;
	request: Record<string, unknown>;
	response: Record<string, unknown>;
	curlCommand?: string;
}

export interface FieldProperty {
	name: string;
	type: string;
	required: boolean;
	description: string;
	defaultValue?: unknown;
}

export interface FieldExample {
	title: string;
	configuration: Record<string, unknown>;
	usage: string;
}

export interface CodeExample {
	language: string;
	title: string;
	code: string;
	description?: string;
}

export interface UpdateHistoryEntry {
	timestamp: string; // ISO
	source: string;
	changes: number;
	status: "success" | "failure" | "partial";
	errorMessage?: string;
}

export interface CICDUpdateProcess {
	lastUpdate: string; // ISO
	nextScheduledUpdate: string; // ISO
	updateFrequency: string; // e.g., daily, weekly
	sourceVersions: Record<string, string>;
	updateHistory: UpdateHistoryEntry[];
}
