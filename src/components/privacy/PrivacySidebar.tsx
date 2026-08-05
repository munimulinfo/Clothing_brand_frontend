"use client";
import { useState } from "react";
import { privacySections } from "./privacydata";

const PrivacySidebar = () => {
  const [active, setActive] = useState("overview");

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 rounded-[24px] border border-neutral-200 bg-white p-4 shadow-sm">

        <h3 className="mb-5 px-3 text-lg font-bold">
          Privacy Topics
        </h3>

        <div className="space-y-2">
          {privacySections.map((section) => {
            const Icon = section.icon;

            return (
              <button
                key={section.id}
                onClick={() => setActive(section.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                  active === section.id
                    ? "bg-green-50 text-green-700"
                    : "hover:bg-neutral-50"
                }`}
              >
                <Icon className="h-5 w-5" />

                <span className="font-medium">
                  {section.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default PrivacySidebar;