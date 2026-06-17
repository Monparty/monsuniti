"use client";
import Link from "next/link";
import { contactData } from "../dataset";

export default function Contact() {
    const copyEmail = () => {
        navigator.clipboard.writeText(contactData.email);
        alert("Copied to clipboard!");
    };

    const iconClass = "nes-icon is-medium hover:-translate-y-4 transition-all duration-300 ease-in-out";

    return (
        <div className="nes-container with-title">
            <p className="title">MY CONTACT</p>
            <div>
                <div className="flex items-center gap-4 lg:gap-10 mb-6 flex-wrap">
                    <button type="button" aria-label="Copy email address" onClick={copyEmail}>
                        <i className={`gmail ${iconClass}`}></i>
                    </button>
                    {contactData.socials.map((social) => (
                        <Link key={social.icon} href={social.href} target="_blank" aria-label={social.label}>
                            <i className={`${social.icon} ${iconClass}`}></i>
                        </Link>
                    ))}
                </div>
                <p className="indent-10 leading-7">{contactData.message}</p>
            </div>
        </div>
    );
}
