import StarFill from "@icons/star-fill.svg?react";
import StarStroke from "@icons/star-stroke.svg?react";
import styled from "styled-components";

const Stars = styled.div`
  display: flex;
`;

type StarRatingProps = {
  rating: number; // Rating from 0 to 5
};

export function StarRating({ rating }: StarRatingProps) {
  return (
    <Stars>
      {Array.from({ length: 5 }, (_, index) => (
        <Star filled={index + 1 <= rating} />
      ))}
    </Stars>
  );
}

type StarProps = {
  filled: boolean;
};

function Star({ filled }: StarProps) {
  const StarComponent = filled ? StarFill : StarStroke;

  return <StarComponent color="white" width={16} height={16} />;
}
