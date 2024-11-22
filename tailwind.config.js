/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage:{
        'Europa1': "url('./public/img/Europa1')",
        'Europa2': "url('./public/img/Europa2.jpg')",
        'AromaenTarde': "url('./public/img/AromaenTarde.jpg')",
        'AtardecerFlores': "url('./public/img/AtardecerFlores.jpg')",
        'AtardecerMontañas': "url('./public/img/AtardecerMontañas.jpg')",
        'DiaCarretera': "url('./public/img/DiaCarretera.jpg')",
        'DiaLluvioso': "url('./public/img/DiaLluvioso.jpg')",
        'Flores': "url('./public/img/Flores.jpg')",
        'FloresLago': "url('./public/img/FloresLago.jpg')",
        'MarDebajodeRocas': "url('./public/img/MarDebajodeRocas.jpg')",
        'Montañas': "url('./public/img/Montañas.jpg')",
        'Montañas2': "url('./public/img/Montañas2.jpg')",
        'RioVioleta': "url('./public/img/RioVioleta.jpg')",
        'TardeDescanso': "url('./public/img/TardeDescanso.jpg')",
      },
      backgroundColor: theme => ({
        ...theme('color'),
        'primary': '#CC2D4A',
        'secondary':'#8FA206',
        'terciary': '#61Aec9'
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary':'#8FA206',
        'terciary': '#61Aec9'
      },
      fontFamily:{
        Montserrat: ['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}



    //"tw: build" : "tailwind -i ./src/css/tailwind.css -o ./public/css/tailwind.css"  correccion de package.json
