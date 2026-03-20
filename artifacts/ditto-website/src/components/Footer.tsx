export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center">
        <p className="text-muted-foreground text-sm font-medium">
          © {new Date().getFullYear()} Atharva Patil
        </p>
      </div>
    </footer>
  );
}
