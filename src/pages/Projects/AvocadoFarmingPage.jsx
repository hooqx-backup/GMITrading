import ProjectPage from './ProjectPage'
import { Sprout, Snowflake, ClipboardList, Leaf, Thermometer, Check, DollarSign, Package, Tag } from 'lucide-react'

const project = {
  title: 'Avocado Farming',
  tagline: 'Farm-to-shelf avocados from East Africa — fresh, consistent, traceable.',
  heroImage: 'https://images.unsplash.com/photo-1601039641847-7857b994d704?auto=format&fit=crop&w=1600&q=80',
  accentColor: '#5aa020',
  category: 'Fresh Produce',
  year: '2021',

  overview: {
    heading: 'Direct from African Farms to UAE Shelves',
    body: 'GMI partners with certified smallholder co-operatives and mid-scale farms across Kenya, Tanzania and Ethiopia to source Hass and Fuerte avocados at peak maturity. Our direct farm relationships eliminate 2–3 broker layers, translating into better grower margins and more consistent quality for UAE buyers.',
    bullets: [
      'Direct partnerships with 14 co-operatives across 3 countries',
      'GLOBALG.A.P. certified packhouses at origin',
      'Unbroken cold chain from harvest to ripening rooms',
      'Weekly supply cycles with flexible ripeness stages',
    ],
    highlights: [
      { value: '3', label: 'Source countries' },
      { value: '120 MT', label: 'Monthly volume' },
      { value: '7°C', label: 'Cold-chain temp' },
    ],
  },

  stats: [
    { value: '3', label: 'Source countries' },
    { value: '7 °C', label: 'Cold-chain target' },
    { value: '48 hr', label: 'Farm-to-airfreight' },
    { value: '120 MT', label: 'Monthly volume' },
  ],

  pillars: {
    heading: 'Farm to Ripening Room',
    subheading: 'Complete traceability and cold-chain management from harvest to UAE distribution.',
    items: [
      {
        icon: <Sprout size={22} />,
        tag: 'Sourcing',
        title: 'Direct Farm Sourcing',
        desc: 'Long-term purchase agreements with 14 co-operatives across Kenya, Tanzania and Ethiopia. Fixed floor prices give farmers planning certainty; GMI gets first-right on premium-grade fruit.',
      },
      {
        icon: <Snowflake size={22} />,
        tag: 'Logistics',
        title: 'Unbroken Cold Chain',
        desc: 'Pre-cooling to 7°C within 4 hours of harvest, reefer containers at 7°C, and ripening rooms in Jebel Ali. Temperature logging at every handover point — visible to buyers on request.',
      },
      {
        icon: <ClipboardList size={22} />,
        tag: 'Compliance',
        title: 'GLOBALG.A.P. Traceability',
        desc: 'Every pallet carries a GGN (GLOBALG.A.P. Number) linking it to the certified farm block, harvest date and packhouse QC data — meeting the strictest UAE retailer standards.',
      },
    ],
  },

  process: {
    heading: 'Farm-to-Table Supply Chain',
    steps: [
      { title: 'Harvest Scheduling', desc: 'GMI agronomists work with farm managers to schedule harvest windows based on dry-matter content (>21%) to guarantee ripening performance at destination.' },
      { title: 'Origin Packhouse QC', desc: 'Fruit graded by size (count 12–28), skin uniformity and absence of defects. Non-conforming fruit diverted to domestic markets — only premium grade exported.' },
      { title: 'Pre-cooling & Loading', desc: 'Packed cartons pre-cooled to 7°C in forced-air tunnels within 4 hours of harvest. Loaded into USDA-spec reefer containers or airfreight pallets.' },
      { title: 'Transit & Customs', desc: 'Sea freight (Mombasa / Dar es Salaam → Jebel Ali, 12–16 days) or airfreight (Nairobi / Addis → Dubai, 8 hours). Full customs handling included.' },
      { title: 'Ripening & QC', desc: 'Jebel Ali ripening rooms run 5-day ethylene programmes to Pantone colour-code 3–6 depending on buyer spec. Post-ripening QC checks firmness and colour before outbound.' },
      { title: 'UAE Distribution', desc: 'Retailer-specific pallet and display builds. Temperature-monitored last-mile delivery to hypermarkets, specialty retailers and HoReCa buyers across UAE.' },
    ],
  },

  features: {
    heading: 'Premium Avocado Solutions',
    items: [
      { icon: <Leaf size={18} />,        title: 'Hass & Fuerte Varieties', desc: 'Year-round supply through staggered sourcing from 3 countries and multiple harvest seasons.' },
      { icon: <Thermometer size={18} />, title: 'Ripening-Room Service', desc: 'Ethylene ripening to retailer spec — from transit-hard (stage 2) to eat-ready (stage 5) on order.' },
      { icon: <Check size={18} />,       title: 'GLOBALG.A.P. Certified', desc: 'All partner farms carry valid certificates — a mandatory requirement for UAE hypermarkets.' },
      { icon: <DollarSign size={18} />,  title: 'Direct Farm Pricing', desc: 'No broker layers. Grower-to-importer pricing passed through as lower cost or better margin for buyers.' },
      { icon: <Package size={18} />,     title: 'Flexible Pack Formats', desc: '4-pack retail nets, 6-pack trays, 3 kg bulk bags and display cartons (4 kg / 5 kg) available.' },
      { icon: <Tag size={18} />,         title: 'Private Label', desc: 'Stickers, PLU labels and full carton overwraps printed to retailer spec — minimum 1 pallet per label run.' },
    ],
  },

  gallery: [
    'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1548032885-b5e38734688a?auto=format&fit=crop&w=800&q=80',
  ],

  cta: {
    heading: 'Need consistent avocado supply for the UAE?',
    body: `Share your weekly volume, preferred ripeness stage and pack format — we'll have a supply proposal back to you within 4 hours.`,
    primary: 'Request Supply Terms',
  },
}

export default function AvocadoFarmingPage() {
  return <ProjectPage project={project} />
}
