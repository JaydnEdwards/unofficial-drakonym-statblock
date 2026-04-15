<script lang="ts">
	import type { StatBlock } from '../types';
	
	let { data }: { data: StatBlock } = $props();
	
	const coreFields = ['instinct', 'wants', 'fears', 'immunity'] as const;
	
	let stats = $derived(data ? [
		{ label: 'Action Cap', value: data.actionCap },
		{ label: 'DS', value: data.defenseSlots },
		{ label: 'Wounds', value: data.wounds },
		{ label: 'Speed', value: data.speed },
		{ label: 'Size', value: data.size },
	].filter(s => s.value !== undefined) : []);
</script>

{#if data}
<div class="statblock">
	<!-- Header -->
	<div class="statblock-header">
		<h1 class="statblock-name">{data.name}</h1>
		<div class="statblock-header-type">
			{#if data.kin}<span class="statblock-kin">{data.kin}</span>{/if}
			{#if data.type}<span class="statblock-type">{data.type}</span>{/if}
			{#if data.tl !== undefined}<span class="statblock-tl">TL {data.tl}</span>{/if}
		</div>
	</div>
	
	<!-- Core attributes table -->
	{#if coreFields.some(f => data[f])}
		<table class="statblock-table">
			<tbody>
				{#each coreFields as field}
					{#if data[field]}
						<tr>
							<td class="statblock-key">{field.charAt(0).toUpperCase() + field.slice(1)}</td>
							<td class="statblock-value">{data[field]}</td>
						</tr>
					{/if}
				{/each}
			</tbody>
		</table>
	{/if}
	
	<!-- Perks section -->
	{#if data.perks?.length}
		<div class="statblock-perks">
			<h3>Perks</h3>
			{#each data.perks as perk}
				<div class="statblock-perk">
					<span class="statblock-perk-name">{perk.name}</span>
					{#if perk.effect}
						<span class="statblock-perk-effect">{perk.effect}</span>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
	
	<!-- Actions section -->
	{#if data.actions?.length}
		<div class="statblock-actions">
			<h3>Actions</h3>
			{#each data.actions as action}
				<div class="statblock-action">
					<span class="statblock-action-name">{action.name}</span>
					{#if action.cost !== undefined}
						<span class="statblock-action-cost">{action.cost}</span>
					{:else if action.type}
						<span class="statblock-action-type">{action.type}</span>
					{/if}
					{#if action.effect}
						<span class="statblock-action-effect">{action.effect}</span>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
	
	<!-- Stats grid -->
	{#if stats.length}
		<div class="statblock-stats">
			{#each stats as stat}
				<div class="statblock-stat">
					<div class="statblock-stat-value">{stat.value}</div>
					<div class="statblock-stat-label">{stat.label}</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
{/if}

<style lang="scss">
	.statblock {
		&-header {
			display: flex;
			justify-content: space-between;
		}
	}
</style>
