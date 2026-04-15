import ProjectPage from './ProjectPage'

const project = {
  title: 'Oil Tinning',
  tagline: 'Precision-packed edible oils for UAE retail, hospitality and industrial buyers.',
  heroImage: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=1600&q=80',
  accentColor: '#2aa05a',
  category: 'Edible Oils',
  year: '2019',

  overview: {
    heading: 'Bulk to Shelf in 48 Hours',
    body: 'Our oil tinning operation converts bulk edible oils — sunflower, corn, canola and blended variants — into shelf-ready tins ranging from 1 L to 18 L. Every batch is tested for FFA, peroxide value and moisture before filling, then sealed and labelled to customer or GMI private-label specs.',
    bullets: [
      'FFA, peroxide & moisture QC on arrival',
      'Custom blends available (e.g., sunflower/canola mix)',
      '1 L to 18 L tin formats',
      'Nitrogen-flushed for 24-month shelf life',
    ],
    highlights: [
      { value: '500 MT', label: 'Monthly capacity' },
      { value: '48 hr', label: 'Order turnaround' },
      { value: '6', label: 'Oil variants' },
    ],
  },

  stats: [
    { value: '18 L', label: 'Max tin size' },
    { value: '500 MT', label: 'Monthly capacity' },
    { value: '6', label: 'Oil variants' },
    { value: '48 hr', label: 'Order turnaround' },
  ],

  pillars: {
    heading: 'Quality You Can Trust',
    subheading: 'Every tin is tested, sealed and tracked from our Jebel Ali facility to the end shelf.',
    items: [
      {
        icon: '🧪',
        tag: 'Quality Assurance',
        title: 'Lab-Verified Quality',
        desc: 'Every batch passes FFA, peroxide value and moisture testing before the line starts. Non-conforming bulk is rejected on arrival — never blended through.',
      },
      {
        icon: '🏭',
        tag: 'Automation',
        title: 'High-Speed Filling',
        desc: 'Automated rotary fillers deliver ±0.5% fill accuracy at up to 2,400 tins per hour. Nitrogen flushing before sealing extends shelf life to 24 months.',
      },
      {
        icon: '📦',
        tag: 'Customization',
        title: 'Custom Labelling',
        desc: 'In-house digital printing supports Arabic/English bilingual labels, retailer private-label artwork and full ESMA-compliant nutrition panels.',
      },
    ],
  },

  process: {
    heading: 'Our Production Process',
    steps: [
      { title: 'Bulk Sourcing', desc: 'Crude and refined oils sourced from certified mills in Argentina, Ukraine, Malaysia and India. Each shipment arrives with country-of-origin certificates and SGS quality reports.' },
      { title: 'Intake QC', desc: 'On-arrival lab tests for FFA (<0.1%), peroxide value (<1 meq/kg), moisture (<0.05%) and organoleptic assessment. Failing lots are returned to supplier.' },
      { title: 'Filtration & Blending', desc: 'Polishing filtration to 5 µm removes residual wax and sediment. Custom blends mixed gravimetrically in stainless-steel blending tanks.' },
      { title: 'Filling & Sealing', desc: 'Rotary filler with CIP capability fills 1 L, 1.5 L, 3 L, 5 L, 10 L and 18 L tins. Each tin is nitrogen-flushed, seamed and coded with lot, date and shift.' },
      { title: 'Palletisation & Dispatch', desc: 'Finished tins are stretch-wrapped on euro-pallets, bar-coded and WMS-tracked. Temperature-monitored trucks deliver to Dubai, Abu Dhabi and Northern Emirates within 24–48 hours.' },
    ],
  },

  features: {
    heading: 'Why Choose GMI Oil Tinning',
    items: [
      { icon: '📏', title: 'Tin Sizes: 1 L – 18 L', desc: 'Covers retail, food-service and industrial pack formats from a single facility.' },
      { icon: '💨', title: 'Nitrogen Flushing', desc: 'Inert-gas sealing eliminates headspace oxygen — 24-month shelf life guaranteed.' },
      { icon: '🏷️', title: 'Private Label Ready', desc: 'ESMA-compliant bilingual labels printed in-house. Minimum run: 500 units.' },
      { icon: '✓', title: 'HACCP Facility', desc: 'Jebel Ali plant operates under HACCP protocols; ISO 22000 certification in progress.' },
      { icon: '❄️', title: 'Cold-Chain Logistics', desc: 'Temperature-monitored vehicles maintain <25°C throughout last-mile delivery.' },
      { icon: '⚡', title: 'Same-Day Cut-off', desc: 'Orders received before 14:00 dispatch the same evening for next-day UAE delivery.' },
    ],
  },

  gallery: [
    'https://images.unsplash.com/photo-1601600576337-c1d8a0d1373c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=800&q=80',
  ],

  cta: {
    heading: 'Need a reliable oil tinning partner?',
    body: `Share your pack sizes, volume and label specs — we'll return a detailed quote within 2 business hours.`,
    primary: 'Request a Quote',
  },
}

export default function OilTinningPage() {
  return <ProjectPage project={project} />
}
