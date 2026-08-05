"use client";
import { useState } from "react";
import PrivacyContent from "./PrivacyContent";
import PrivacySidebar from "./PrivacySidebar";

const PrivacyPage = () => {
  const [selectedContent, setSelectedContent] = useState<{
    title: string;
    content: string;
  }>({
    title: "",
    content: "",
  });

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <PrivacySidebar setSelectedContent={setSelectedContent} />
      <PrivacyContent selectedContent={selectedContent} />
    </div>
  );
};

export default PrivacyPage;
