// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
	build: {
		html: `${buildFolder}/`,
		fonts: `${buildFolder}/fonts/`,
		css: `${buildFolder}/css/`,
		js: `${buildFolder}/js/`,
		images: `${buildFolder}/img/`,
		files: `${buildFolder}/files/`,
		json: `${buildFolder}/json/`,
		favicon: `${buildFolder}/`
	},
	src: {
		html: `${srcFolder}/*.html`,
		fonts: `${srcFolder}/fonts/`,
		scss: `${srcFolder}/scss/style.scss`,
		js: `${srcFolder}/js/app.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
		files: `${srcFolder}/files/**/*.*`,
		json: `${srcFolder}/json/**/*.json`,
		favicon: `${srcFolder}/*.ico`
	},
	watch: {
		html: `${srcFolder}/**/*.html`,
		scss: `${srcFolder}/scss/**/*.scss`, 
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico,svg}`,
		files: `${srcFolder}/files/**/*.*`,
		json: `${srcFolder}/json/**/*.json`,
		favicon: `${srcFolder}/*.ico`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: `nialko.ru`
}