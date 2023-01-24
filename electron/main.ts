import { join } from 'path';
import { BrowserWindow, app, ipcMain, shell } from 'electron';
import log from 'electron-log';

const isDevelopment = process.env.IS_DEV === 'true';

const createWindow = () => {
	const mainWindow = new BrowserWindow({
		width: 1440,
		height: 720,
		resizable: true,
		fullscreenable: true,
		webPreferences: {
			webSecurity: false,
			nodeIntegration: true,
			contextIsolation: true,
		},
	});

	mainWindow.loadURL(
		isDevelopment
			? 'http://localhost:3000'
			: `file://${join(__dirname, '../dist/index.html')}`
	);

	mainWindow.webContents.setWindowOpenHandler(({ url }) => {
		url.startsWith('https:') && shell.openExternal(url);

		return { action: 'deny' };
	});

	isDevelopment && mainWindow.webContents.openDevTools({ mode: 'detach' });
};

app.whenReady().then(() => {
	createWindow();

	ipcMain.on('initialize', (event) => {
		const platform = process.platform;

		event.sender.send('initialize', platform);
	});
});

app.on('window-all-closed', () => {
	app.quit();
});
