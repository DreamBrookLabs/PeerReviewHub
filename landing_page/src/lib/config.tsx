import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "PeerReviewHub.tech",
  description: "Open-Source AI-Powered Platform for Open Peer Review",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://0.0.0.0:3025",
  keywords: ["Open Peer Review", "SaaS", "AI", "Science", "Open Source"],
  links: {
    email: "support@PeerReviewHub.tech",
    twitter: "https://twitter.com/PeerReviewHub",
    discord: "https://discord.gg/PeerReviewHub",
    github: "https://github.com/DreamBrookLabs/PeerReviewHub",
    instagram: "https://instagram.com/PeerReviewHub/",
  },
  header: [
    {
      trigger: "Features",
      content: {
        main: {
          icon: <Icons.logo className="h-6 w-6" />,
          title: "AI-Powered Peer Review SaaS",
          description: "Streamline your publishing with intelligent automation.",
          href: "#",
        },
        items: [
          {
            href: "#",
            title: "Expert Search & Match",
            description: "Automate peer review search and save time.",
          },
          {
            href: "#",
            title: "Check for AIGC and Plagiarism",
            description: "Optimize your Open Peer Review quality.",
          },
          {
            href: "#",
            title: "Collaborative Peer Review",
            description: "Collaborating for better scientific stewardship.",
          },
        ],
      },
    },
    {
      trigger: "Solutions",
      content: {
        items: [
          {
            title: "For Publishers",
            href: "#",
            description: "Streamline, modernize, and customize your workflow through digitization and AI.",
          },
          {
            title: "Editors",
            href: "#",
            description: "Amplify your editorial pace and quality with personalized AI Co-Editors.",
          },
          {
            title: "Peer Reviewers",
            href: "#",
            description: "Improve your peer review quality with AIGC check and Personalized AI Review Assistant.",
          },
          {
            title: "Authors",
            href: "#",
            description: "Screen errors and mistakes in your manuscript, improve manuscript rigor.",
          },
          {
            title: "Developer",
            href: "#",
            description: "API for data and modules toward building your own Peer Review Tools and automation services.",
          },
          {
            title: "Funding Body",
            href: "#",
            description:
              "Optimize your Return on Funding. Best Quality Research vetted by community.",
          },
        ],
      },
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ],
  pricing: [
    {
      name: "CARBON",
      href: "#",
      price: "$3.99",
      period: "month",
      yearlyPrice: "$36.99",
      features: [
        "1 User",
        "5GB Storage",
        "Basic Support",
        "Limited API Access",
        "Standard Analytics",
      ],
      description: "Perfect for individuals authors, editors, and reviewers",
      buttonText: "Subscribe",
      isPopular: false,
    },
    {
      name: "GOLD",
      href: "#",
      price: "$18.99",
      period: "month",
      yearlyPrice: "$188.99",
      features: [
        "5 Users",
        "50GB Storage",
        "Priority Support",
        "Full API Access",
        "Advanced Analytics",
      ],
      description: "Ideal for growing teams",
      buttonText: "Subscribe",
      isPopular: true,
    },
    {
      name: "PLATINUM",
      href: "#",
      price: "$99",
      period: "month",
      yearlyPrice: "$888",
      features: [
        "Unlimited Users",
        "500GB Storage",
        "24/7 Premium Support",
        "Custom Integrations",
        "AI-Powered Insights",
      ],
      description: "For large-scale operations and high-volume users",
      buttonText: "Subscribe",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "What is PeerReviewHub.tech?",
      answer: (
        <span>
          PeerReviewHub.tech is a platform that helps you build and manage your AI-powered
          publication processes. From manuscript check, editorial automation, and peer review management. 
        </span>
      ),
    },
    {
      question: "How can I get started with PeerReviewHub.tech?",
      answer: (
        <span>
          You can get started with PeerReviewHub.tech by signing up for an account on our
          website, creating a new project, and following our quick-start guide.
          We also offer tutorials and documentation to help you along the way.
        </span>
      ),
    },
    {
      question: "What types of AI models does PeerReviewHub.tech support?",
      answer: (
        <span>
          PeerReviewHub.tech supports a wide range of AI models, including but not limited
          to natural language processing, computer vision, and predictive
          analytics. We continuously update our platform to support the latest
          AI technologies.
        </span>
      ),
    },
    {
      question: "Is PeerReviewHub.tech suitable for beginners in AI development?",
      answer: (
        <span>
          Yes, PeerReviewHub.tech is designed to be user-friendly for both beginners and
          experienced authors, editors, and reviewers. We offer intuitive interfaces, pre-built
          templates, and extensive learning resources to help users of all skill
          levels create AI-powered workflows.
        </span>
      ),
    },
    {
      question: "What kind of support does PeerReviewHub.tech provide?",
      answer: (
        <span>
          PeerReviewHub.tech provides comprehensive support including documentation, video
          tutorials, a community forum, and dedicated customer support. We also
          offer premium support plans for enterprises with more complex needs.
        </span>
      ),
    },
  ],
  footer: [
    {
      title: "Product",
      links: [
        { href: "#", text: "Features", icon: null },
        { href: "#", text: "Pricing", icon: null },
        { href: "#", text: "Documentation", icon: null },
        { href: "#", text: "API", icon: null },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "#", text: "About Us", icon: null },
        { href: "#", text: "Careers", icon: null },
        { href: "#", text: "Blog", icon: null },
        { href: "#", text: "Press", icon: null },
        { href: "#", text: "Partners", icon: null },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Community", icon: null },
        { href: "#", text: "Contact", icon: null },
        { href: "#", text: "Support", icon: null },
        { href: "#", text: "Status", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
