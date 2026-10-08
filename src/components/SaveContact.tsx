"use client";

import { ContactCard } from "./Icons";
import { profile } from "@/data/profile";

export function saveContact() {
  const vcf = [
    "BEGIN:VCARD", "VERSION:3.0", "N:Khedher;Yosri;;;", "FN:Yosri Khedher",
    `TEL;TYPE=CELL:${profile.phoneUri}`, `EMAIL;TYPE=INTERNET:${profile.email}`,
    `EMAIL;TYPE=INTERNET,WORK:${profile.universityEmail}`, `URL:${profile.linkedin}`,
    "ORG:Faculty of Sciences of Gabès", "TITLE:Software Engineering Student", "ADR;TYPE=HOME:;;;Tunisia;;;;", "END:VCARD"
  ].join("\r\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob([vcf], { type: "text/vcard;charset=utf-8" }));
  link.download = "Yosri_Khedher.vcf"; document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(link.href);
}

export function SaveContact({ className = "" }: { className?: string }) {
  return <button className={`button button-primary ${className}`} onClick={saveContact}><ContactCard /> Save My Contact</button>;
}
