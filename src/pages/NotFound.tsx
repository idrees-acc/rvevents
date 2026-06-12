import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-serif font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          Did you forget to add the page to the router?
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-secondary text-primary hover:bg-secondary/90 font-semibold px-8 py-3"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
