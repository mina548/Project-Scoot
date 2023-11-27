/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        "yellow-bg": "#FCB72B",
        "snow": "#F2F5F9",
        "darkblue": "#2F3B59;",
        'lightgrey': "#E5ECF4",
      },
      display: {
        'none': 'none',
      },
      textColor: {
        "p-color": "#C4C4C4",
        "yellow": "#FCB72B",
        "darknavy": "#495567",
        "dimgrey": "#939CAA",
        'lightgrey': "#E5ECF4",
        "snow": "#F2F5F9",
        "lightyellow": "#FFF4DF",
      },
      fill:{
        "yellow": "#FCB72B",
        "white": "#F2F5F9"
      },
      width: {
        "title-w": "500px",
        "subtitle-w": "405px",
        "card-sub-w": "350px",
        "section-title-w": "500px",
        "section-subtitle-w": "500px",
        "round-w": "96px",
        445: "445px",
        470: "470px",
        159: "159px",
        163: "163px",
        24: "24px",
        734: "734px",
        240: "240px",
        350: "350px",
        96: "96px",
        415: "415px",
        189: "189px"
      },
      height: {
        "round-h": "96px",
        "card-h": "391px",
        "section-h": "445px",
        445: "445px",
        396: "396px",
        284: "284px",
        62: "62px",
        28: "28px",
        "96-px": "96px",
        650: "650px",
        608: "608px",
        240: "240px",
        96: "96px",
        990: "1100px",
        "100vh": "100vh",
        200: "200px",
        128: "128px",
        1100: "1100px",
        550: "550px",
        88: "88px",
        


      },
      borderRadius: {
        50: "50%",
        4: "4px",
      },
      padding: {
        160: "160px",
      },
      fontFamily: {
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace']
      },
      lineHeight: {
        "mono-line": "56px",
        "deca-line": "25px",
      },
      inset: {
        "100": "701px", 
        "1400": "1400px",
        "1490": "1490px",
        "501": "501px" 
      },
      fontSize: {
        15: "15px"
      },
    },
  },
  plugins: [],
};
