// Icons/FlagIcons.tsx
import React from "react";
import "flag-icons/css/flag-icons.min.css";

interface FlagIconProps {
  countryCode: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const FlagIcon: React.FC<FlagIconProps> = ({
  countryCode,
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-4 h-3",
    md: "w-5 h-4",
    lg: "w-6 h-5",
  };

  return (
    <span
      className={`fi fi-${countryCode} ${sizeClasses[size]} ${className} inline-block rounded-sm`}
      style={{ backgroundSize: "cover" }}
    />
  );
};

// Individual flag components for better type safety and easier imports
export const MacedonianFlag: React.FC<{
  size?: "sm" | "md" | "lg";
  className?: string;
}> = ({ size, className }) => (
  <FlagIcon countryCode="mk" size={size} className={className} />
);

export const EnglishFlag: React.FC<{
  size?: "sm" | "md" | "lg";
  className?: string;
}> = ({ size, className }) => (
  <FlagIcon countryCode="us" size={size} className={className} />
);

export const FrenchFlag: React.FC<{
  size?: "sm" | "md" | "lg";
  className?: string;
}> = ({ size, className }) => (
  <FlagIcon countryCode="fr" size={size} className={className} />
);

export const GermanFlag: React.FC<{
  size?: "sm" | "md" | "lg";
  className?: string;
}> = ({ size, className }) => (
  <FlagIcon countryCode="de" size={size} className={className} />
);

export const SlovenianFlag: React.FC<{
  size?: "sm" | "md" | "lg";
  className?: string;
}> = ({ size, className }) => (
  <FlagIcon countryCode="si" size={size} className={className} />
);

export default FlagIcon;
