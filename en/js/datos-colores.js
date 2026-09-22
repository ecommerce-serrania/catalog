/* ==========================================================================
   FABRIC COLOR PALETTES

   The NAMES are the ones Serranía uses: they are what the client will use
   when ordering, so they must match the names used in production.

   The color CODES are approximations for on-screen display.
   Fine-tune them with Ana María by comparing against the actual fabric:
   change only the number starting with # and it updates across the site.

   To add a color: copy a line and edit it.
   ========================================================================== */

window.PALETAS = {

  /* Technical jackets — Aerofusion, Cyclone, Jetline, Skyflow, Ultra-Ice */
  "tecnica": {
    nota: "25 colors available in both shell and lining fabric.",
    colores: [
      ["Black",          "#111111"], ["White",           "#FFFFFF"],
      ["Red",            "#CE1126"], ["Burgundy",        "#6B1F2A"],
      ["Orange",         "#F26522"], ["Neon Orange",     "#FF6A13"],
      ["Yellow",         "#FDC500"], ["Neon Yellow",     "#DCE83A"],
      ["Beige",          "#D9C3A5"], ["Brown",           "#6B4226"],
      ["Heather Gray",   "#8A8A82"], ["Frost Gray",      "#C4CACC"],
      ["Pearl Gray",     "#DCDEDD"], ["Jade Green",      "#00A878"],
      ["Bottle Green",   "#0E4F35"], ["Pistachio Green", "#9BC96B"],
      ["Military Green", "#4A5A32"], ["Kelly Green",     "#2FA84F"],
      ["Aqua",           "#6FD8CF"], ["Midnight Blue",   "#10203F"],
      ["Cobalt Blue",    "#2E6FD9"], ["Sky Blue",        "#8FCBE8"],
      ["Pacific Blue",   "#0F6FA3"], ["Royal Blue",      "#0047BB"],
      ["Periwinkle",     "#7E8FD6"]
    ]
  },

  /* Business jacket — wool-blend suiting fabric */
  "business": {
    nota: "25 colors available in both shell and lining fabric.",
    colores: [
      ["Black",           "#111111"], ["Ivory",            "#F2EDE0"],
      ["Dark Brown",      "#4A2C1A"], ["Camel",            "#B98A52"],
      ["Light Camel",     "#D7B48C"], ["Cinnamon",         "#9C6238"],
      ["Toasted Caramel", "#A9683A"], ["Terracotta",       "#B5623C"],
      ["Natural Beige",   "#E2D5BE"], ["Mustard",          "#D99A2B"],
      ["Flag Red",        "#CE1126"], ["Burgundy",         "#6B1F2A"],
      ["Light Pink",      "#F2C2CE"], ["Dark Pink",        "#D4738C"],
      ["Fuchsia",         "#C4008F"], ["Light Purple",     "#B08BD1"],
      ["Mint Green",      "#A8D8C4"], ["Grass Green",      "#4A8B3B"],
      ["Military Green",  "#4A5A32"], ["Light Gray",       "#C9CCCE"],
      ["Medium Gray",     "#8A8F91"], ["Light Blue",       "#A9C9E8"],
      ["Medium Blue",     "#4E7FB5"], ["Dark Blue",        "#1F3A5F"],
      ["Navy",            "#14213D"]
    ]
  },

  /* Sporty jacket */
  "sporty": {
    nota: "13 colors available in both shell and lining fabric.",
    colores: [
      ["White",         "#FFFFFF"], ["Black",         "#111111"],
      ["Celtic Green",  "#2E7D6B"], ["Blood Red",     "#8E1B1B"],
      ["Medium Yellow", "#F5C518"], ["Light Yellow",  "#F7E07A"],
      ["Dark Green",    "#1D4B34"], ["Military Green","#4A5A32"],
      ["Light Gray",    "#C9CCCE"], ["Dark Gray",     "#4D4D4D"],
      ["Dark Blue",     "#1F3A5F"], ["Navy",          "#14213D"],
      ["Royal Blue",    "#0047BB"]
    ]
  },

  /* Fleece — Fleeceflex jacket and vest */
  "fleece": {
    nota: "8 colors in high-density fleece.",
    colores: [
      ["Black",        "#111111"], ["White",        "#FFFFFF"],
      ["Ivory",        "#F2EDE0"], ["Light Gray",   "#C9CCCE"],
      ["Beige",        "#D9C3A5"], ["Light Brown",  "#A87850"],
      ["Grass Green",  "#4A8B3B"], ["Navy",         "#1B2F6B"]
    ]
  },

  /* Softshell jacket */
  "softshell": {
    nota: "3 colors available in both shell and lining fabric.",
    colores: [
      ["Black",     "#111111"], ["White",       "#FFFFFF"],
      ["Dark Blue", "#1F3A5F"]
    ]
  },

  /* Sweatshirts — all five styles share one color card */
  "buzos": {
    nota: "13 colors. 50% cotton, 50% polyester. 210 gsm.",
    colores: [
      ["Black",            "#111111"], ["Natural White",   "#F5F1E8"],
      ["Midnight Blue",    "#10203F"], ["Sky Blue",        "#A9C9E8"],
      ["Light Turquoise",  "#8FD6D2"], ["Pine Green",      "#1F4D3A"],
      ["Red",              "#CE1126"], ["Burgundy",        "#6B2233"],
      ["Terracotta",       "#B5623C"], ["Sand Beige",      "#D9C3A5"],
      ["Dusty Rose",       "#E3B7B7"], ["Vanilla Yellow",  "#F2E3A8"],
      ["Pearl Gray",       "#DCDEDD"]
    ]
  },

  /* T-shirts and polos — the fastest-moving shades */
  "camisetas": {
    nota: "The fastest-moving shades in corporate apparel programs.",
    colores: [
      ["Black",        "#111111"], ["White",         "#FFFFFF"],
      ["Heather Gray", "#B7BBBD"], ["Navy",          "#14213D"],
      ["Royal Blue",   "#0047BB"], ["Sky Blue",      "#8FCBE8"],
      ["Red",          "#CE1126"], ["Burgundy",      "#6B1F2A"],
      ["Bottle Green", "#0E4F35"], ["Beige",         "#D9C3A5"]
    ]
  },

  /* Caps — corporate basics */
  "gorras": {
    nota: "The fastest-moving shades.",
    colores: [
      ["Black",          "#111111"], ["White",         "#FFFFFF"],
      ["Navy",           "#14213D"], ["Royal Blue",    "#0047BB"],
      ["Gray",           "#8A8F91"], ["Red",           "#CE1126"],
      ["Military Green", "#4A5A32"], ["Beige",         "#D9C3A5"]
    ]
  },

  /* Canvas shirt */
  "camisa": {
    nota: "4 base finishes. 100% cotton.",
    colores: [
      ["Light Blue",    "#8FB4D9"], ["White",        "#FFFFFF"],
      ["Black Stripes", "#3A3A3A"], ["Blue Stripes", "#2E4A7D"]
    ]
  },

  /* Sublimation: no fixed color card */
  "sublimacion": {
    nota: "No color limits. Sublimation lets you apply any palette, gradient or pattern across the entire garment.",
    colores: []
  }
};
