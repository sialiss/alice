import "https://deno.land/std@0.204.0/dotenv/load.ts";

export const envRequired = (variableName: string): string => {
	const variable = Deno.env.get(variableName)

	if (!variable) {
		console.error(`Please set ${variableName} variable`)
		Deno.exit(1)
	}

	return variable
}