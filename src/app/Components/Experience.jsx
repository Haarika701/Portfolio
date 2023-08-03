"use client"
import React, { useState } from "react";
import { Tab } from '@headlessui/react'

export default function Experience() {
    const [toggle, setToggle] = useState(true)
    const [selected, setSelected] = useState(true)

    const handleClick = () => {
        setToggle(!toggle)
    }

    const [menu, setMenu] = useState(true)

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
            <Tab.Group vertical>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    <Tab onClick={handleClick}>Divercity</Tab>
                    <Tab onClick={handleMenu}>Aegis</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <Tab className={({ selected }) =>
                        (
                            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                            selected
                                ? 'bg-white shadow'
                                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                        )}>
                            <h4 >Full Stack Engineer Intern at Divercity</h4>
                            <div >
                                <li>
                                    Implemented and integrated forget password feature using AWS Amplify for authentication, enabling users to reset account passwords. Integrated Google Firebase analytics library using TypeScript to track product feature usage for marketing purposes.
                                    <li>Participated in bug fixes to address regression failures, ensuring a seamless migration from React/Redux to NextJS in Agile environment. </li>
                                    <li>Contributed to development of 4 MVP features, including upgrade/downgrade subscription plan, UI design changes from Figma, and forget password within first 30 days of employment.</li>
                                    <li>Collaborated in a multidisciplinary environment to ensure successful integration and production launch.</li>
                                </li>
                            </div>
                        </Tab>
                    </Tab.Panel>
                    <Tab.Panel>
                        <Tab
                            className={({ selected }) =>
                            (
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-white shadow'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                            )
                            }
                        ><h4>Support Associate at Aegis</h4>
                            <div>
                                <li>
                                    Collaborated with sellers to guarantee listings met quality assurance standards.
                                </li>
                                <li>
                                    Resolved 75% of data-discrepancy issues on seller listings during a major website event, ensuring all listings were available for the sale.
                                </li>
                                <li>
                                    Facilitated communication between technical teams to pinpoint gaps in customer experience and technical requirements.
                                </li>
                            </div>
                        </Tab>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div >
    )
}