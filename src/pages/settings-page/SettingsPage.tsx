import { MainSettings } from './components/blocks/main-settings/MainSettings';
import { SettingHero } from './components/blocks/settings-hero/SettingHero';

export const SettingsPage = () => {
    return (
        <div className="w-full">
            <SettingHero />

            <MainSettings />
        </div>
    );
};
