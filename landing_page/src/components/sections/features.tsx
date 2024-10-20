import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brain, FileText, LineChart } from "lucide-react";

const data = [
  {
    id: 1,
    title: "AI-Powered Dashboard",
    content: "Visualize progress and integrate workspace for author, editor, and reviewers.",
    image: "/PeerReviewHub_process.png",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Natural Language Processing",
    content: "Analyze text and extract key items effortlessly.",
    image: "/PRH_workflow.png",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Fraud Prevention",
    content: "Systematically address possible issues and errors.",
    image: "/PeerReviewHub_process.png",
    icon: <LineChart className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "Automated Reporting",
    content: "Generate comprehensive reports with one click.",
    image: "/PRH_workflow.png",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Features" subtitle="Modular and Customizable Editorial Workflows">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
