import type { VisionItem } from '../types';

import factoryImg from '../assets/vision/factory.webp';
import solarImg from '../assets/vision/solar.webp';
import dehydrationImg from '../assets/vision/dehydration.webp';


export const visionItems: VisionItem[] = [
  {
    id: 'integration',
    title: 'Vertical Integration (The Factory)',
    description: 'Our end-to-end production pipeline transforming raw harvests into premium, market-ready goods.',
    bullets: [
      'On-site processing facility minimizing logistical carbon footprint.',
      'Creation of high-value secondary products.',
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
      '4 acres of high-efficiency solar greenhouses.',
      '2 acres are allocated for mushroom cultivation, while the remaining 2 acres will be decided based on project requirements.',
      'Simultaneous clean energy generation and crop cultivation.',
      'Powering the entire 7-acre dehydration and factory complex.',
      'Demonstrating the pinnacle of modern ecological sustainability.'
    ],
    image: solarImg
  },
  {
    id: 'dehydration',
    title: 'Multilevel Dehydration Complex',
    description: 'A specialized, heavy-duty facility engineered for maximum shelf-life and nutrient retention.',
    bullets: [
      'Large-scale dehydration of medicinal herbs (Karapincha, Murunga).',
      'Processing of seasonal fruits, vegetables, and grains.',
      'State-of-the-art moisture extraction technology.',
      'Ensuring year-round food security and export-quality supply.',
      'Zero-emission operation powered by our solar grid.'
    ],
    image: dehydrationImg
  }
];
