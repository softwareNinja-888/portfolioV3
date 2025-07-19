import { useEffect, useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";


function SocialIcons({path,socialLink}){
  return (
      <> 
          <a href={socialLink} target="_blank" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
              {typeof path === 'string' ? (
                  <img src={path} alt={`${path} icon`} className="w-4 h-4" />
                ) : (
                  path
                )}          
            </a>
        
      </>
      )
}
export function Socials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    
    <nav className={`cursor-pointer fixed hidden lg:block bottom-45 right-1 p-3 rounded transition-opacity duration-300 z-50 space-y-10 ${
        isVisible ? "opacity-100" : "opacity-0 lg:hidden"
      }`}> 
      <SocialIcons path={<Github className="w-4 h-4 text-primary" />} socialLink='https://github.com/softwareNinja-888'/>
      <SocialIcons path={<Mail className="w-4 h-4 text-primary" />} socialLink='mailto:webdev.bybayanda@gmail.com'/>
      <SocialIcons path={<Linkedin className="w-4 h-4 text-primary"/>} socialLink='https://www.linkedin.com/in/bayanda-dlamini'/>
    </nav>
  );
};