export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-transparent border-t border-white/10">
      <div className="container mx-auto py-6 text-center text-white/60">
        <p>&copy; {currentYear} John Doe. All rights reserved.</p>
      </div>
    </footer>
  );
}
