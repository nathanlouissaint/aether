import { ArrowLeft } from "lucide-react";

export function PortfolioReturnBanner({ href }: { href: string }) {
  return <aside className="portfolio-return" aria-label="CloudSight portfolio navigation"><div><span>Portfolio Preview</span><a href={href}><ArrowLeft size={14} aria-hidden="true" />Back to CloudSight</a></div></aside>;
}

export function PortfolioReturnCta({ href }: { href: string }) {
  return <section className="portfolio-return-cta"><div><span>CloudSight / Website Audit</span><h2>Like what you see?</h2><p>Let&apos;s build something that works just as hard for your business.</p><a href={href}><ArrowLeft size={16} aria-hidden="true" />Back to CloudSight</a></div></section>;
}
