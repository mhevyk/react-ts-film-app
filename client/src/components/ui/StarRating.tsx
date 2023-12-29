import starFill from "@icons/star-fill.svg";
import starStroke from "@icons/star-stroke.svg";
import styled from "styled-components";

const StarRatingWrapper = styled.div`
  display: flex;
`;

const Star = styled.img`
  width: 16px;
  height: 16px;
`;

type StarRatingProps = {
  rating: number; // Rating from 0 to 5
};

export function StarRating({ rating }: StarRatingProps) {
  return (
    <StarRatingWrapper>
      {Array.from({ length: 5 }, (_, index) => {
        const isFilled = index + 1 <= rating;
        return (
          <Star
            key={index}
            src={isFilled ? starFill : starStroke}
            alt={`${isFilled ? "Filled" : "Stroke"} star`}
          />
        );
      })}
    </StarRatingWrapper>
  );
}
