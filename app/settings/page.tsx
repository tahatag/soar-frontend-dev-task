"use client";

import { Header } from "@/components/header";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { EditProfile } from "./modules/edit-profile";

const tabs = [
  { value: "profile", label: "Edit Profile", content: <EditProfile /> },
  { value: "preferences", label: "Preferences", content: <>Preferences Tab</> },
  { value: "security", label: "Security", content: <>Security Tab</> },
];

export default function Settings() {
  return (
    <>
      <Header title="Settings" />
      <div className="bg-background w-full p-6 md:px-10 md:py-6">
        <section className="w-full p-4 md:p-7 bg-white rounded-3xl">
          <Tabs defaultValue="profile">
            <TabsList>
              {tabs.map((tab) => (
                <TabsTrigger value={tab.value} key={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent value={tab.value} key={tab.value}>
                {tab.content}
              </TabsContent>
            ))}
          </Tabs>
        </section>
      </div>
    </>
  );
}
