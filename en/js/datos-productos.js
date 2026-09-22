/* ==========================================================================
   PRODUCT CATALOG

   TO ADD A NEW PRODUCT:
   1. Copy a whole block (from { through },)
   2. Paste it at the end, before the closing bracket ]
   3. Change the values
   4. Upload the 3 photos to img/productos/ named after the "id"
      Example: id "cyclone"  ->  cyclone-1.webp, cyclone-2.webp, cyclone-3.webp

   FIELDS
   id .............. short name, no accents or spaces. Drives the photos and the link.
   nombre .......... how it appears on screen
   categoria ....... chaquetas | chalecos | buzos | camisetas | camisas | accesorios | maletas
   resumen ......... one line, 20 words max. Shows on the card and in Google.
                     Focus on what the customer cares about, not on the spec sheet.
                     Good: "Our best-selling jacket. A great balance of cost and performance."
                     Bad:  "Windbreaker with built-in hood and contrast paneling."
   claves .......... 3 or 4 features. They appear as bullets on the product page.
                     The first one should be what can be customized.
                     E.g.: "Customizable jacket color, lining and zipper"
   tela ............ composition and weight. Leave "" if not applicable.
   colores ......... palette name in datos-colores.js
   tallas .......... { hombre:"key", mujer:"key", unisex:"key" } from datos-tallas.js
                     Leave {} if the product has no size chart.
   tecnicas ........ bordado | sublimacion | dtf | vinilo | vinilo-gamuzado | serigrafia | laser
   minimo .......... minimum units
   usos ............ filter tags: formal | casual | deportivo | frio | impermeable | exterior
   destacado ....... true to feature it on the home page
   ========================================================================== */

window.PRODUCTOS = [

/* ========================= JACKETS ========================= */
{
  id: "cyclone",
  nombre: "Cyclone Jacket",
  categoria: "chaquetas",
  resumen: "Our best-selling jacket. The best balance of price and performance.",
  claves: ["You pick the shell, lining and zipper colors", "Built-in hood that won't get lost or detached", "Zippered pockets inside and out", "Adjustable cuffs that keep the wind out"],
  detalle: "This is the jacket we reorder most every year, and for good reason: it blocks wind and light rain without getting heavy, and it looks just as good over a dress shirt as over a tee. Customizing on three levels (shell, lining and zipper) means two companies can order the same style and neither one will look like the other.",
  tela: "",
  colores: "tecnica",
  tallas: { unisex: "cyclone-u", mujer: "cyclone-m" },
  tecnicas: ["bordado", "vinilo", "dtf"],
  minimo: 50,
  usos: ["exterior", "impermeable", "casual"],
  destacado: true
},
{
  id: "aerofusion",
  nombre: "Aerofusion Jacket",
  categoria: "chaquetas",
  resumen: "Looks sharp over a dress shirt and holds up all day without getting in the way.",
  claves: ["You pick the shell, lining and accent line colors", "High collar that keeps you warm without a scarf", "Cut that lets you move your arms freely", "Pockets inside and out"],
  detalle: "We designed it for teams that move between the desk and the street several times a day. The silhouette is clean and trim, at home in a meeting and tough enough for the day's wear and tear. The diagonal design lines can be ordered in a different color, and that one detail is enough to make the piece read as uniquely yours.",
  tela: "",
  colores: "tecnica",
  tallas: { unisex: "aerofusion-u", mujer: "aerofusion-m" },
  tecnicas: ["bordado", "vinilo", "dtf"],
  minimo: 50,
  usos: ["formal", "casual"],
  destacado: true
},
{
  id: "business",
  nombre: "Business Jacket",
  categoria: "chaquetas",
  resumen: "The dressiest piece in the catalog. Replaces a blazer without losing formality.",
  claves: ["You pick the shell and lining colors", "Your logo laser-etched: it never peels or fades", "High collar, no lapels, looks formal without a tie", "Discreet pockets and adjustable cuffs"],
  detalle: "For leadership teams, client-facing roles, or events where first impressions count. The wool-look fabric gives it drape and body, a world away from the sporty look of an ordinary jacket. Laser etching sets the mark into the fabric instead of on top of it, and that finish is what makes the piece look expensive.",
  tela: "",
  colores: "business",
  tallas: { hombre: "business-h", mujer: "business-m" },
  tecnicas: ["laser", "bordado"],
  minimo: 50,
  usos: ["formal"],
  destacado: true
},
{
  id: "sporty",
  nombre: "Sporty Jacket",
  categoria: "chaquetas",
  resumen: "Genuinely comfortable. The one your team ends up wearing off the clock too.",
  claves: ["You pick the shell, paneling and zipper colors", "High collar that blocks the morning chill", "Contrast panels that break up the block and slim the line", "Zippered side pockets so nothing falls out"],
  detalle: "This is the piece companies ask us to reorder most when they want their gear actually worn instead of stashed in a drawer. Lightweight, soft on the inside, and cut to flatter any build. It works just as well on the floor as in the office, and it's the one we see out on a Saturday most often, which to us is the best sign a piece came out right.",
  tela: "",
  colores: "sporty",
  tallas: { unisex: "sporty-u", mujer: "sporty-m" },
  tecnicas: ["bordado", "vinilo", "dtf", "serigrafia"],
  minimo: 50,
  usos: ["deportivo", "casual"],
  destacado: false
},
{
  id: "ultra-ice",
  nombre: "Ultra-Ice Jacket",
  categoria: "chaquetas",
  resumen: "For teams working in real cold: cold storage, night shifts, high altitude.",
  claves: ["You pick the shell, lining and zipper colors", "Thermal fill that insulates without stiffening up", "Built-in hood", "Elastic cuffs and hem that seal the warmth in"],
  detalle: "When cold isn't a detail but a working condition, this is the answer. The fill holds body heat without forcing three layers underneath, and the elastic cuffs and hem keep air from getting in at the openings, which is where heat is actually lost. Built for full shifts outdoors.",
  tela: "",
  colores: "tecnica",
  tallas: { unisex: "ultraice-u" },
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["frio", "exterior"],
  destacado: true
},
{
  id: "fleeceflex",
  nombre: "Fleeceflex Jacket",
  categoria: "chaquetas",
  resumen: "Warm without the bulk. Wear it on its own or under a jacket when it gets cold.",
  claves: ["You pick the fleece color", "Dense fleece that holds in body heat", "Zippered chest and side pockets", "Embroidery stays crisp wash after wash"],
  detalle: "It's the most versatile piece in the catalog: on its own in an air-conditioned office, or as a mid layer when the cold sets in. Thin enough not to bunch under another jacket, dense enough to be warmer than it looks. We recommend it with embroidery because fleece takes thread beautifully and the result lasts for years.",
  tela: "High-density fleece",
  colores: "fleece",
  tallas: { unisex: "fleeceflex-u", mujer: "fleeceflex-m" },
  tecnicas: ["bordado"],
  minimo: 50,
  usos: ["frio", "casual"],
  destacado: false
},
{
  id: "jetline",
  nombre: "Jetline Jacket",
  categoria: "chaquetas",
  resumen: "Street style people wear on weekends. Youthful without losing polish.",
  claves: ["You pick the shell, lining and stripe colors", "Lightweight thermal lining: warm without feeling heavy", "Liquid-repellent fabric that wipes clean", "Ribbed knit collar, cuffs and hem"],
  detalle: "We get a lot of orders for company anniversaries and launches, because it reads more like a collection jacket than like company gear. The stripes on the collar, cuffs and hem can be ordered in your brand colors, and that detail makes it unmistakable. Plenty warm without the bulk of a puffer.",
  tela: "",
  colores: "tecnica",
  tallas: { unisex: "jetline-u", mujer: "jetline-m" },
  tecnicas: ["bordado", "vinilo", "dtf"],
  minimo: 50,
  usos: ["casual", "frio"],
  destacado: false
},
{
  id: "softshell",
  nombre: "Softshell Jacket",
  categoria: "chaquetas",
  resumen: "Genuinely water-resistant and windproof. Holds up to a full day outdoors.",
  claves: ["You pick the shell and lining colors", "Repels water and blocks wind", "Soft, warm interior, no extra layer needed", "High collar and zippers built for daily use"],
  detalle: "It's the most technical piece in the catalog and the one we pick when a client tells us their team works outside rain or shine. The fabric has three layers: it repels water on the outside, blocks wind in the middle, and insulates on the inside. That lets one garment do the job that would normally take two.",
  tela: "",
  colores: "softshell",
  tallas: { unisex: "softshell-u", mujer: "softshell-m" },
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["impermeable", "exterior", "formal"],
  destacado: true
},

/* ========================= VESTS ========================= */
{
  id: "skyflow",
  nombre: "Skyflow Vest",
  categoria: "chalecos",
  resumen: "Warms the core and frees up the arms. Ideal for people on the move all day.",
  claves: ["You pick the shell, lining and zipper colors", "Light fill that insulates without limiting movement", "High collar that protects the chest and neck", "Zippered side pockets"],
  detalle: "A vest solves a specific problem: people who lift, drive or handle tools all day need warmth through the torso but freedom in the arms. This one keeps the heat where it matters and layers over a dress shirt, over a sweatshirt, or under a jacket when the weather turns.",
  tela: "",
  colores: "tecnica",
  tallas: { unisex: "skyflow-u" },
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["frio", "casual"],
  destacado: false
},
{
  id: "chaleco-fleece-flex",
  nombre: "Fleece Flex Vest",
  categoria: "chalecos",
  resumen: "The extra layer that never gets in the way. Looks crisp over a shirt in customer-facing roles.",
  claves: ["You pick the fleece color", "Three zippered pockets: two at the sides and one on the chest", "Dense fleece, soft to the touch", "Holds in warmth without limiting movement"],
  detalle: "Designed for people working with the public in air-conditioned spaces, or field teams who need light warmth. Over a dress shirt it looks tidy and professional, never sporty. The vertical chest pocket is the practical touch most appreciated by anyone carrying a phone or badge all day.",
  tela: "High-density fleece",
  colores: "fleece",
  tallas: { unisex: "chaleco-fleece-u" },
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["frio", "formal"],
  destacado: false
},

/* ========================= SWEATSHIRTS ========================= */
{
  id: "buzo-basico",
  nombre: "Basic Sweatshirt",
  categoria: "buzos",
  resumen: "The biggest canvas for your brand. Our top pick for events and campaigns.",
  claves: ["You pick the garment color and the print color", "Generous print area on the chest and back", "Classic crew neck, no zippers or drawcords", "13 colors available"],
  detalle: "When the goal is for the brand to be seen from across the room, this is the format. With no hood or zipper interrupting it, the front and back are completely open for a large design. It's also the most affordable piece in the catalog, which makes it the natural choice for mass giveaways at campaigns and events.",
  tela: "50% cotton, 50% polyester. 210 gsm.",
  colores: "buzos",
  tallas: { unisex: "buzo-basico-u" },
  tecnicas: ["dtf", "serigrafia", "bordado", "vinilo"],
  minimo: 50,
  usos: ["casual"],
  destacado: true
},
{
  id: "buzo-capota",
  nombre: "Hooded Sweatshirt",
  categoria: "buzos",
  resumen: "The favorite of younger teams. They wear it home.",
  claves: ["You pick the garment, drawcord and print colors", "Hood with adjustable drawcord", "Kangaroo pocket in front", "Can be branded on the chest, back and sleeve"],
  detalle: "This is the piece that best measures whether your gear was well chosen: if the team wears it outside of work, you got it right. Comfortable, warm, and with that relaxed look people are after. The hood drawcord can be ordered in your brand color, a small detail that gets noticed.",
  tela: "50% cotton, 50% polyester. 210 gsm.",
  colores: "buzos",
  tallas: { unisex: "buzo-capota-u" },
  tecnicas: ["dtf", "serigrafia", "bordado", "vinilo"],
  minimo: 50,
  usos: ["casual"],
  destacado: true
},
{
  id: "buzo-abierto-capota",
  nombre: "Full-Zip Hooded Sweatshirt",
  categoria: "buzos",
  resumen: "Easy on and off over a uniform. Comfortable on long shifts.",
  claves: ["You pick the garment, drawcord and zipper colors", "Full-length zipper", "Hood with adjustable drawcord", "Front pockets"],
  detalle: "The advantage over a pullover is practical: it goes on and off without messing up your hair or taking off your badge, and you can regulate your temperature through the day by opening or closing it. For long shifts where the temperature shifts, it's the most comfortable option.",
  tela: "50% cotton, 50% polyester. 210 gsm.",
  colores: "buzos",
  tallas: { hombre: "buzo-abierto-capota-h", mujer: "buzo-abierto-capota-m" },
  tecnicas: ["dtf", "serigrafia", "bordado", "vinilo"],
  minimo: 50,
  usos: ["casual"],
  destacado: false
},
{
  id: "buzo-abierto-sin-capota",
  nombre: "Full-Zip Sweatshirt",
  categoria: "buzos",
  resumen: "A clean line that pairs with a dress shirt. Business casual without looking sloppy.",
  claves: ["You pick the garment and zipper colors", "Full-length zipper", "High collar, no hood", "Front pockets"],
  detalle: "For companies that want the comfort of a sweatshirt without the youthful look of a hood. Over a dress shirt it reads as tidy, and it's one of the few pieces of its kind that works in a client meeting. A good middle ground when the dress code isn't formal but isn't wide open either.",
  tela: "50% cotton, 50% polyester. 210 gsm.",
  colores: "buzos",
  tallas: { hombre: "buzo-abierto-sincapota-h", mujer: "buzo-abierto-sincapota-m" },
  tecnicas: ["dtf", "serigrafia", "bordado", "vinilo"],
  minimo: 50,
  usos: ["casual", "formal"],
  destacado: false
},
{
  id: "buzo-cuello-alto",
  nombre: "High-Neck Sweatshirt",
  categoria: "buzos",
  resumen: "The middle ground between a casual sweatshirt and an executive piece. Understated and warm.",
  claves: ["You pick the garment and zipper colors", "Short neck zipper that opens only to the chest", "High collar you can wear up or folded down", "Ideal for a small chest embroidery"],
  detalle: "This piece solves the case of a team that needs something warm but can't look sporty. The short zipper gives it a polished feel and the high collar can be worn two ways depending on the occasion. With a discreet chest embroidery it passes easily as an executive piece.",
  tela: "50% cotton, 50% polyester. 210 gsm.",
  colores: "buzos",
  tallas: { hombre: "buzo-cuelloalto-h", mujer: "buzo-cuelloalto-m" },
  tecnicas: ["bordado", "dtf", "vinilo"],
  minimo: 50,
  usos: ["formal", "casual"],
  destacado: true
},

/* ========================= T-SHIRTS AND POLOS ========================= */
{
  id: "camiseta-cuello-redondo",
  nombre: "Crewneck T-shirt",
  categoria: "camisetas",
  resumen: "The foundation of any company wardrobe. Cotton that survives washing without losing shape.",
  claves: ["You pick the garment color and the print color", "100% cotton, cool in warm weather", "Collar that won't stretch out with wear", "Can be branded on the chest, back and sleeve"],
  detalle: "It's the piece we make the most of and the one that demands the most consistency: a tee that loses its shape by the third wash ruins the impression of the whole program. That's exactly why we use a good-weight cotton and a reinforced collar. It works for everything: events, daily wear, campaigns, mass giveaways.",
  tela: "100% cotton. 150 gsm.",
  colores: "camisetas",
  tallas: {},
  tecnicas: ["dtf", "serigrafia", "bordado", "vinilo"],
  minimo: 50,
  usos: ["casual"],
  destacado: true
},
{
  id: "camiseta-sublimada",
  nombre: "Sublimated T-shirt",
  categoria: "camisetas",
  resumen: "When the design is everything. Your brand across the whole garment, with no color limits.",
  claves: ["Full-color design across the entire garment", "No limit on shades or gradients", "The design won't crack or peel: it lives inside the fabric", "Lightweight, quick-drying fabric"],
  detalle: "Here the garment stops being a backdrop for the logo and becomes the design itself. The ink bonds with the fiber, so there's no layer on top that can crack or peel with wear. It's the option for sports teams, corporate races, and anything that needs to be seen from a distance.",
  tela: "100% polyester",
  colores: "sublimacion",
  tallas: {},
  tecnicas: ["sublimacion"],
  minimo: 50,
  usos: ["deportivo", "casual"],
  destacado: false
},
{
  id: "camiseta-polo",
  nombre: "Polo Shirt",
  categoria: "camisetas",
  resumen: "Professional without a tie. The customer-facing piece, hands down.",
  claves: ["You pick the garment, collar and button colors", "Knit collar that holds its shape", "Breathable fabric, comfortable all day", "Chest embroidery gives it an executive finish"],
  detalle: "It sits exactly between a tee and a dress shirt: formal enough to meet a client, comfortable enough for eight hours on your feet. The collar is what wears out first on a cheap polo, so we knit ours separately to keep its shape. With a small chest embroidery it looks impeccable.",
  tela: "50% cotton, 50% polyester. 210 gsm.",
  colores: "camisetas",
  tallas: { hombre: "polo-h", mujer: "polo-m" },
  tecnicas: ["bordado", "dtf", "vinilo"],
  minimo: 50,
  usos: ["formal", "casual"],
  destacado: true
},
{
  id: "polo-sublimada",
  nombre: "Sublimated Polo Shirt",
  categoria: "camisetas",
  resumen: "For sports teams and events. Maximum visibility with no design limits.",
  claves: ["Full-color design across the entire garment", "No limit on palette or patterns", "Classic polo collar", "Lightweight, quick-drying fabric"],
  detalle: "It combines the polish of a polo collar with the complete freedom of sublimation. It's used mostly by corporate tournament teams and brands sponsoring events, where the design needs to read whole and from a distance without giving up a clean cut.",
  tela: "100% polyester",
  colores: "sublimacion",
  tallas: {},
  tecnicas: ["sublimacion"],
  minimo: 50,
  usos: ["deportivo", "casual"],
  destacado: false
},

/* ========================= SHIRTS ========================= */
{
  id: "camisa-canvas",
  nombre: "Canvas Shirt",
  categoria: "camisas",
  resumen: "Formal but breathable. Still looks sharp after an eight-hour day.",
  claves: ["You pick the color, the design and the branding method", "100% cotton, cool all day long", "Long or short sleeve, depending on the climate", "Structured cut that resists wrinkling"],
  detalle: "For sales teams, front desk and leadership: it's the most formal piece in the catalog and the one that best survives a full day without looking worn out. The cotton lets skin breathe, which you appreciate in warm weather, and the structured cut keeps a clean line even after a day at a desk.",
  tela: "100% cotton",
  colores: "camisa",
  tallas: { hombre: "camisa-h", mujer: "camisa-m" },
  tecnicas: ["bordado", "sublimacion"],
  minimo: 50,
  usos: ["formal"],
  destacado: true
},

/* ========================= ACCESSORIES ========================= */
{
  id: "panoleta-satin",
  nombre: "Satin Scarf",
  categoria: "accesorios",
  resumen: "The detail that elevates a customer-facing uniform. A design made only for your brand.",
  claves: ["Full-color design, exclusive to your company", "Soft texture with a subtle sheen", "Three sizes available", "Wear it at the neck, in the hair or on a bag"],
  detalle: "This is the accessory that turns a correct uniform into a memorable one. It's ordered mostly by hotels, airlines and service companies where how the staff presents is part of the customer experience. Because the design is exclusive, no one else will have that scarf.",
  tela: "Satin",
  colores: "sublimacion",
  tallas: {},
  medidas: [["Small", "45 × 45 cm"], ["Medium", "70 × 70 cm"], ["Large", "85 × 85 cm"]],
  tecnicas: ["sublimacion"],
  minimo: 200,
  usos: ["formal"],
  destacado: false
},
{
  id: "sombrero-panamericano",
  nombre: "Panama-style Hat",
  categoria: "accesorios",
  resumen: "For outdoor events and activations. Real sun protection that photographs well.",
  claves: ["Custom band with your brand woven in", "Natural fiber, hand-braided", "Real sun protection, not decorative", "Colombian artisan craftsmanship"],
  detalle: "It works on two fronts: it genuinely protects through a day in the sun and it looks great in the event photos. The band is woven with your brand name or symbol in repeat, a considerably finer finish than stamping a logo on top.",
  tela: "Natural fiber",
  colores: "",
  tallas: {},
  tecnicas: ["bordado"],
  minimo: 50,
  usos: ["exterior", "casual"],
  destacado: false
},
{
  id: "gorra-impermeable",
  nombre: "Water-Resistant Cap",
  categoria: "accesorios",
  resumen: "Repels water without losing its shape. For teams working outdoors.",
  claves: ["You pick the color and the branding method", "The fabric repels water instead of soaking it up", "Mesh lining that lets the head breathe", "Velcro closure, adjusts to any size"],
  detalle: "The difference from an ordinary cap shows up on the first rainy day: this one doesn't soak through or lose the shape of the front panel. The mesh lining keeps heat from building up, which is the real reason people take a cap off halfway through the day.",
  tela: "100% polyester",
  colores: "gorras",
  tallas: {},
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["exterior", "impermeable"],
  destacado: false
},
{
  id: "gorra-malla-fina",
  nombre: "Fine Mesh Cap",
  categoria: "accesorios",
  resumen: "Light and ventilated. The most comfortable for daily wear in warm weather.",
  claves: ["You pick the color and the branding method", "Mesh that lets air through", "Adjustable snap closure", "Very light, you barely feel it"],
  detalle: "For hot climates this is the one we recommend without hesitation. The mesh lets air circulate and prevents the trapped heat that makes a closed cap unbearable. Light, comfortable, and with plenty of room up front for embroidery.",
  tela: "100% polyester",
  colores: "gorras",
  tallas: {},
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["casual", "exterior"],
  destacado: false
},
{
  id: "gorra-malla-unicolor",
  nombre: "Solid Mesh Cap",
  categoria: "accesorios",
  resumen: "Firm front panel: the best base for a large raised logo.",
  claves: ["You pick the color and the branding method", "Internal structure that keeps the front panel upright", "Top button covered in the same fabric", "Adjustable closure"],
  detalle: "When the logo is the main event, this is the cap. The internal backing keeps the front panel straight and wrinkle-free, which is what a large embroidery or a raised applique needs to look right. On a soft cap, that same logo warps.",
  tela: "100% polyester",
  colores: "gorras",
  tallas: {},
  tecnicas: ["bordado", "vinilo", "dtf"],
  minimo: 50,
  usos: ["casual", "exterior"],
  destacado: false
},
{
  id: "gorra-flex-hebilla",
  nombre: "Flex Buckle Cap",
  categoria: "accesorios",
  resumen: "Premium finish with a metal closure. The cap for clients and executive gifts.",
  claves: ["You pick the color and the branding method", "Sturdy metal closure, not plastic", "Internal structure that holds its shape", "Careful finishing on every seam"],
  detalle: "It's what we pick when the cap isn't company gear but a gift. The metal closure and the finishing set it apart from an ordinary promo cap, and you can feel the difference in your hand before you even put it on. For clients, partners and internal recognition.",
  tela: "100% polyester",
  colores: "gorras",
  tallas: {},
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["casual", "formal"],
  destacado: false
},

/* ========================= BACKPACKS ========================= */
{
  id: "maleta-elegance",
  nombre: "Elegance Backpack",
  categoria: "maletas",
  resumen: "A portfolio for the sales team. Protects the laptop and looks right in a meeting.",
  claves: ["Customizable label and interior lining", "Padded laptop compartment", "Lined interior organizer for cables and documents", "Quick side access, no need to open the whole bag"],
  detalle: "Made for people who visit clients: you walk into a meeting and the bag supports the impression instead of undercutting it. The padding protects the laptop from real impacts and the interior organizer keeps cables from turning into a tangle. The lining can be customized, so the brand shows up when you open it too.",
  tela: "",
  colores: "",
  tallas: {},
  tecnicas: ["bordado", "dtf"],
  minimo: 50,
  usos: ["formal"],
  destacado: false
},
{
  id: "maleta-dynamix",
  nombre: "Dynamix Backpack",
  categoria: "maletas",
  resumen: "Light and affordable. The pick when you're handing out to a lot of people at an event.",
  claves: ["Generous branding area on the front", "Drawstring closure, cinches with a pull", "Zippered side pocket", "Folds down to practically nothing"],
  detalle: "When you have to hand out hundreds of units without blowing the budget, this is the answer. It's light, it packs flat for shipping, and it has a big front surface where the brand reads in full. Widely used at conferences, trade shows and sports days.",
  tela: "",
  colores: "",
  tallas: {},
  tecnicas: ["dtf", "serigrafia", "vinilo"],
  minimo: 50,
  usos: ["deportivo", "casual"],
  destacado: false
},
{
  id: "maleta-rover",
  nombre: "Rover Backpack",
  categoria: "maletas",
  resumen: "The versatile daypack for large rollouts. Plenty of surface for your logo.",
  claves: ["You pick the color and the branding method", "Two roomy compartments", "Padded straps, comfortable to carry", "Zippered front pocket"],
  detalle: "It's the all-purpose daypack: good for work, for school and for the weekend, and that versatility is what gets it actually used instead of stored away. The padded straps make a real difference when it's carried every day.",
  tela: "",
  colores: "",
  tallas: {},
  tecnicas: ["bordado", "dtf", "serigrafia"],
  minimo: 50,
  usos: ["casual"],
  destacado: false
},
{
  id: "maleta-office-pro",
  nombre: "Office Pro Backpack",
  categoria: "maletas",
  resumen: "An executive backpack for people carrying a laptop every day.",
  claves: ["You pick the color and the branding method", "Padded laptop compartment", "Padded back panel that spreads the load", "Interior organizer for cables and accessories"],
  detalle: "For teams that move around with a laptop on their back every day. The padded back panel spreads the weight and prevents the sore shoulders you'd otherwise have by the end of the day, which matters more than it sounds. Understated finish, ready to walk into a client's office.",
  tela: "",
  colores: "",
  tallas: {},
  tecnicas: ["bordado", "dtf"],
  minimo: 50,
  usos: ["formal"],
  destacado: false
},
{
  id: "maleta-navigator",
  nombre: "Navigator Backpack",
  categoria: "maletas",
  resumen: "Large capacity for long days and field work.",
  claves: ["You pick the color and the branding method", "Chest and waist straps that stabilize the load", "Several external pockets for quick access", "Fabric built for rough use"],
  detalle: "The largest capacity in the catalog, built for field work, technical visits and days away from the office. The chest and waist straps keep the weight off your shoulders and spread it across your body, which is what makes it wearable for hours without discomfort.",
  tela: "",
  colores: "",
  tallas: {},
  tecnicas: ["bordado", "dtf"],
  minimo: 50,
  usos: ["exterior", "deportivo"],
  destacado: false
}

];


/* ==========================================================================
   CATEGORIES — they control the menu and the order it appears in
   ========================================================================== */
window.CATEGORIAS = [
  { id: "chaquetas",  nombre: "Jackets"     },
  { id: "chalecos",   nombre: "Vests"       },
  { id: "buzos",      nombre: "Sweatshirts" },
  { id: "camisetas",  nombre: "T-shirts & Polos" },
  { id: "camisas",    nombre: "Shirts"      },
  { id: "accesorios", nombre: "Accessories" },
  { id: "maletas",    nombre: "Backpacks"   }
];

/* Use tags for the filter */
window.USOS = [
  { id: "formal",      nombre: "Corporate formal" },
  { id: "casual",      nombre: "Casual"           },
  { id: "deportivo",   nombre: "Athletic"         },
  { id: "frio",        nombre: "Cold weather"     },
  { id: "impermeable", nombre: "Water-resistant"  },
  { id: "exterior",    nombre: "Outdoor work"     }
];

/* Customization techniques */
window.TECNICAS = {
  "bordado":          { nombre: "Embroidery",     detalle: "Flat or raised" },
  "sublimacion":      { nombre: "Sublimation",    detalle: "Full color across the whole garment" },
  "dtf":              { nombre: "DTF",            detalle: "Digital printing" },
  "vinilo":           { nombre: "Vinyl",          detalle: "Colors, textures and finishes" },
  "vinilo-gamuzado":  { nombre: "Suede vinyl",    detalle: "Velvety texture" },
  "serigrafia":       { nombre: "Screen printing", detalle: "Ink printing" },
  "laser":            { nombre: "Laser etching",  detalle: "Etched branding" }
};


/* ==========================================================================
   BRANDING TYPES
   Photos go in img/estampados/ named after the "id" with a .webp extension
   Example:  id "bordado"  ->  img/estampados/bordado.webp
   Until the photo exists, only the text is shown.
   ========================================================================== */
window.ESTAMPADOS = [
  { id: "bordado",         nombre: "Embroidery",      detalle: "Flat or raised. The most durable finish and the most used on executive pieces." },
  { id: "sublimacion",     nombre: "Sublimation",     detalle: "Full-color designs across the whole garment, with no limit on shades or gradients." },
  { id: "dtf",             nombre: "DTF",             detalle: "High-definition digital printing. Ideal for logos with many colors." },
  { id: "serigrafia",      nombre: "Screen printing", detalle: "Ink printing. Best cost per unit on large runs with few colors." },
  { id: "vinilo",          nombre: "Vinyl",           detalle: "Endless range of colors, textures, finishes and visual effects." },
  { id: "vinilo-gamuzado", nombre: "Suede vinyl",     detalle: "Velvety texture, softly raised to the touch." },
  { id: "laser",           nombre: "Laser etching",   detalle: "Branding etched into the fabric. An understated, discreet finish." }
];

/* ==========================================================================
   PACKAGING
   Photos go in img/empaque/ named after the "id" with a .webp extension
   ========================================================================== */
window.EMPAQUE = [
  { id: "cintillo",      nombre: "Custom belly band", detalle: "100% recycled, FSC-certified cardboard. Carries your brand in print and presents the garment folded." },
  { id: "bolsa-de-tela", nombre: "Cotton tote bag",   detalle: "100% reusable and recyclable, customizable with your logo. Turns the handoff into a second brand touchpoint." }
];
