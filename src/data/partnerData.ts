import newtechLogo from '../assets/logos/newtech-logo.png';
import cshLogo from '../assets/logos/csh-logo.png';
import nkCeylonLogo from '../assets/logos/nk-ceylone-logo.png';
import wattsoftLogo from '../assets/logos/wattsoft.png';

export const partners = [
  {
    id: 'newtech',
    name: 'New Tech Solution Mawanella Pvt. Ltd',
    role: 'Founder / Concept Designer / Planner / Renewable Energy',
    logo: newtechLogo,
    url: '#',
    style: {
      shadow: 'hover:shadow-[0_12px_44px_rgba(26,107,60,0.15)]',
      borderMain: 'hover:border-[#1A6B3C]/30',
      borderLogo: 'group-hover:border-[#22C55E]/50',
      text: 'group-hover:text-[#1A6B3C]'
    }
  },
  {
    id: 'csh',
    name: 'CSH Technology',
    role: 'Renewable Energy, BOI Supplier',
    logo: cshLogo,
    url: '#',
    style: {
      shadow: 'hover:shadow-[0_12px_44px_rgba(6,133,199,0.15)]',
      borderMain: 'hover:border-[#0685c7]/30',
      borderLogo: 'group-hover:border-[#0685c7]/50',
      text: 'group-hover:text-[#0685c7]'
    }
  },
  {
    id: 'nkceylon',
    name: 'NK Ceylon Trading',
    role: 'Food Production & Marketing',
    logo: nkCeylonLogo,
    url: '#',
    style: {
      shadow: 'hover:shadow-[0_12px_44px_rgba(111,1,116,0.15)]',
      borderMain: 'hover:border-[#6f0174]/30',
      borderLogo: 'group-hover:border-[#6f0174]/50',
      text: 'group-hover:text-[#6f0174]'
    }
  },
  {
    id: 'wattsoft',
    name: 'Wattsoft',
    role: 'Technical Solution Provider (Software & IoT)',
    logo: wattsoftLogo,
    url: '#',
    style: {
      shadow: 'hover:shadow-[0_12px_44px_rgba(244,84,39,0.15)]',
      borderMain: 'hover:border-[#f45427]/30',
      borderLogo: 'group-hover:border-[#f45427]/50',
      text: 'group-hover:text-[#f45427]'
    }
  }
];
