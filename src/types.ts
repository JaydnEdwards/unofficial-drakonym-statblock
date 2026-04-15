export interface Perk {
	name: string;
	effect: string;
}

export interface Action {
	name: string;
	cost?: number;
	type?: string;  // e.g., "Special", "Partnered (Kathalark)"
	effect: string;
}

export interface StatBlock {
	name: string;
	kin?: string;
	type?: string;
	tl?: number;
	actionCap?: number;
	defenseSlots?: number;
	wounds?: number;
	speed?: number;
	size?: string;
	instinct?: string;
	wants?: string;
	fears?: string;
	immunity?: string;
	perks?: Perk[];
	actions?: Action[];
}
