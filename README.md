# Technical Test - Reezocar (October 2022)

This repository contains the technical test completed for Reezocar in October 2022. The project demonstrates front-end development skills using modern build tools and best practices.

## 🛠 Technologies Used

- HTML5
- SCSS
- Gulp.js
- Browser-Sync
- PostCSS
- Image optimization

## 📂 Project Structure

```
.
├── src/
│   └── assets/
│       ├── scss/
│       └── img/
├── dist/
│   ├── css/
│   └── img/
├── gulpfile.js
└── index.html
```

## 🚀 Features

- SCSS compilation with source maps
- CSS optimization (autoprefixer & minification)
- Image optimization
- Live reload development server
- Asset watching and automatic rebuilding

## 🔧 Installation

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

## 📝 Available Commands

- **Development Mode**
```bash
gulp
```
This command will:
- Compile SCSS to CSS
- Add vendor prefixes
- Minify CSS
- Generate sourcemaps
- Optimize images
- Start a development server with live reload
- Watch for changes in files

## 💻 Development

The project uses Gulp.js as a build tool with the following tasks:

- `scssTask`: Compiles SCSS files, adds vendor prefixes, and minifies CSS
- `imgTask`: Optimizes images
- `watchTask`: Watches for changes and reloads the browser

### File Watching

The following files are watched for changes:
- SCSS files: `src/assets/scss/**/*.scss`
- Images: `src/assets/img/*.*`
- HTML templates: `*.html`

## 📦 Building for Production

The `dist` folder contains all the optimized assets ready for production:
- Minified and autoprefixed CSS in `dist/css`
- Optimized images in `dist/img`

## 🤝 Contributing

Feel free to submit issues and enhancement requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
