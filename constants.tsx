import { ServiceType, ServiceOption } from './types';
import { PenTool, Hammer, Palette, Ruler } from 'lucide-react';
import React from 'react';

export const SERVICES: ServiceOption[] = [
  {
    id: ServiceType.BLUEPRINT,
    title: "线上设计方案",
    price: 10,
    description: "适合动手能力强的同学。我们提供方案，你来实现。",
    features: [
      "2D 平面布局图 (PDF)",
      "定制配色方案",
      "软装购物清单 (含链接)",
      "线上咨询 (30分钟)"
    ]
  },
  {
    id: ServiceType.FULL_SERVICE,
    title: "上门全案改造",
    price: 40,
    description: "坐享其成。我们为你搞定一切。",
    features: [
      "包含所有线上设计服务",
      "上门家具布局调整",
      "软装安装与布置",
      "线路收纳与清洁",
      "改造后精美摄影"
    ]
  }
];
