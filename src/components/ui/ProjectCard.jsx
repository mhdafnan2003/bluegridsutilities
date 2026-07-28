import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

const ProjectCard = React.forwardRef(
  ({ className, imgSrc, title, description, link, linkText = "View Project", ...props }, ref) => {
    const isExternal = !link || link.startsWith("http://") || link.startsWith("https://") || link.startsWith("#");

    const CardContent = (
      <>
        {/* Card Image Section */}
        <div className="aspect-[4/3] overflow-hidden relative bg-slate-100">
          <img
            src={imgSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>

        {/* Card Content Section */}
        <div className="flex flex-1 flex-col p-6 text-left">
          <h3 className="text-xl font-bold font-outfit text-brand-dark transition-colors duration-300 group-hover:text-brand-primary min-h-[3.5rem] flex items-center line-clamp-2">
            {title}
          </h3>
          <p className="mt-3 flex-grow text-gray-500 text-sm leading-relaxed min-h-[4.5rem] line-clamp-3">
            {description}
          </p>
          
          {/* Card Link/CTA */}
          <div className="mt-6 flex items-center text-brand-primary font-bold text-sm tracking-wider opacity-100 transition-all duration-500 group-hover:translate-x-1.5">
            <span className="font-outfit">{linkText}</span>
            <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </>
    );

    const baseClasses = cn(
      "group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white text-slate-800 shadow-md transition-all duration-500 ease-in-out hover:-translate-y-2 hover:shadow-xl",
      className
    );

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={link || "#"}
          target={!link || link.startsWith("#") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className={baseClasses}
          style={{ maskImage: 'radial-gradient(white, black)', WebkitMaskImage: '-webkit-radial-gradient(white, black)', ...props.style }}
          {...props}
        >
          {CardContent}
        </a>
      );
    }

    return (
      <Link
        ref={ref}
        to={link}
        className={baseClasses}
        style={{ maskImage: 'radial-gradient(white, black)', WebkitMaskImage: '-webkit-radial-gradient(white, black)', ...props.style }}
        {...props}
      >
        {CardContent}
      </Link>
    );
  }
);
ProjectCard.displayName = "ProjectCard";

export { ProjectCard };
