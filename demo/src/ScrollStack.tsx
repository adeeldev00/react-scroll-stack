import React from "react";
import type { CSSProperties } from "react";

export interface ScrollStackItem {
  /** The card's main content */
  children: React.ReactNode;
}

export interface ScrollStackProps {
  /** Array of items — each one becomes a stacking card */
  items: ScrollStackItem[];
  /** How far from viewport top the card sticks (should clear your navbar) */
  stickyTop?: number;
  /** Background color of each card — must be solid (covers card below) */
  cardBackground?: string;
  /** Top border color between cards */
  dividerColor?: string;
  /** Box shadow for the depth/layering effect */
  cardShadow?: string;
  /** Padding inside each card (px) */
  cardPaddingY?: number;
  className?: string;
}

export function ScrollStack({
  items,
  stickyTop = 0,
  cardBackground = "#000210",
  dividerColor = "#303030",
  cardShadow = "0px 0px 100px 0px rgba(0,0,0,1)",
  cardPaddingY = 40,
  className,
}: ScrollStackProps) {
  return (
    <div
      className={className}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {items.map((item, index) => {
        const cardStyle: CSSProperties = {
          position: "sticky",
          top: stickyTop,
          zIndex: index + 1,
          backgroundColor: cardBackground,
          boxShadow: cardShadow,
          paddingTop: cardPaddingY,
          paddingBottom: cardPaddingY,
          overflow: "hidden",
          width: "100%",
          ...(index > 0 && {
            borderTop: `1px solid ${dividerColor}`,
          }),
        };

        return (
          <div key={index} style={cardStyle}>
            {item.children}
          </div>
        );
      })}
    </div>
  );
}

export default ScrollStack;
