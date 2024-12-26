const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-16 w-full p-4 text-center text-white text-sm">
      © {currentYear} Climb AI. All rights reserved.
    </footer>
  );
};

export default Footer; 