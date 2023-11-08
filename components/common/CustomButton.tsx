"use client";
import { Badge, Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

interface CustomButtonProps {
  children?: React.ReactNode;
  className?: string;
  isIconOnly?: boolean | false;
  type?: "blog" | "forum" | "chat" | "follow" | "unfollow" | "profile";
  onClick?: any;
  loading?: boolean;
  size?: any;
  variant?: "solid" | "text" | "ghost" | "bordered" | "flat" | "default";
  clickType?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  server?: boolean | false;
  path?: string | "/";
  badge?: boolean;
  badgeContent?: string | number;
  badgeColor?: "default" | "primary" | "success" | "warning" | "error" | any;
  color?: any;
}

const CustomButton = ({
  children,
  className,
  type,
  onClick,
  loading = false,
  size = "md",
  variant = "solid",
  clickType,
  fullWidth = false,
  server = false,
  path,
  isIconOnly = false,
  badge = false,
  badgeContent,
  badgeColor,
  color,
}: CustomButtonProps) => {
  const router = useRouter();

  let buttonColor = "";

  if (variant === "bordered") {
    // Use the color prop for border color when the variant is 'bordered'
    switch (type) {
      case "blog":
        buttonColor = "text-[#fff] border border-[#4E2486] text-[#4E2486]";
        break;
      case "forum":
        buttonColor = "text-[#fff] border border-[#489550] text-[#489550]";
        break;
      case "chat":
        buttonColor = "text-[#fff] border border-[#6FA9FD] text-[#6FA9FD]";
        break;
      case "follow":
        buttonColor = "text-[#fff] border border-[#34B553] text-[#34B553]";
        break;
      case "unfollow":
        buttonColor = "text-[#fff] border border-[#E5140F] text-[#E5140F]";
        break;
      case "profile":
        buttonColor = "text-[#fff] border border-[#980385] text-[#980385]";
        break;
      default:
        buttonColor = "text-[#4E2486] bg-transparent";
    }
  } else if (variant === "flat") {
    buttonColor = "";
  } else {
    // Handle other cases as before
    switch (type) {
      case "blog":
        buttonColor = "text-[#fff] bg-[#4E2486]";
        break;
      case "forum":
        buttonColor = "text-[#fff] bg-[#34B553]";
        break;
      case "chat":
        buttonColor = "text-[#fff] bg-[#6FA9FD]";
        break;
      case "follow":
        buttonColor = "text-[#fff] bg-[#34B553]";
        break;
      case "unfollow":
        buttonColor = "text-[#fff] bg-[#E5140F]";
        break;
      case "profile":
        buttonColor = "text-[#fff] bg-[#980385]";
        break;
      default:
        // Set a default color if 'type' doesn't match any of the above cases
        buttonColor = "text-[#4E2486] bg-transparent";
    }
  }

  return badge ? (
    server ? (
      <Badge content={badgeContent} color={badgeColor}>
        <Button
          isIconOnly={isIconOnly}
          fullWidth={fullWidth}
          isLoading={loading}
          variant={variant as any | "solid"}
          onClick={() => {
            router.push(path!);
          }}
          size={size}
          className={buttonColor + " " + className}
          type={clickType}
          color={color}
        >
          {children}
        </Button>
      </Badge>
    ) : (
      <Badge content={badgeContent} color={badgeColor}>
        <Button
          isIconOnly={isIconOnly}
          fullWidth={fullWidth}
          isLoading={loading}
          variant={variant as any | "solid"}
          onClick={onClick}
          size={size}
          className={buttonColor + " " + className}
          type={clickType}
          color={color}
        >
          {children}
        </Button>
      </Badge>
    )
  ) : server ? (
    <Button
      isIconOnly={isIconOnly}
      fullWidth={fullWidth}
      isLoading={loading}
      variant={variant as any | "solid"}
      onClick={() => {
        router.push(path!);
      }}
      size={size}
      className={buttonColor + " " + className}
      type={clickType}
      color={color}
    >
      {children}
    </Button>
  ) : (
    <Button
      isIconOnly={isIconOnly}
      fullWidth={fullWidth}
      isLoading={loading}
      variant={variant as any | "solid"}
      onClick={onClick}
      size={size}
      className={buttonColor + " " + className}
      type={clickType}
      color={color}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
