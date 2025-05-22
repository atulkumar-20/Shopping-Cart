export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
        <p>© {new Date().getFullYear()} E-Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}