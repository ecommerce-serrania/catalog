/* ==========================================================================
   SIZE CHARTS
   Source: PDF "TABLA DE MEDIDAS - CHAQUETAS" (current technical document).

   HOW TO EDIT A MEASUREMENT
   Find the garment, find the size, change the number. That's all.
   The values follow the same order as the columns listed above them.

   HOW TO ADD A SIZE
   Copy a whole line and change the letter and the numbers.

   "revisar: true" marks the charts where a value from the original PDF was
   corrected because it broke the progression. They are explained in the README.
   ========================================================================== */

window.TALLAS = {

  /* ===== JACKETS =====
     Data provided by Ana Libia. The guide image for each one goes in
     img/tallas/ named after the key. E.g. "cyclone-u" -> cyclone-u.jpg */

  "cyclone-u": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "S":[55,71,77], "M":[57.5,74,80.5], "L":[59,75.5,81.5], "XL":[61,78,83] }
  },
  "cyclone-m": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XS":[49,58.5,63], "S":[51,59.5,69], "M":[52.5,63,69.5] },
    revisar: true,
    aviso: "Size L is incomplete in the technical document: only the sleeve length (71 cm) is listed."
  },

  "aerofusion-u": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XXS":[52,67,60], "XS":[53.5,69,60], "S":[55.5,71,61], "M":[57.5,73.5,62],
             "L":[59.5,76,63], "XL":[61.5,77,64], "2XL":[63,78,64.5] }
  },
  "aerofusion-m": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XS":[50,56.5,70], "S":[51.5,58.5,70], "M":[53,62,71], "L":[55.5,64.5,72], "XL":[58,66.5,74.5] }
  },

  "business-h": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XS":[52.5,66,60], "S":[54.5,67.5,61.5], "M":[56.5,68.5,63],
             "L":[58.5,70,64.5], "XL":[60.5,71.5,67], "2XL":[62.5,74.5,67.5] }
  },
  "business-m": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XS":[46,59,59], "S":[48,60.5,60], "M":[50,62,61],
             "L":[53,63.5,62], "XL":[57,65,63], "2XL":[61,66.5,63] }
  },

  "sporty-u": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XXS":[53,61.5,60], "XS":[54,62.5,60.5], "S":[56,63.5,61], "M":[57,65,62],
             "L":[60.5,65.5,62], "XL":[63,66.5,63], "2XL":[64,67.5,64] }
  },
  "sporty-m": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "S":[52,59.5,59], "M":[53.5,61.5,60], "L":[57,63,60.5], "XL":[59.5,65.5,61.5] }
  },

  "jetline-u": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XS":[57,63,61], "S":[59.5,65,64], "M":[61,66,65], "L":[61.5,69,65.5], "XL":[64,70,66.5] }
  },
  "jetline-m": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XS":[57,63,61], "S":[59.5,65,64], "M":[61,66,65], "L":[61.5,69,65.5], "XL":[64,70,66.5] },
    revisar: true,
    aviso: "Same measurements as the unisex chart in the technical document. Confirm with production."
  },

  "softshell-u": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XS":[53,65.5,59.5], "S":[54,66.5,67.5], "M":[56.5,67.5,62.5], "L":[58.5,69.5,65], "XL":[60,71,67] },
    revisar: true,
    aviso: "The sleeve length for size S (67.5 cm) breaks the progression. Verify with production."
  },
  "softshell-m": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XS":[48,60,58.5], "S":[49.5,61.5,59.5], "M":[51,62.5,60.5], "L":[52,64,61.5], "XL":[53,65,62.5] }
  },

  "ultraice-u": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "S":[54,62,62], "M":[56,65,63], "L":[58,66,63], "XL":[61,69,66] }
  },

  "fleeceflex-u": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "S":[54,62,62], "M":[56,65,63], "L":[58,66,63], "XL":[61,69,66] }
  },
  "fleeceflex-m": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "S":[54,62,62], "M":[56,65,63], "L":[58,66,63], "XL":[61,69,66] },
    revisar: true,
    aviso: "Same measurements as the unisex chart in the technical document. Confirm with production."
  },

  /* ===== VESTS ===== */

  "skyflow-u": {
    columnas: ["Chest width", "Body length"],
    filas: { "S":[54,62], "M":[56.5,64.5], "L":[59,66.5], "XL":[61,69] }
  },

  "chaleco-fleece-u": {
    columnas: ["Chest width", "Body length"],
    filas: { "S":[54,62], "M":[56,65], "L":[58,66], "XL":[61,69] },
    revisar: true,
    aviso: "In the technical document this garment appears with two different charts, and one of them includes a sleeve length, which does not apply to a vest. Verify with production."
  },

  /* ===== SWEATSHIRTS ===== */

  "buzo-basico-u": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XS":[49.5,63,57.5], "S":[50,67,57.5], "M":[53.5,69.5,57.5], "L":[58,71,57.5], "XL":[63,76,58.5] }
  },

  "buzo-capota-u": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XS":[49,65,57.5], "S":[50,67,57.5], "M":[53.5,69,57.5], "L":[58,71,57.5], "XL":[63,76,58.5] }
  },

  "buzo-abierto-capota-h": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "S":[48,65.5,61], "M":[52,70.5,62], "L":[59,73,62], "XL":[63.5,76.5,62] }
  },
  "buzo-abierto-capota-m": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XS":[49,53,59.5], "S":[50,59,60], "M":[52.5,59,60], "L":[56,64,60], "XL":[57,65,60] }
  },

  "buzo-abierto-sincapota-h": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XS":[48.5,65,60], "S":[50,65,60.5], "M":[54.5,69.5,61],
             "L":[59.5,71.5,61], "XL":[64.5,76.5,61.5], "2XL":[67,78.5,62.5] }
  },
  "buzo-abierto-sincapota-m": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XS":[49,53,59.5], "S":[50,59,60], "M":[52.5,59,60], "L":[56,64,60], "XL":[57,65,60] },
    revisar: true,
    aviso: "In the technical document this chart is labeled as men's. Confirm with production."
  },

  "buzo-cuelloalto-h": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "S":[51,68.5,61], "M":[54.5,70,61], "L":[59.5,73,61], "XL":[65.5,79,61.5] }
  },
  "buzo-cuelloalto-m": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "XS":[48,59,60], "S":[50.5,60,60.5], "M":[51.5,61.5,61], "L":[55,63,62], "XL":[57.5,65,62.5] }
  },

  /* ===== T-SHIRTS AND POLOS ===== */

  "polo-h": {
    columnas: ["Chest width", "Body length"],
    filas: { "S":[50,69], "M":[52,72], "L":[54,75], "XL":[56,78], "2XL":[59,81] },
    revisar: true
  },
  "polo-m": {
    columnas: ["Chest width", "Body length"],
    filas: { "S":[43,70], "M":[45,73], "L":[47,76], "XL":[49,79] },
    revisar: true
  },

  /* ===== SHIRTS ===== */

  "camisa-h": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "S":[44,68,58], "M":[45.5,70,59.5], "L":[47,72,61], "XL":[49,73.5,62.5] }
  },
  "camisa-m": {
    columnas: ["Chest width", "Body length", "Sleeve length"],
    filas: { "S":[45.5,59,58], "M":[47.5,60.5,58.5], "L":[50.5,63,60], "XL":[53.5,65.5,62] }
  },

  /* ===== PANTS (in the technical document, not in the catalog yet) ===== */

  "pantalon-h": {
    columnas: ["Waist circumference", "Hip circumference", "Body length"],
    filas: { "XS":[48,66,60], "S":[49,69,60], "M":[54,70,61], "L":[56.5,70,61], "XL":[65.5,77,61] }
  },
  "pantalon-m": {
    columnas: ["Waist circumference", "Hip circumference", "Body length"],
    filas: { "4":[31,40,100], "6":[32,41,101], "8":[35,42,101], "10":[36,43.5,101],
             "12":[38,44,102], "14":[39.5,46.5,106], "16":[42,49,106],
             "18":[43,51,107], "20":[44,52,108], "22":[45,53,109] }
  },

  /* ===== FLUID-RESISTANT UNIFORM (in the technical document) ===== */

  "uniforme-camiseta-h": {
    columnas: ["Chest width", "Body length"],
    filas: { "S":[55.5,65], "M":[58.5,67.5], "L":[60.5,69], "XL":[62.5,70] }
  },
  "uniforme-pantalon-h": {
    columnas: ["Hip circumference", "Body length"],
    filas: { "S":[48,109], "M":[53,110], "L":[54,110.5], "XL":[55.5,113] }
  }
};


/* Instructions shown below each chart */
window.TALLAS_INSTRUCCIONES = [
  "Start with a garment you already find comfortable.",
  "Lay it out flat and completely smooth on a level surface.",
  "Using a tape measure, take the measurements shown in the diagram.",
  "Find your size on the measurement chart."
];

window.TALLAS_NOTA = "Measurements are listed in inches and centimeters and may vary by up to ±0.8 in (2 cm).";
