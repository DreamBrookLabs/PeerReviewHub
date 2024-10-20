import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Upload Your Manuscript",
    content:
      "Simply upload your manuscript to our secure platform. We support various file formats and data types to ensure a seamless integration with your existing systems.",
    image: "/PRH_workflow.png",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Setup Editorial Workflow",
    content:
      "Our advanced AI algorithms automatically process and analyze your manusript, extracting valuable insights and patterns that would be difficult to identify manually.",
    image: "/PeerReviewHub_process.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Get Actionable Peer Review Feedback",
    content:
      "Receive clear, actionable insights and recommendations based on the Human-AI analysis. Use these insights to make data-driven decisions and improve your business strategies.",
    image: "/peer_review_illust.jpg",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How it works" subtitle="Just 3 steps to get started">
      <Features data={data} />
    </Section>
  );
}
