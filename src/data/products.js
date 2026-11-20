export const categories = [
  {
    id: 'lipsticks',
    name: 'Lipsticks',
    slug: 'lipsticks',
    description: 'Velvet mattes, hydrating satins & glassy tints',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    itemCount: '18 Products'
  },
  {
    id: 'face-makeup',
    name: 'Face Makeup',
    slug: 'face-makeup',
    description: 'Flawless foundations, skin-blurring concealers & powders',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    itemCount: '24 Products'
  },
  {
    id: 'eye-makeup',
    name: 'Eye Makeup',
    slug: 'eye-makeup',
    description: 'Celestial eyeshadows, waterproof liners & fluttery mascaras',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    itemCount: '16 Products'
  },
  {
    id: 'blush-glow',
    name: 'Blush & Glow',
    slug: 'blush-glow',
    description: 'Dewy liquid blushes, baked highlighters & sunlit bronzers',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    itemCount: '14 Products'
  },
  {
    id: 'brushes-tools',
    name: 'Brushes & Tools',
    slug: 'brushes-tools',
    description: 'Ultra-soft vegan bristles & ergonomic beauty blenders',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    itemCount: '12 Products'
  },
  {
    id: 'skincare',
    name: 'Skincare',
    slug: 'skincare',
    description: 'Nourishing serums, prep mists & barrier renewal balms',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    itemCount: '15 Products'
  }
];

export const products = [
  {
    id: 'gg-lip-01',
    name: 'Velvet Petal Weightless Matte Lipstick',
    brand: 'GLOW & GLAM Atelier',
    category: 'Lipsticks',
    categorySlug: 'lipsticks',
    price: 1399,
    originalPrice: 1799,
    discount: 22,
    rating: 4.9,
    reviewsCount: 384,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true,
    sku: 'GG-LIP-001',
    inStock: true,
    shortDescription: 'Infused with French camellia oil for a cashmere-soft matte finish that never feathers.',
    description: 'Crafted with micronized pigments and enriched with nourishing wild rosehip and camellia oil, Velvet Petal delivers intense, weightless color in a single swipe. The cushiony formula glides like silk and dries down to a velvety blurred finish that wears comfortably for up to 12 hours without drying your lips.',
    benefits: [
      '12-hour weightless matte wear',
      'Infused with Camellia Oil & Hyaluronic spheres',
      'Non-drying, blur-filter effect',
      '100% Vegan & Cruelty-Free'
    ],
    howToUse: 'Glide directly across the lips starting from the cupid’s bow outwards. For a blurred blotted look, dab onto center of lips and blend with fingertips.',
    ingredients: 'Dimethicone, Camellia Japonica Seed Oil, Rosa Canina (Rosehip) Fruit Oil, Hyaluronic Acid Spheres, Tocopheryl Acetate (Vitamin E), Shea Butter Ethyl Esters, Microcrystalline Wax, Iron Oxides, Red 7 Lake.',
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599732487445-635c34599581?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Rose Cashmere', hex: '#B86561' },
      { name: 'Toasted Nude', hex: '#A86D58' },
      { name: 'Berry Soufflé', hex: '#873447' },
      { name: 'Spiced Terracotta', hex: '#B04C3E' },
      { name: 'Midnight Merlot', hex: '#581D26' }
    ]
  },
  {
    id: 'gg-face-02',
    name: 'Luminous Silk Hydrating Foundation',
    brand: 'GLOW & GLAM Privé',
    category: 'Face Makeup',
    categorySlug: 'face-makeup',
    price: 2499,
    originalPrice: 2999,
    discount: 16,
    rating: 4.8,
    reviewsCount: 512,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true,
    sku: 'GG-FCE-002',
    inStock: true,
    shortDescription: 'Buildable medium-to-full coverage with a natural lit-from-within radiance.',
    description: 'Inspired by fine silk charmeuse, this revolutionary liquid foundation unifies skin tone with light-reflecting micro-pearls. Features 4% Niacinamide and Botanical Squalane to lock in hydration and improve skin texture while delivering customizable, crease-resistant coverage.',
    benefits: [
      'Second-skin luminous finish',
      'Medium buildable coverage',
      'Enriched with 4% Niacinamide & Squalane',
      'Sweat and humidity resistant'
    ],
    howToUse: 'Dispense 1-2 pumps onto the back of your hand. Buff into skin using a dense foundation brush or damp beauty sponge from the center of the face outwards.',
    ingredients: 'Aqua/Water, Squalane, Niacinamide, Glycerin, Titanium Dioxide, Dimethicone, Polyglyceryl-4 Isostearate, Tocopherol, Phenoxyethanol, Iron Oxides.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248597359-00918116b47c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503236940864-dd5f7259c780?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Fair Ivory (10N)', hex: '#F3E4D6' },
      { name: 'Warm Beige (20W)', hex: '#E6C9B0' },
      { name: 'Golden Honey (30W)', hex: '#D2A782' },
      { name: 'Toffee Warm (40W)', hex: '#B88258' },
      { name: 'Rich Espresso (50N)', hex: '#7D4D32' }
    ]
  },
  {
    id: 'gg-blush-03',
    name: 'Dew Bloom Liquid Radiant Blush',
    brand: 'Aura Glow',
    category: 'Blush & Glow',
    categorySlug: 'blush-glow',
    price: 1199,
    originalPrice: 1499,
    discount: 20,
    rating: 4.9,
    reviewsCount: 620,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true,
    sku: 'GG-BLS-003',
    inStock: true,
    shortDescription: 'Weightless liquid blush that melts effortlessly into cheeks for an all-day pinch of glow.',
    description: 'An airy, serum-like cheek tint that melts effortlessly into skin, creating a seamless, healthy flush. Blended with White Water Lily and Lotus extracts, it nourishes and soothes skin while maintaining color brilliance throughout the day.',
    benefits: [
      'Weightless serum formula',
      'Dewy, buildable pigmentation',
      'Infused with White Lily & Lotus extract',
      'Seamless blending without disturbing base makeup'
    ],
    howToUse: 'Dab 1-2 dots onto cheekbones using the doe-foot applicator. Gently pat and blend upwards using fingertips or a soft blush brush.',
    ingredients: 'Isododecane, Hydrogenated Polydecene, White Water Lily Extract, Nelumbo Nucifera (Lotus) Extract, Caprylic/Capric Triglyceride, Mica, Tin Oxide, Red 6 Lake.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Soft Peony', hex: '#DE7F8F' },
      { name: 'Apricot Sunset', hex: '#E78C6E' },
      { name: 'Warm Terracotta', hex: '#BA594C' },
      { name: 'Berry Bliss', hex: '#9E3C57' }
    ]
  },
  {
    id: 'gg-eye-04',
    name: 'Celestial Nights 12-Pan Eyeshadow Palette',
    brand: 'GLOW & GLAM Atelier',
    category: 'Eye Makeup',
    categorySlug: 'eye-makeup',
    price: 2799,
    originalPrice: 3499,
    discount: 20,
    rating: 4.9,
    reviewsCount: 295,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true,
    sku: 'GG-EYE-004',
    inStock: true,
    shortDescription: '12 buttery velvet mattes, multidimensional foiled metallics, and diamond toppers.',
    description: 'A curated wardrobe of 12 celestial eyeshadows ranging from cashmere neutrals to gilded metallics and rich jewel tones. Formulated with ultra-fine pressed pigments that blend seamlessly without fallout.',
    benefits: [
      '12 curated shades in 3 distinct finishes',
      'Intense one-swipe payoff',
      'Zero chalkiness or creasing',
      'Luxe magnetic compact with vanity mirror'
    ],
    howToUse: 'Apply matte shades into the crease using a blending brush. Pat metallic and diamond topper shades onto the lid using fingertips for maximum sparkle.',
    ingredients: 'Talc, Synthetic Fluorphlogopite, Mica, Dimethicone, Zinc Stearate, Silica, Octyldodecyl Stearoyl Stearate, Ethylhexylglycerin, Tocopherol.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Champagne Dream', hex: '#F0E2CD' },
      { name: 'Rose Quartz', hex: '#D6A99D' },
      { name: 'Molten Bronze', hex: '#9B613A' },
      { name: 'Midnight Sparkle', hex: '#26222D' }
    ]
  },
  {
    id: 'gg-lip-05',
    name: 'Glace Lip Glaze High-Shine Oil',
    brand: 'Maison de Beauté',
    category: 'Lipsticks',
    categorySlug: 'lipsticks',
    price: 999,
    originalPrice: 1299,
    discount: 23,
    rating: 4.7,
    reviewsCount: 418,
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: true,
    sku: 'GG-LIP-005',
    inStock: true,
    shortDescription: 'Mirror-like glass shine with comforting raspberry and jojoba oils. Never sticky.',
    description: 'Transform dry lips into luscious, plump glass pillows. This decadent lip oil combines the high-wattage shine of a lip gloss with the restorative benefits of pure botanical plant oils.',
    benefits: [
      'Mirror-glass crystal shine',
      'Plumping peptide complex',
      'Non-sticky, cushiony feel',
      'Jojoba & Raspberry Seed Oils'
    ],
    howToUse: 'Wear alone for a glossy tint or layer over your favorite Velvet Petal Lipstick to add dimension.',
    ingredients: 'Polybutene, Octyldodecanol, Simmondsia Chinensis (Jojoba) Seed Oil, Rubus Idaeus (Raspberry) Seed Oil, Palmitoyl Tripeptide-1, Vanilla Aroma, Mica.',
    image: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Honey Glaze', hex: '#EBB692' },
      { name: 'Pink Petal', hex: '#F0A3AF' },
      { name: 'Berry Syrup', hex: '#AA3650' }
    ]
  },
  {
    id: 'gg-blush-06',
    name: 'Gilded Starlight Baked Highlighter',
    brand: 'Aura Glow',
    category: 'Blush & Glow',
    categorySlug: 'blush-glow',
    price: 1599,
    originalPrice: 1999,
    discount: 20,
    rating: 4.8,
    reviewsCount: 310,
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: true,
    sku: 'GG-BLS-006',
    inStock: true,
    shortDescription: 'Slow-baked Italian powder with prismatic champagne pearls for zero-glitter wet gleam.',
    description: 'Baked on Italian terracotta tiles for 24 hours, this feather-light powder imparts a breathtaking, wet-look luminosity to the high points of the face without accentuating pores or skin texture.',
    benefits: [
      'Seamless wet-look sheen without chunky glitter',
      'Slow-baked on terracotta tiles',
      'Silky micro-fine powder',
      'Long-wearing 10-hour formula'
    ],
    howToUse: 'Dust across cheekbones, brow bones, bridge of nose, and cupid’s bow with a fan or tapered highlighter brush.',
    ingredients: 'Mica, Synthetic Fluorphlogopite, Cetearyl Ethylhexanoate, HDI/Trimethylol Hexyllactone Crosspolymer, Glycerin, Silica, Squalane, Chondrus Crispus Extract.',
    image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Champagne Pop', hex: '#EED7B8' },
      { name: 'Rose Gold Gleam', hex: '#E5AFA3' },
      { name: 'Bronze Goddess', hex: '#C28E61' }
    ]
  },
  {
    id: 'gg-tools-07',
    name: 'The Master Artistry 8-Piece Vegan Brush Set',
    brand: 'Rose Atelier',
    category: 'Brushes & Tools',
    categorySlug: 'brushes-tools',
    price: 3299,
    originalPrice: 4299,
    discount: 23,
    rating: 5.0,
    reviewsCount: 178,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: true,
    sku: 'GG-TLS-007',
    inStock: true,
    shortDescription: 'Ultra-plush synthetic micro-fibers, rose-gold ferrules, and blush wooden handles.',
    description: 'Designed in collaboration with celebrity makeup artists, this 8-piece professional brush wardrobe gives you every tool required for flawless complexion and detailed eye artistry.',
    benefits: [
      '100% cruelty-free vegan bristles',
      'Mimics natural hair pickup with zero shedding',
      'Weighted ergonomic wooden handles',
      'Includes faux-leather luxury travel clutch'
    ],
    howToUse: 'Use specific brushes for foundation buffing, contouring, blush dusting, and detailed eye blending. Clean weekly with gentle brush cleanser.',
    ingredients: 'Taklon Synthetic Fibers, Aluminum Rose-Gold Ferrule, FSC-Certified Birchwood Handle.',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Blush & Rose Gold', hex: '#DFB0A5' }
    ]
  },
  {
    id: 'gg-skin-08',
    name: 'Dew Prep Barrier Moisture Balm',
    brand: 'Maison de Beauté',
    category: 'Skincare',
    categorySlug: 'skincare',
    price: 1899,
    originalPrice: 2299,
    discount: 17,
    rating: 4.8,
    reviewsCount: 230,
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: true,
    sku: 'GG-SKN-008',
    inStock: true,
    shortDescription: 'Ceramide-infused primer moisturizer for a glassy canvas that grips makeup all day.',
    description: 'The ultimate bridge between skincare and cosmetics. Formulated with 5 essential ceramides, Centella Asiatica, and hyaluronic acid to instantly quench dehydrated skin and prevent foundation flaking.',
    benefits: [
      'Preps skin for flawless makeup glide',
      'Restores skin moisture barrier',
      'Calms redness with Cica extract',
      'Non-comedogenic & fragrance free'
    ],
    howToUse: 'Warm a dime-sized amount between fingertips and massage onto clean skin 2 minutes before foundation application.',
    ingredients: 'Aqua, Ceramide NP, Ceramide AP, Phytosphingosine, Centella Asiatica Extract, Sodium Hyaluronate, Butyrospermum Parkii (Shea) Butter, Niacinamide.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248597359-00918116b47c?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Universal Translucent', hex: '#FAF6F0' }
    ]
  },
  {
    id: 'gg-eye-09',
    name: 'Fleur Volumizing & Lengthening Mascara',
    brand: 'GLOW & GLAM Atelier',
    category: 'Eye Makeup',
    categorySlug: 'eye-makeup',
    price: 1149,
    originalPrice: 1499,
    discount: 23,
    rating: 4.8,
    reviewsCount: 462,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: false,
    sku: 'GG-EYE-009',
    inStock: true,
    shortDescription: 'Hourglass bristle wand separates and lifts every lash for clean, clump-free drama.',
    description: 'Achieve the look of salon lash extensions in two coats. Packed with plant conditioning waxes and panthenol, it lengthens, curls, and dramatically thickens lashes without flaking or smudging.',
    benefits: [
      'Dramatic volume and lift',
      'Clump-resistant hourglass wand',
      'Infused with lash-strengthening Panthenol',
      'Easy removal with warm water'
    ],
    howToUse: 'Wiggle wand at the root of lashes and comb upwards through tips. Layer a second coat while still damp for extra drama.',
    ingredients: 'Aqua, Carnauba Wax, Stearic Acid, Castor Seed Oil, Panthenol, Acrylates Copolymer, Iron Oxide Black (CI 77499).',
    image: 'https://images.unsplash.com/photo-1631730486784-5456119f69ae?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1631730486784-5456119f69ae?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Obsidian Black', hex: '#111111' },
      { name: 'Espresso Brown', hex: '#3B2F2F' }
    ]
  },
  {
    id: 'gg-face-10',
    name: 'Airbrush Blur Translucent Setting Powder',
    brand: 'GLOW & GLAM Privé',
    category: 'Face Makeup',
    categorySlug: 'face-makeup',
    price: 1799,
    originalPrice: 2199,
    discount: 18,
    rating: 4.9,
    reviewsCount: 389,
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: false,
    sku: 'GG-FCE-010',
    inStock: true,
    shortDescription: 'Micro-milled French powder that eliminates shine without ever looking cakey or dry.',
    description: 'A cloud-soft setting powder that sets makeup for 16-hour shine-free wear. Made without flashback-inducing ingredients, it gives photos a soft-focus blur filter in real life.',
    benefits: [
      '16-hour shine control',
      'Zero photo flashback',
      'Ultra-fine micronized silica particles',
      'Infused with soothing amino acids'
    ],
    howToUse: 'Press lightly into the T-zone and under-eye area using a velour powder puff. Sweep away excess with a fluffy brush.',
    ingredients: 'Silica, Lauroyl Lysine, Corn Starch, Boron Nitride, Phenoxyethanol, Ethylhexylglycerin.',
    image: 'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Translucent Light', hex: '#FFFBF2' },
      { name: 'Translucent Medium', hex: '#EBD2BA' },
      { name: 'Translucent Deep', hex: '#9E6D4E' }
    ]
  },
  {
    id: 'gg-lip-11',
    name: 'Satin Kiss Plumping Lip Liner',
    brand: 'Rose Atelier',
    category: 'Lipsticks',
    categorySlug: 'lipsticks',
    price: 799,
    originalPrice: 999,
    discount: 20,
    rating: 4.7,
    reviewsCount: 210,
    isBestSeller: false,
    isNewArrival: false,
    isFeatured: false,
    sku: 'GG-LIP-011',
    inStock: true,
    shortDescription: 'Waterproof gel-glide lip pencil that contours and defines with zero tugging.',
    description: 'Sculpt and contour your lip shape with razor-sharp precision. Creamy gel formula glides effortlessly and sets in 30 seconds for all-day feather-proof wear.',
    benefits: [
      'Transfer-resistant 8-hour hold',
      'Smooth glide with zero dragging',
      'Includes built-in sharpener at base',
      'Enriched with vitamin E'
    ],
    howToUse: 'Trace natural lip contours starting from center of cupid’s bow. Fill in lips entirely for a long-wearing base before lipstick.',
    ingredients: 'Isododecane, Synthetic Wax, Hydrogenated Polydicyclopentadiene, Polybutene, Nylon-12, Tocopherol, Mica.',
    image: 'https://images.unsplash.com/photo-1599732487445-635c34599581?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1599732487445-635c34599581?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Nude Whisper', hex: '#B87A68' },
      { name: 'Velvet Rose', hex: '#A85A65' },
      { name: 'Caramel Kiss', hex: '#98583B' }
    ]
  },
  {
    id: 'gg-face-12',
    name: 'Silk Blur Radiant Concealer',
    brand: 'GLOW & GLAM Privé',
    category: 'Face Makeup',
    categorySlug: 'face-makeup',
    price: 1499,
    originalPrice: 1899,
    discount: 21,
    rating: 4.8,
    reviewsCount: 340,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: false,
    sku: 'GG-FCE-012',
    inStock: true,
    shortDescription: 'Crease-proof hydrating concealer that erases dark circles and spots with a natural satin finish.',
    description: 'An undereye wake-up call. Infused with caffeine, peptides, and botanical extracts to brighten and depuff tired eyes while blurring fine lines and hyperpigmentation.',
    benefits: [
      'Full coverage without cakiness',
      'Infused with Caffeine & Peptides',
      'Resists creasing for 12 hours',
      'Large precision applicator'
    ],
    howToUse: 'Dot under eyes, on blemishes, or around nose. Blend with a damp sponge or fingertips with tapping motions.',
    ingredients: 'Water, Cyclopentasiloxane, Glycerin, Caffeine, Palmitoyl Tetrapeptide-7, Dimethicone, Magnesium Sulfate, Iron Oxides.',
    image: 'https://images.unsplash.com/photo-1608248597359-00918116b47c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1608248597359-00918116b47c?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Fair 10', hex: '#F7E7D7' },
      { name: 'Light Medium 20', hex: '#EACBB1' },
      { name: 'Medium Tan 30', hex: '#CBA07D' },
      { name: 'Deep Warm 40', hex: '#875133' }
    ]
  },
  {
    id: 'gg-eye-13',
    name: 'Velvet Ink Waterproof Precision Eyeliner',
    brand: 'Maison de Beauté',
    category: 'Eye Makeup',
    categorySlug: 'eye-makeup',
    price: 899,
    originalPrice: 1199,
    discount: 25,
    rating: 4.9,
    reviewsCount: 520,
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: false,
    sku: 'GG-EYE-013',
    inStock: true,
    shortDescription: 'Japanese calligraphy-inspired 0.1mm felt tip for the sharpest, carbon black cat-eye wings.',
    description: 'Master the sharpest wing with unmatched precision. Features an ergonomic flow-control cartridge that deposits intensely pigmented, quick-drying liquid that withstands tears, sweat, and humidity.',
    benefits: [
      '0.1mm micro-fine Japanese tip',
      'Deep carbon-black ink payoff',
      '24-hour waterproof and smudge-proof',
      'Continuous ink flow technology'
    ],
    howToUse: 'Shake well before use. Draw fine dashes along lash line and connect into a clean wing along outer corner angle.',
    ingredients: 'Aqua, Carbon Black, Butylene Glycol, Styrene/Acrylates Copolymer, Laureth-21, Phenoxyethanol, Sodium Dehydroacetate.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Ink Carbon Black', hex: '#000000' },
      { name: 'Espresso Satin', hex: '#2B1A14' }
    ]
  },
  {
    id: 'gg-skin-14',
    name: 'Rosewater Dew Glow Setting Mist',
    brand: 'Aura Glow',
    category: 'Skincare',
    categorySlug: 'skincare',
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    rating: 4.8,
    reviewsCount: 298,
    isBestSeller: true,
    isNewArrival: false,
    isFeatured: false,
    sku: 'GG-SKN-014',
    inStock: true,
    shortDescription: 'Micro-fine mist infused with Bulgarian rosewater and niacinamide to meld makeup seamlessly.',
    description: 'An ultra-fine cloud of hydration that locks makeup in place for 16 hours while instantly melting away powdery layers for a glass-skin finish. Refresh anytime during the day for an instant beauty boost.',
    benefits: [
      '16-hour makeup longevity',
      'Ultra-fine micro-aerosol sprayer',
      'Steam-distilled Bulgarian Rosewater',
      'Soothes and hydrates instantly'
    ],
    howToUse: 'Hold 8-10 inches from face. Close eyes and mist evenly in an X and T motion. Can also be used to dampen makeup brushes.',
    ingredients: 'Rosa Damascena Flower Water, Glycerin, Niacinamide, Portulaca Oleracea Extract, Panthenol, Phenoxyethanol.',
    image: 'https://images.unsplash.com/photo-1608248597359-00918116b47c?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1608248597359-00918116b47c?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Universal Dew', hex: '#FBF4EC' }
    ]
  },
  {
    id: 'gg-tools-15',
    name: 'Cloud Velvet Beauty Sponge Duo',
    brand: 'Rose Atelier',
    category: 'Brushes & Tools',
    categorySlug: 'brushes-tools',
    price: 699,
    originalPrice: 899,
    discount: 22,
    rating: 4.9,
    reviewsCount: 412,
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: false,
    sku: 'GG-TLS-015',
    inStock: true,
    shortDescription: 'Dual-ended latex-free marshmallow sponge for seamless liquid and powder application.',
    description: 'Expands to twice its size when damp to create an airbrushed, streak-free complexion without absorbing excess foundation. Includes one teardrop blender and one precision flat-edge sponge.',
    benefits: [
      'Ultra-soft marshmallow texture',
      'Absorbs minimal product',
      '100% latex-free and hypoallergenic',
      'Dual shapes for all facial contours'
    ],
    howToUse: 'Submerge in water and squeeze out excess until damp. Bounce across skin with liquids, creams, or powders.',
    ingredients: 'Latex-Free Hydrophilic Polyurethane Foam.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Blush & Ivory Pink', hex: '#E8BFBA' }
    ]
  },
  {
    id: 'gg-blush-16',
    name: 'Sunlit Bronze Multi-Use Cream Bronzer',
    brand: 'Aura Glow',
    category: 'Blush & Glow',
    categorySlug: 'blush-glow',
    price: 1699,
    originalPrice: 2099,
    discount: 19,
    rating: 4.7,
    reviewsCount: 185,
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: false,
    sku: 'GG-BLS-016',
    inStock: true,
    shortDescription: 'Cream-to-powder bronzer that creates warm dimension and sculpted definition effortlessly.',
    description: 'Capture the warm radiance of the golden hour. A weightless cream-to-satin bronzer that melts seamlessly into the skin, delivering natural sun-kissed warmth that never looks orange or muddy.',
    benefits: [
      'Effortless finger or brush blendability',
      'Natural satin, non-shimmery finish',
      'Infused with nourishing Argan Oil',
      'Sweat-proof and non-greasy'
    ],
    howToUse: 'Warm product with a brush or fingertips and sweep along the hairline, hollows of cheeks, and jawline.',
    ingredients: 'Caprylic/Capric Triglyceride, Mica, Argania Spinosa Kernel Oil, Cera Microcristallina, Silica, Iron Oxides.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
    ],
    shades: [
      { name: 'Golden Sand', hex: '#BA8D69' },
      { name: 'Warm Amber', hex: '#9E6746' },
      { name: 'Deep Bronze', hex: '#754528' }
    ]
  }
];

export const reviews = [
  {
    id: 1,
    name: 'Aishwarya Roy',
    role: 'Verified Buyer, Mumbai',
    rating: 5,
    comment: 'The Velvet Petal lipstick is pure luxury! The formula is so weightless and doesn’t settle into fine lines at all. The rose packaging feels like something straight out of Paris.',
    productName: 'Velvet Petal Matte Lipstick'
  },
  {
    id: 2,
    name: 'Ananya Sharma',
    role: 'Beauty Editor, Delhi',
    rating: 5,
    comment: 'I swapped my designer foundation for GLOW & GLAM Luminous Silk and I am never looking back. Gives the most ethereal glass skin glow that lasts through Indian summers!',
    productName: 'Luminous Silk Hydrating Foundation'
  },
  {
    id: 3,
    name: 'Pooja Hegde',
    role: 'Verified Buyer, Bangalore',
    rating: 5,
    comment: 'The Dew Bloom Liquid Blush gives such a fresh, youthful flush. Two tiny dots are enough for both cheeks, and it blends like a dream over powder or bare skin.',
    productName: 'Dew Bloom Liquid Radiant Blush'
  },
  {
    id: 4,
    name: 'Kritika Sen',
    role: 'Verified Buyer, Kolkata',
    rating: 5,
    comment: 'The 8-Piece brush set is unbelievable quality. The bristles are softer than real squirrel hair and pick up the exact amount of pigment needed. Packaging is a 10/10.',
    productName: 'The Master Artistry Brush Set'
  }
];
