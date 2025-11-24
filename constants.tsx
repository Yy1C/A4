import { ServiceType, ServiceOption } from './types';
import { PenTool, Hammer, Palette, Ruler } from 'lucide-react';
import React from 'react';

export const SERVICES: ServiceOption[] = [
  {
    id: ServiceType.BLUEPRINT,
    title: "Online Blueprint Design",
    price: 10,
    description: "Perfect for DIYers. We provide the plan; you make it happen.",
    features: [
      "2D Layout Diagram (PDF)",
      "Custom Color Palette",
      "Shopping List with Links",
      "Online Consultation (30 mins)"
    ]
  },
  {
    id: ServiceType.FULL_SERVICE,
    title: "Door-to-Door Decoration",
    price: 60,
    description: "Sit back and relax. We transform your space for you.",
    features: [
      "Everything in Blueprint Design",
      "On-site Furniture Arrangement",
      "Decor Installation",
      "Cable Management & Cleanup",
      "Post-install Photo Shoot"
    ]
  }
];

export const GALLERY_IMAGES = [
  {
    url: "https://picsum.photos/id/106/800/600",
    title: "Cozy Warmth",
    desc: "A warm, light-filled setup for small spaces."
  },
  {
    url: "https://picsum.photos/id/364/800/600",
    title: "Modern Minimalist",
    desc: "Clean lines and monochromatic tones."
  },
  {
    url: "https://picsum.photos/id/449/800/600",
    title: "Artistic Haven",
    desc: "For the creative student."
  },
  {
    url: "https://picsum.photos/id/180/800/600",
    title: "Study Focus",
    desc: "Optimized for productivity and focus."
  }
];