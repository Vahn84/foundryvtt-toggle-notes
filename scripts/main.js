Hooks.on('theaterOfTheMindStarted', () => game.settings.set('core', 'notesDisplayToggle', false));
Hooks.on('theaterOfTheMindStopped', () => game.settings.set('core', 'notesDisplayToggle', true));
