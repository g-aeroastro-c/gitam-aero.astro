'use client';
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import React from "react";

export default function App() {
  return (
    <>
      <h2 className="text-center sm:text-xl md:text-2xl lg:text-2xl font-semibold text-white">FAQ'S</h2>
      <Accordion>
        <AccordionItem key="1" aria-label="Accordion 1" title="What is the Gitam Aero Astro Club?">
          The Gitam Aero Astro Club is a student organization at Gitam University focused on promoting astronomy, programming, and robotics. The club consists of three main teams: Team Stargazers, Team Robusta, and the programming team. These teams work on various projects, participate in competitions, and collaborate to enhance their skills and knowledge in their respective fields.
        </AccordionItem>
        <AccordionItem key="2" aria-label="Accordion 2" title="Who can join the Gitam Aero Astro Club?">
          Any student of Gitam University with an interest in astronomy, programming, or robotics can join the Gitam Aero Astro Club. We welcome members from all academic backgrounds and levels of experience.
        </AccordionItem>
        <AccordionItem key="3" aria-label="Accordion 3" title="How do I become a member of the Gitam Aero Astro Club?">
          To become a member of the Gitam Aero Astro Club, you can fill out the membership form available on our website or contact us directly through our provided email or phone number. We also have regular recruitment drives announced on our website and social media channels.
        </AccordionItem>
        <AccordionItem key="4" aria-label="Accordion 4" title="What are the benefits of joining the Gitam Aero Astro Club?">
          Joining the Gitam Aero Astro Club offers numerous benefits, including:

          <ul className="list-disc list-inside">
            <li>Hands-on experience with aerospace, programming, and robotics projects.</li>
            <li>Opportunities to participate in national and international competitions.</li>
            <li>Access to workshops, seminars, and mentorship programs.</li>
            <li>Collaboration with like-minded peers and industry professionals.</li>
            <li>Enhancing your resume with unique project experiences and leadership opportunities.</li>
          </ul>
        </AccordionItem>
        <AccordionItem key="5" aria-label="Accordion 5" title="Can I join more than one team within the club?">
          Yes, members are encouraged to explore their interests and can join more than one team within the club. This allows for a broader learning experience and greater involvement in diverse projects.
        </AccordionItem>
        <AccordionItem key="6" aria-label="Accordion 6" title="What resources and facilities are available to club members?">
          Club members have access to various resources and facilities, including:

          <ul className="list-disc list-inside">
            <li>Dedicated workspaces for each team.</li>
            <li>Tools and equipment for astronomy, robotics, and programming projects.</li>
            <li>Access to software and hardware required for project development.</li>
            <li>Mentorship from experienced faculty members and industry professionals.</li>
          </ul>
        </AccordionItem>
        <AccordionItem key="7" aria-label="Accordion 7" title="Does the club participate in external competitions or events?">
          Yes, the Gitam Aero Astro Club actively participates in various external competitions and events at the national and international levels. These competitions provide valuable exposure and experience, allowing members to showcase their skills and collaborate with students from other institutions.
        </AccordionItem>
        <AccordionItem key="8" aria-label="Accordion 8" title="How can I stay updated with the club's activities and announcements?">
          You can stay updated with the club's activities and announcements by following our website and following us on social media platforms. We regularly post updates about upcoming events, project progress, and other important information.
        </AccordionItem>
      </Accordion>
    </>
  );
}
