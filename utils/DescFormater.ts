"use client";
import parse from "html-react-parser";

export const DescFormater = ({
  desc,
  length,
}: {
  desc: string;
  length: number;
}) => {
  // Parse the HTML and convert it to a React component
  const parsedContent: any = desc && parse(desc);

  // Extract the text content from the parsed HTML
  let textContent = parsedContent?.props?.children;

  if (!textContent) {
    textContent =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  }

  // Return the text content with a maximum length
  if (textContent) {
    return textContent.length > length
      ? textContent.substring(0, length) + "..."
      : textContent;
  }

  return textContent;
};
