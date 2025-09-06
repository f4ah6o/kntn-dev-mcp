import type { CodeExample } from "./Supporting.js";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface DevelopmentTip {
	id: string;
	title: string;
	summary: string;
	content: string;
	category: string;
	tags: string[];
	difficulty: Difficulty;
	lastUpdated: string; // ISO timestamp
	relatedApis: string[];
	relatedFieldTypes: string[];
	codeExamples: CodeExample[];
}
