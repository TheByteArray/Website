import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: "HysteriaX VPN",
    description: "Custom Hysteria2 Client Built from Scratch",
    longDescription: "Built a custom iOS VPN client from scratch for the Hysteria2 protocol. Implemented a custom Go wrapper to handle the core VPN functionality, including tun2socks integration for efficient packet routing. The client features a native Swift UI with advanced network management capabilities and seamless integration with iOS system services.",
    tags: ["Swift", "SwiftUI", "Go", "Hysteria2", "VPN"],
    features: [
      "Custom Go wrapper implementation",
      "tun2socks integration",
      "Native iOS UI",
      "System-level VPN integration"
    ]
  },
  {
    id: 2,
    title: "InConnect Client",
    description: "iOS Xray VPN Client with Go Integration",
    longDescription: "Built a custom iOS VPN client from scratch for the Xray protocol. Implemented a custom Go wrapper for Xray core with tun2socks integration and backend API integration. The client features a modern SwiftUI interface with advanced network management capabilities and seamless integration with iOS system services.",
    tags: ["Swift", "SwiftUI", "Go", "Xray", "VPN"],
    features: [
      "Custom Go wrapper for Xray core",
      "tun2socks integration",
      "Backend API integration",
      "Modern SwiftUI interface"
    ],
    appStoreUrl: "https://apps.apple.com/us/app/inconnect-client/id6745726030"
  }
]; 