import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "./button";
import { services } from "@/data/site-data";

const inputClass="min-h-12 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/25";
export function EnquiryForm({ detailed=false }: { detailed?: boolean }) {
 const [sent,setSent]=useState(false); const submit=(e:FormEvent<HTMLFormElement>)=>{e.preventDefault(); if(e.currentTarget.checkValidity()) setSent(true)};
 if(sent) return <div role="status" className="border-t-4 border-green bg-green-soft p-8"><CheckCircle2 className="text-green" size={36}/><h2 className="mt-4 font-display text-2xl font-bold">Thank you for contacting BT New Adventure Tours.</h2><p className="mt-2 text-muted-foreground">We have received your enquiry and will be in touch shortly.</p></div>;
 return <form onSubmit={submit} className="grid gap-5" noValidate={false}>
  <div className="grid gap-5 sm:grid-cols-2"><Field label="Full Name" name="fullName" required/><Field label="Email" name="email" type="email" required/><Field label={detailed?"Telephone / WhatsApp":"Telephone"} name="phone" type="tel" required/><Field label="Country" name="country" required/></div>
  {detailed ? <>
   <div className="grid gap-5 sm:grid-cols-2"><Field label="Arrival Date" name="arrival" type="date" required/><Field label="Departure Date" name="departure" type="date" required/><Field label="Number of Adults" name="adults" type="number" min="1" required/><Field label="Number of Children" name="children" type="number" min="0"/></div>
   <div className="grid gap-5 sm:grid-cols-2"><Field label="Preferred Destination" name="destination"/><Field label="Preferred Attractions" name="attractions"/><SelectField label="Service Required" name="service" options={services.map(s=>s.title)}/><SelectField label="Budget Range" name="budget" options={["Please advise","Budget-conscious","Mid-range","Premium"]}/></div>
   <fieldset><legend className="mb-3 text-sm font-bold">Additional travel needs</legend><div className="grid gap-3 sm:grid-cols-2">{["Accommodation Required","Airport Transfer Required","Safari Required","Conference Tour Required"].map(x=><label key={x} className="flex items-center gap-3 border border-border bg-background p-3 text-sm"><input type="checkbox" name={x} className="size-4 accent-primary"/>{x}</label>)}</div></fieldset>
  </> : <div className="grid gap-5 sm:grid-cols-2"><Field label="Travel Date" name="travelDate" type="date"/><Field label="Number of Travellers" name="travellers" type="number" min="1"/><SelectField label="Service Required" name="service" options={services.map(s=>s.title)}/><Field label="Destination / Attraction" name="destination"/></div>}
  <label className="grid gap-2 text-sm font-bold">{detailed?"Additional Requirements":"Message"}<textarea name="message" required maxLength={1500} rows={6} className={inputClass}/></label>
  <p className="text-xs text-muted-foreground">Fields marked as required must be completed. Your information is used only to respond to this enquiry.</p>
  <Button type="submit" className="w-fit">{detailed?"Request My Tailored Tour":"Send Enquiry"}<Send size={17}/></Button>
 </form>
}
function Field({label,name,...props}:{label:string;name:string}&React.InputHTMLAttributes<HTMLInputElement>){return <label className="grid gap-2 text-sm font-bold">{label}<input name={name} maxLength={120} className={inputClass} {...props}/></label>}
function SelectField({label,name,options}:{label:string;name:string;options:string[]}){return <label className="grid gap-2 text-sm font-bold">{label}<select name={name} required className={inputClass}><option value="">Select an option</option>{options.map(o=><option key={o}>{o}</option>)}</select></label>}
