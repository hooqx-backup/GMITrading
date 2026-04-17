import ProjectPage from './ProjectPage'
import { Microscope, Scale, Wheat, UtensilsCrossed, Leaf, Package, Tag, AlertTriangle, Link2 } from 'lucide-react'

const project = {
  title: 'Grains Packaging',
  tagline: 'Bulk-to-retail grain conversion — rice, lentils, chickpeas and specialty pulses.',
  heroImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1600&q=80',
  accentColor: '#e8a020',
  category: 'Grains & Pulses',
  year: '2020',

  overview: {
    heading: 'From Bulk Containers to Retail Shelves',
    body: `GMI's grains packaging hub receives bulk grain containers, runs multi-stage optical and gravimetric sorting, then re-packs into retail-ready pouches, woven bags or bulk sacks under customer or GMI private-label branding.`,
    bullets: [
      '99.5% optical sorting accuracy (Bühler SORTEX)',
      '15+ grain varieties available',
      'Allergen-segregated production lines',
      'Full lot traceability within 4 hours',
    ],
    highlights: [
      { value: '800 MT', label: 'Monthly capacity' },
      { value: '15+', label: 'Grain varieties' },
      { value: '99.5%', label: 'Sort accuracy' },
    ],
  },

  stats: [
    { value: '800 MT', label: 'Monthly capacity' },
    { value: '15+', label: 'Grain varieties' },
    { value: '1 kg–50 kg', label: 'Pack range' },
    { value: '99.5%', label: 'Sort accuracy' },
  ],

  pillars: {
    heading: 'Precision Grain Processing',
    subheading: 'Optical sorting, precision weighing, and full traceability for every pack.',
    items: [
      {
        icon: <Microscope size={22} />,
        tag: 'Sorting Technology',
        title: 'Optical Sorting',
        desc: 'Bühler SORTEX machines remove discoloured, broken and foreign grains at 99.5% accuracy. Output is re-run if defect rate exceeds 0.2% — zero compromise on pack quality.',
      },
      {
        icon: <Scale size={22} />,
        tag: 'Precision',
        title: 'Precision Weighing',
        desc: 'Multihead combination weighers deliver ±1 g accuracy across all retail pack sizes. Each pouch is checked by an inline checkweigher; under-weight packs are automatically rejected.',
      },
      {
        icon: <Wheat size={22} />,
        tag: 'Traceability',
        title: 'Origin Traceability',
        desc: 'Lot codes link every pack to its source container, origin certificate and lab report. Full traceability in under 4 hours — a critical requirement for UAE retailers.',
      },
    ],
  },

  process: {
    heading: 'From Container to Consumer',
    steps: [
      { title: 'Container Intake', desc: 'Bulk grain containers (20 ft / 40 ft) received at Jebel Ali. Each shipment inspected for moisture, foreign matter and pest activity before warehouse entry.' },
      { title: 'Pre-cleaning', desc: 'Rotary sieves and destoners remove husks, stones and oversized debris before grains enter the main sort line.' },
      { title: 'Optical Sorting', desc: 'SORTEX optical sorters scan each grain against 3,000+ colour profiles. Broken, discoloured and foreign material ejected by air jets at line speed.' },
      { title: 'Weighing & Filling', desc: 'Multihead weighers portion grain into pre-formed pouches (1 kg, 2 kg, 5 kg) or fill woven PP bags (25 kg, 50 kg). Every pack checkweighed at exit.' },
      { title: 'Sealing & Labelling', desc: 'Heat-sealed pouches receive bilingual Arabic/English labels with nutrition facts, lot code and best-before date. Woven bags are stitched and tagged.' },
      { title: 'Palletisation & Dispatch', desc: 'Pallets built to retailer specification (layer pattern, pallet height, stretch-wrap). WMS-tracked dispatch within 24 hours of production completion.' },
    ],
  },

  features: {
    heading: 'Complete Grain Solutions',
    items: [
      { icon: <UtensilsCrossed size={18} />, title: 'Multi-Grade Rice', desc: 'Basmati (extra-long, long), parboiled, jasmine and short-grain white — all handled on the same line.' },
      { icon: <Leaf size={18} />,            title: 'Pulse Varieties', desc: 'Green & red lentils, chickpeas, black-eye beans, mung beans and split peas available year-round.' },
      { icon: <Package size={18} />,         title: 'Flexible Pack Formats', desc: 'Retail pouches (1–5 kg), foodservice bags (10–25 kg) and bulk sacks (50 kg) from one facility.' },
      { icon: <Tag size={18} />,             title: 'Private Label & Co-Pack', desc: 'Full design-to-shelf private label service including ESMA-compliant label copy and barcode registration.' },
      { icon: <AlertTriangle size={18} />,   title: 'Allergen Segregation', desc: 'Dedicated lines and scheduling windows for allergen-sensitive SKUs with full environmental monitoring.' },
      { icon: <Link2 size={18} />,           title: 'Lot Traceability', desc: 'Digital lot tracking links finished pack to source vessel, origin document and QC test report in <4 hours.' },
    ],
  },

  gallery: [
    'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1559181567-c3190e4a9c7c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1506484381205-f7945653044d?auto=format&fit=crop&w=800&q=80',
  ],

  cta: {
    heading: 'Looking for a grain co-packing partner?',
    body: `Tell us your grain types, pack sizes and monthly volumes — we'll come back with a co-packing proposal within 2 business hours.`,
    primary: 'Get a Co-Pack Quote',
  },
}

export default function GrainsPackagingPage() {
  return <ProjectPage project={project} />
}
