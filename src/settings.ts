import {App, PluginSettingTab, Setting} from "obsidian";
import type DrakonymStatBlocks from "./main";

export interface DrakonymSettings {
	mySetting: string;
}

export const DEFAULT_SETTINGS: DrakonymSettings = {
	mySetting: 'default'
}

export class DrakonymSettingTab extends PluginSettingTab {
	plugin: DrakonymStatBlocks;

	constructor(app: App, plugin: DrakonymStatBlocks) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Settings #1')
			.setDesc('It\'s a secret')
			.addText(text => text
				.setPlaceholder('Enter your secret')
				.setValue(this.plugin.settings.mySetting)
				.onChange(async (value) => {
					this.plugin.settings.mySetting = value;
					await this.plugin.saveSettings();
				}));
	}
}
