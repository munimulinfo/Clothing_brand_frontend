import {
  ShieldCheck,
  Database,
  Cookie,
  Share2,
  Lock,
  UserCheck,
  Trash2,
  RefreshCcw,
} from "lucide-react";

export const privacySections = [
  {
    id: "overview",
    title: "Overview",
    icon: ShieldCheck,
    content: [
      "Trust Wear values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data whenever you use our website or purchase our products.",
      "By using our website, you agree to the collection and use of information described in this Privacy Policy.",
    ],
  },

  {
    id: "information",
    title: "Information We Collect",
    icon: Database,
    content: [
      "Full Name",
      "Email Address",
      "Phone Number",
      "Shipping Address",
      "Billing Address",
      "Order History",
      "Payment Information (processed securely through payment providers)",
      "Device & Browser Information",
      "IP Address",
    ],
  },

  {
    id: "usage",
    title: "How We Use Your Information",
    icon: UserCheck,
    content: [
      "Process and deliver your orders.",
      "Provide customer support.",
      "Send order updates.",
      "Improve website performance.",
      "Personalize your shopping experience.",
      "Prevent fraud and unauthorized activity.",
    ],
  },

  {
    id: "cookies",
    title: "Cookies",
    icon: Cookie,
    content: [
      "Remember your login session.",
      "Store shopping cart information.",
      "Understand visitor behavior.",
      "Improve website performance.",
    ],
  },

  {
    id: "sharing",
    title: "Sharing Information",
    icon: Share2,
    content: [
      "We never sell your personal information.",
      "Your information may only be shared with trusted delivery partners, payment gateways, and legal authorities when required by law.",
    ],
  },

  {
    id: "security",
    title: "Security",
    icon: Lock,
    content: [
      "We use secure servers, SSL encryption, and industry-standard security practices to protect your personal information.",
      "Only authorized staff can access customer information.",
    ],
  },

  {
    id: "rights",
    title: "Your Rights",
    icon: ShieldCheck,
    content: [
      "Request access to your personal information.",
      "Correct inaccurate information.",
      "Request deletion of your account.",
      "Opt out of marketing emails at any time.",
    ],
  },

  {
    id: "deletion",
    title: "Account Deletion",
    icon: Trash2,
    content: [
      "You can request permanent account deletion by contacting our support team. Some order records may be retained to comply with legal obligations.",
    ],
  },

  {
    id: "updates",
    title: "Policy Updates",
    icon: RefreshCcw,
    content: [
      "Trust Wear may update this Privacy Policy from time to time. Changes become effective immediately after being published on this page.",
    ],
  },
];