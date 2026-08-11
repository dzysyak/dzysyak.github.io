const FLOWCHART_ELEMENTS = {
	version: 1,
	elements: [
		{
			id: "start",
			name: "start",
			type: "terminator",
			label: "Start",
			description: "Entry point of a process.",
			canBeFirst: true,
			allowedNext: ["process", "decision", "input_output", "end"]
		},
		{
			id: "process",
			name: "process",
			type: "process",
			label: "Process",
			description: "A standard action or operation step.",
			canBeFirst: false,
			allowedNext: ["process", "decision", "input_output", "end"]
		},
		{
			id: "decision",
			name: "decision",
			type: "decision",
			label: "Decision",
			description: "A branching condition with yes/no style outcomes.",
			canBeFirst: false,
			allowedNext: ["process", "input_output", "end"]
		},
		{
			id: "input_output",
			name: "input_output",
			type: "data",
			label: "Input / Output",
			description: "Reads input or produces output.",
			canBeFirst: false,
			allowedNext: ["process", "decision", "end"]
		},
		{
			id: "end",
			name: "end",
			type: "terminator",
			label: "End",
			description: "Exit point of a process.",
			canBeFirst: false,
			allowedNext: []
		}
	]
};

if (typeof window !== "undefined") {
	window.FLOWCHART_ELEMENTS = FLOWCHART_ELEMENTS;
}

if (typeof module !== "undefined" && module.exports) {
	module.exports = FLOWCHART_ELEMENTS;
}
