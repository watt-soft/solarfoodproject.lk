import type { VisionItem } from '../types';

import dehydrationImg from '../assets/vision/dehydration.jpeg';
import mushroomImg from '../assets/vision/mushroom.jpeg';
import factoryImg from '../assets/vision/factory.jpeg';
import solarImg from '../assets/vision/solar.jpeg';

export const visionItems: VisionItem[] = [
  {
    id: 'dehydration',
    title: 'Multilevel Dehydration Complex',
    description: 'A specialized, heavy-duty facility engineered for maximum shelf-life and nutrient retention.',
    bullets: [
      'Large-scale dehydration of medicinal herbs (Karapincha, Murunga).',
      'Processing seasonal fruits and vegetables.',
      'State-of-the-art moisture extraction technology.',
      'Ensuring year-round food security and export-quality supply.',
      'Zero-emission operation powered by our solar grid.'
    ],
    image: dehydrationImg
  },
  {
    id: 'mushrooms',
    title: 'Mushroom Cultivation Hub',
    description: 'High-density greenhouse ecosystems optimized for premium fungi growth.',
    bullets: [
      '2 acres of dedicated, climate-controlled environments.',
      'Automated humidity and temperature regulation.',
      'High-yield, premium organic harvesting.',
      'Direct supply to our vertical integration pipeline.'
    ],
    image: mushroomImg
  },
  {
    id: 'integration',
    title: 'Vertical Integration (The Factory)',
    description: 'Our end-to-end production pipeline transforming raw harvests into premium, market-ready goods.',
    bullets: [
      'On-site processing facility minimizing logistical carbon footprint.',
      'Creation of high-value secondary products (e.g., vegetarian mushroom sausages).',
      'Strict food-safety and sterilization protocols.',
      'Packaging and distribution centre.'
    ],
    image: factoryImg
  },
  {
    id: 'solar',
    title: 'Agrisolar / Agrivoltaics',
    description: 'The crown jewel of our land strategy — dual-use infrastructure capturing the sun from above while growing life below.',
    bullets: [
      '2 acres of high-efficiency solar canopies.',
      'Simultaneous clean energy generation and crop cultivation.',
      'Powering the entire 7-acre dehydration and factory complex.',
      'Demonstrating the pinnacle of modern ecological sustainability.'
    ],
    image: solarImg
  }
];
