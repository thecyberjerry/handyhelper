import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
export default function Accordions() {
   
    return (
        <div className="w-full justify-center items-center flex-col flex mb-16" >
            <p className="text-4xl">FAQ</p>
            <div className="flex flex-col container w-3/2 md:w-1/2">
                <Accordion variant="shadow">
                    <AccordionItem key="1" aria-label="Accordion 1" title="What is FindMyMate App">
                        FindMyMate is a comprehensive platform designed to connect users with verified service professionals such as electricians and plumbers. It streamlines the process of finding reliable home service solutions by ensuring professionals are vetted and trustworthy.
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="How it will help me">
                        FindMyMate simplifies the search for service professionals by offering access to verified experts with GSTIN numbers. This ensures reliability and convenience for users seeking dependable service providers.
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="Is it trusted?">
                        Yes, FindMyMate prioritizes user trust with rigorous verification processes. Professionals are authenticated with GSTIN numbers, and the platform is secured with MongoDB, NextAuth, Next.js, and Tailwind technologies, ensuring a safe and trustworthy experience for all users.
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}
